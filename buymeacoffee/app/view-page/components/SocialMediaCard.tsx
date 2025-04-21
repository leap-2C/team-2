import { useState } from "react";
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

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveProfile = async () => {
    try {
      const res = await sendRequest.put(
        "profile/update",
        {
          backgroundImage: coverImage,
          avatarImage: imageUrl,
          socialMediaUrl: socialUrl,
          aboutMe: bio,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        toast.success("Profile updated successfully");
        setIsEditing(false);
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
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
                console.log(
                  "Cover image uploaded successfully:",
                  info.secure_url
                );
              }
            }}
          >
            {({ open }) => (
              <button
                type="button"
                onClick={() => open()}
                className="relative w-full h-48 rounded-md overflow-hidden border-2 border-gray-300 shadow-md hover:opacity-80 transition"
              >
                {backgroundPreview ? (
                  <img
                    src={backgroundPreview}
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
                  {userData?.profile?.avatarImage ? (
                    <Image
                      src={userData.profile.avatarImage}
                      alt="Supporter Avatar"
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    userData?.username?.[0]?.toUpperCase() || "?"
                  )}
                </div>
                <h2 className="font-semibold text-base">
                  {userData?.username}
                </h2>
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

        {/* Profile image */}
        <div className="flex items-center space-x-4">
          {isEditing ? (
            <CldUploadWidget
            uploadPreset="ml_default"
            onSuccess={(results: CloudinaryUploadWidgetResults) => {
              const info = results.info as { secure_url?: string };
              if (info?.secure_url) {
                setProfilePreview(info.secure_url);
                setImageUrl(info.secure_url);
                console.log("Image uploaded successfully:", info.secure_url);
              }
            }}
          >
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300 hover:opacity-80 flex items-center justify-center"
                >
                  {profilePreview ? (
                    <Image
                      src={profilePreview}
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
          ) : profilePreview ? (
            <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-300">
              <Image
                src={profilePreview}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          ) : null}
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
            {userData?.profile?.aboutMe || "No bio available"}
          </p>
        )}

        {/* Social media URL */}
        <div>
          <h3 className="text-sm font-medium mb-1 flex items-center gap-1">
            <Link className="w-4 h-4" />
            {userData?.profile?.socialMediaUrl}
          </h3>
          {isEditing ? (
            <Input
              value={socialUrl}
              onChange={(e) => setSocialUrl(e.target.value)}
              placeholder="Enter your social media URL"
            />
          ) : (
            <a
              href={socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline break-all"
            >
              {socialUrl}
            </a>
          )}
        </div>

        {isEditing && (
          <div className="pt-2">
            <Button onClick={saveProfile}>Save changes</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
