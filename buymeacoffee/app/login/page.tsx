"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { sendRequest } from "@/lib/sendRequest";

interface LoginResponse {
  token: string;
  hasProfile: boolean;
  user: {
    id: string;
    email: string;
    username: string;
  };
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await sendRequest.post<LoginResponse>("/user/login", {
        email,
        password,
      });
      
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful");
        
        
        if (response.data.hasProfile) {
          router.push("/");
        } else {
          router.push("/profile-setup"); // Else go to profile setup
        }
      }
    } catch (err) {
      console.error(err);
      setError("Failed to login. Please check your credentials and try again.");
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex relative h-screen">
      <div className="absolute top-4 right-4">
        <Button
          className="bg-gray-300 text-black"
          onClick={() => router.push("/signup")}
        >
          Sign Up
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
            <p className="text-2xl font-bold">Welcome back</p>
          </div>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full mt-[6px] p-2 border border-gray-300 rounded-md"
                placeholder="Enter email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-[16px]">
              <label htmlFor="password" className="block text-sm font-semibold">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full mt-[6px] p-2 border border-gray-300 rounded-md"
                placeholder="Enter password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex justify-between mt-[24px]">
              <Button
                type="submit"
                className="bg-black text-white w-full"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Continue"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;