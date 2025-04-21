"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Creator } from "../../lib/types";
import { sendRequest } from "@/lib/sendRequest";
import { FetchedUser } from "@/lib/types";
import ExploreSkeleton from "../Export-skeleton";
import { getValidImageUrl } from "@/utils/getVAlidImageUrl";

export default function Explore({
  handleViewProfile,
}: {
  handleViewProfile: (creator: Creator) => void;
}) {
  const [search, setSearch] = useState("");
  const [usersData, setUsersData] = useState<FetchedUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchExplore = async () => {
    try {
      setLoading(true);
      const response = await sendRequest.get("/user/explore");
      setUsersData(response.data.data);
    } catch (err) {
      setError("Failed to fetch users");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExplore();
  }, []);



  const creatorsData = usersData.map((user) => ({
    name: user.username,
    about: user.profile?.aboutMe || "No description available",
    socialUrl: user.profile?.socialMediaUrl || "#",
    image: getValidImageUrl(user.profile?.avatarImage),
    description: user.profile?.aboutMe || "No description available",
    url: user.profile?.socialMediaUrl || "#",
    supporters: [],
    donor: {
      id: user.id,
      username: user.username,
      profile: {
        avatarImage: user.profile?.avatarImage || null,
      },
    },
  }));

  const filteredCreators = creatorsData.filter((creator) =>
    creator.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
     <ExploreSkeleton/>
    );
  if (error)
    return <div className="p-6 text-center text-red-500">Error: {error}</div>;
  if (usersData.length === 0)
    return <div className="p-6 text-center">No creators found</div>;

  return (
    <div className="space-y-6 px-4 md:px-12 py-6">
      <h2 className="text-2xl font-semibold">Explore creators</h2>

      <Input
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />

      <div className="space-y-4">
        {filteredCreators.map((creator) => (
          <Card
            key={creator.name}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-4"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{creator.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">
                  About {creator.name}
                </p>
                <p className="text-sm mt-1 max-w-md">{creator.about}</p>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
              <p className="text-sm font-medium">Social media URL</p>
              <a
                href={creator.socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 break-words hover:underline"
              >
                {creator.socialUrl}
              </a>
              <Button
                variant="outline"
                className="mt-2 text-sm cursor-pointer"
                onClick={() => handleViewProfile(creator)}
              >
                View profile <ExternalLink size={14} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
