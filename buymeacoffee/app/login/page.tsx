"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { sendRequest } from "@/lib/sendRequest";
import { Eye, EyeOff } from "lucide-react";
import { LoginResponse } from "@/lib/types";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
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
        localStorage.setItem("hasLoggedIn", "true");
        toast.success("Login successful");

        if (response.data.hasProfile) {
          router.push("/");
        } else {
          router.push("/profile-setup");
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
    <div className="relative h-screen">
      <div className="absolute top-4 right-4">
              <Button
                className="bg-gray-300 text-black"
                onClick={() => (window.location.href = "/signup")}
              >
                Sign Up
              </Button>
            </div>

      <div className="flex flex-col md:flex-row h-full">
        <div className="flex justify-center items-center bg-amber-400 w-full md:w-1/2 p-6 md:p-0">
          <div className="flex flex-col justify-center items-center w-full md:w-[455px]">
            <Image
              src="/images/illustration.png"
              alt="illustration"
              width={240}
              height={240}
              className="object-cover mb-6 rounded-[30px]"
            />
            <p className="text-xl md:text-2xl font-bold">
              Fund your creative work
            </p>
            <p className="text-sm md:text-[16px] text-center mt-3">
              Accept support. Start a membership. Setup a shop. It's easier than
              you think.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2 p-6 md:p-0">
          <div className="flex flex-col justify-start w-full md:w-[407px]">
            <div className="py-6">
              <p className="text-xl md:text-2xl font-bold">Welcome back</p>
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
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  placeholder="Enter email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-4 relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  placeholder="Enter password here"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute top-[46px] right-3 transform -translate-y-1/2"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-gray-600" />
                  ) : (
                    <Eye size={20} className="text-gray-600" />
                  )}
                </button>
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <div className="flex justify-between mt-6">
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
    </div>
  );
};

export default LoginPage;
