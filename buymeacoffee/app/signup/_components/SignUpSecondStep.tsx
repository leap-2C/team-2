"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const SignUpSecondStep = ({
  username,
  onPrev,
}: {
  username: string;
  onPrev: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:9000/user/signup", {
        username,
        email,
        password,
      });
      
      if (response.data.success) {
        toast("Sign up successful", {type: "success"});
        router.push("/login");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
      toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen">
      {/* Keep your existing design */}
      <div className="absolute top-4 right-4">
        <Button
          className="bg-gray-300 text-black"
          onClick={() => (window.location.href = "/login")}
        >
          Log in
        </Button>
      </div>
      <div className="flex justify-center items-center bg-amber-400 w-1/2 h-full">
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
            <p className="text-2xl font-bold">Welcome, {username}</p>
            <p>Connect email and set a password</p>
          </div>
          <form onSubmit={handleSignUp}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                className="w-full mt-[6px]"
                placeholder="Enter email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-[16px]">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                className="w-full mt-[6px]"
                placeholder="Enter password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex justify-between mt-[24px]">
              <Button
                type="button"
                variant="outline"
                onClick={onPrev}
                className="mr-2"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="bg-black text-white flex-1"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Complete Sign Up"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpSecondStep;