"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUpFirstStep = ({
  onNext,
}: {
  onNext: (username: string) => void;
}) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!username.trim()) {
      setError("Username is required");
      return;
    }
    if (username.length < 3) {
      setError("Username must be at least 3 characters");
      return;
    }

    onNext(username);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="absolute top-4 right-4">
        <Button
          className="bg-gray-300 text-black"
          onClick={() => (window.location.href = "/login")}
        >
          Log in
        </Button>
      </div>
      <div className="flex justify-center items-center bg-amber-400 w-1/2 h-full">
        {/* Keep your existing design */}
        <div className="flex flex-col justify-center items-center w-[455px]">
          <Image
            src="/images/illustration.png"
            alt="illustration"
            width={240}
            height={240}
            className="object-cover mb-[40px] rounded-[30px]"
          />
          <p className="text-2xl font-bold">Fund your creative work</p>
          <p className="text-[16px] text-center mt-[12px]">
            Accept support. Start a membership. Setup a shop. It's easier than
            you think.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 h-full">
        <div className="flex flex-col justify-start w-[407px]">
          <div className="py-[24px] gap-[6px]">
            <p className="text-2xl font-bold">Create Your Account</p>
            <p>Choose a username for your page</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="userName">Username</Label>
              <Input
                id="userName"
                type="text"
                className="w-full mt-[6px]"
                placeholder="Enter username here"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {error && <div className="text-red-500 mt-2">{error}</div>}
            </div>
            <Button
              type="submit"
              className="w-full mt-[24px] bg-black text-white"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpFirstStep;