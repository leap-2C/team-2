"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Creator } from "../../lib/types";

const creatorsData: Creator[] = [
  {
    name: "Space ranger",
    about:
      "All day, every day, we're watching, listening to, reading and absorbing politics. It's exhausting. We then report on what we've seen in a way that's as chill as possible...",
    socialUrl: "https://buymeacoffee.com/baconpancakes1",
    image: "/space-image.svg",
    description:
      "A creator focused on delivering insightful content on various political matters.",
    url: "https://buymeacoffee.com/baconpancakes1",
    supporters: [],
  },
  {
    name: "Purple monster",
    about:
      "Purple monster is for everyone. It handles all the painful experiences and helps people.",
    socialUrl: "https://buymeacoffee.com/ifmonster23",
    image: "/purple-image.svg",
    description:
      "Purple monster handles painful experiences and offers help to people in need.",
    url: "https://buymeacoffee.com/ifmonster23",
    supporters: [],
  },
  {
    name: "Alien Conspiracy",
    about: "Show your support ❤️ and buy me a coffee! & keep project a live!",
    socialUrl: "https://buymeacoffee.com/roooaaamm",
    image: "/alien.svg",
    description:
      "An alien enthusiast bringing conspiracy theories and fun to the table!",
    url: "https://buymeacoffee.com/roooaaamm",
    supporters: [],
  },
];

export default function Explore({
  handleViewProfile,
}: {
  handleViewProfile: (creator: Creator) => void;
}) {
  const [search, setSearch] = useState("");

  const filteredCreators = creatorsData.filter((creator) =>
    creator.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 px-4 md:px-12 py-6">
      <h2 className="text-2xl font-semibold">Explore creators</h2>

      <Input
        placeholder="Search name"
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
              <Image
                src={creator.image}
                alt={creator.name}
                width={48}
                height={48}
                className="rounded-full"
              />
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
                className="mt-2 text-sm"
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
