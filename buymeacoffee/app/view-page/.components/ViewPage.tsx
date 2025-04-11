"use client";

import { useState } from "react";
import CreatorInfo from "@/app/view-page/.components/CreatorInfo";
import SupportMessages from "@/app/view-page/.components/SupportMessages";
import SupportForm from "@/app/view-page/.components/SupportForm";

interface Message {
  name: string;
  message: string;
  amount: number;
}

const mockCreator = {
  username: "lumbeb",
  name: "Lumbeb",
  avatar: "/default-avatar.png",
  bio: "I'm a developer building cool side projects 💻",
};

const ViewPage = () => {
  const [messages, setMessages] = useState<Message[]>([]); 

  const handleSupport = (newMessage: Message) => {
    setMessages((prev) => [newMessage, ...prev]);
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 space-y-8">
      <CreatorInfo
        name={mockCreator.name}
        username={mockCreator.username}
        avatar={mockCreator.avatar}
        bio={mockCreator.bio}
      />

      <SupportForm onSupport={handleSupport} />

      <SupportMessages messages={messages} />
    </div>
  );
};

export default ViewPage;
