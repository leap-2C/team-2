import Image from "next/image";

interface CreatorInfoProps {
  name: string;
  username: string;
  avatar: string;
  bio: string;
}

export default function CreatorInfo({ name, username, avatar, bio }: CreatorInfoProps) {
  return (
    <div className="flex items-center space-x-4">
      {/* <Image
        src={avatar}
        width={60}
        height={60}
        alt="avatar"
        className="rounded-full"
      /> */}
      <div>
        <h2 className="text-2xl font-bold">@{username}</h2>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
}
