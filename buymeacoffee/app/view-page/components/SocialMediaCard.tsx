import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Pencil, Camera, Link } from "lucide-react";
import Image from "next/image";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { sendRequest } from "@/lib/sendRequest";
import { useToken } from "@/hooks/TokenContext";
import { toast } from "react-toastify";
import { useUser } from "@/hooks/UserContext";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [name, setName] = useState("Jake");
  const [bio, setBio] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [socialUrl, setSocialUrl] = useState("");
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [backgroundPreview, setBackgroundPreview] = useState<string | null>(
    null
  );
  const { token } = useToken();
  const { userData } = useUser();

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setName(profile.name || "Jake");
      setBio(profile.bio || "");
      setImageUrl(profile.imageUrl || null);
      setCoverImage(profile.coverImage || null);
      setSocialUrl(profile.socialUrl || "");
    } else {
      if (token) {
        getProfileData();
      }
    }
  }, [token]);

  const getProfileData = async () => {
    try {
      const res = await sendRequest.get("profile/details", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setName(res.data.username || "");
        setBio(res.data.profile?.aboutMe || "");
        setImageUrl(res.data.profile?.avatarImage || null);
        setCoverImage(res.data.profile?.backgroundImage || null);
        setSocialUrl(res.data.profile?.socialMediaUrl || "");
      } else {
        toast.error("❌ Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      toast.error("Failed to load profile data");
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveProfile = async () => {
    setIsSaving(true);

    const payload = {
      backgroundImage: coverImage || "",
      avatarImage: imageUrl || "",
      socialMediaUrl: socialUrl || "",
      aboutMe: bio || "",
    };

    try {
      const res = await sendRequest.put("profile/update", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        toast.success("Profile saved!", {
          position: "top-center",
          autoClose: 1800,
        });

        const profileData = {
          name,
          bio,
          imageUrl,
          coverImage,
          socialUrl,
        };
        localStorage.setItem("userProfile", JSON.stringify(profileData));

        await getProfileData();

        setProfilePreview(null);
        setBackgroundPreview(null);

        setIsEditing(false);
      } else {
        toast.error("❌ Failed to update profile");
      }
    } catch (error) {
      console.error("Request error: ", error);
      toast.error("Something went wrong");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4 space-y-4">
        {isEditing && (
          <CldUploadWidget
            uploadPreset="ml_default"
            onSuccess={(results: CloudinaryUploadWidgetResults) => {
              const info = results?.info as { secure_url?: string };
              if (info?.secure_url) {
                setBackgroundPreview(info.secure_url);
                setCoverImage(info.secure_url);
              }
            }}
          >
            {({ open }) => (
              <button
                type="button"
                onClick={() => open()}
                className="relative w-full h-48 rounded-md overflow-hidden border-2 border-gray-300 shadow-md hover:opacity-80 transition"
              >
                {backgroundPreview || coverImage ? (
                  <img
                    src={backgroundPreview || coverImage || ""}
                    alt="Cover Image"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500 text-sm">
                    Upload Cover Image
                  </div>
                )}
              </button>
            )}
          </CldUploadWidget>
        )}

        <div className="flex justify-between items-start">
          <div className="flex-1">
            {isEditing ? (
            <div></div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-200 overflow-hidden flex items-center justify-center text-white font-bold text-sm">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt="Avatar"
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    name?.[0]?.toUpperCase() || "?"
                  )}
                </div>
                <h2 className="font-semibold text-base">{name}</h2>
              </div>
            )}
          </div>

          {!isEditing && (
            <Button
              size="sm"
              variant="ghost"
              className="text-sm flex gap-1 items-center"
              onClick={toggleEdit}
            >
              <Pencil className="w-4 h-4 cursor-pointer" />
              Edit
            </Button>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {isEditing ? (
            <CldUploadWidget
              uploadPreset="ml_default"
              onSuccess={(results: CloudinaryUploadWidgetResults) => {
                const info = results.info as { secure_url?: string };
                if (info?.secure_url) {
                  setProfilePreview(info.secure_url);
                  setImageUrl(info.secure_url);
                }
              }}
            >
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300 hover:opacity-80 flex items-center justify-center"
                >
                  {profilePreview || imageUrl ? (
                    <Image
                      src={profilePreview || imageUrl || ""}
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-500 text-xs">
                      <Camera className="w-5 h-5 mb-1" />
                      <span className="text-[10px] font-medium text-center px-1">
                        Upload Profile Image
                      </span>
                    </div>
                  )}
                </button>
              )}
            </CldUploadWidget>
          ) : (
            imageUrl && (
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300">
                <Image
                  src={imageUrl}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            )
          )}
        </div>

        {isEditing ? (
          <Textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            placeholder="Tell people about yourself..."
          />
        ) : (
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">
            {bio || "No bio available"}
          </p>
        )}

        <div>
          <h3 className="text-sm font-medium mb-1 flex items-center gap-1">
            <Link className="w-4 h-4" />
            Social Media
          </h3>
          {isEditing ? (
            <Input
              value={socialUrl}
              onChange={(e) => setSocialUrl(e.target.value)}
              placeholder="Enter your social media URL"
            />
          ) : (
            socialUrl && (
              <a
                href={socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline break-all"
              >
                {socialUrl}
              </a>
            )
          )}
        </div>

        {isEditing && (
          <div className="pt-2">
            <Button onClick={saveProfile} disabled={isSaving}>
              {isSaving ? "Saving..." : "Save changes"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
