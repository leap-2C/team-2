"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import clsx from "clsx";

const SignUpFirstStep = ({
  onNext,
}: {
  onNext: (username: string) => void;
}) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const rules = [
    {
      label: "At least 3 characters",
      test: (val: string) => val.length >= 3,
    },
  ];

  const validated = useMemo(() => {
    return rules.map((rule) => ({
      ...rule,
      isValid: rule.test(username),
    }));
  }, [username]);

  const allValid = validated.every((rule) => rule.isValid);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!allValid) {
      setError("Please fix the username issues above.");
      return;
    }

    onNext(username);
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="absolute top-4 right-4">
        <Button
          className="bg-gray-300 text-black"
          onClick={() => (window.location.href = "/login")}
        >
          Log in
        </Button>
      </div>

      <div className="flex justify-center items-center bg-amber-400 w-full md:w-1/2 h-full p-6 md:p-0">
        <div className="flex flex-col justify-center items-center w-full md:w-[455px]">
          <Image
            src="/images/illustration.png"
            alt="illustration"
            width={240}
            height={240}
            className="object-cover mb-6 rounded-[30px]"
          />
          <p className="text-xl md:text-2xl font-bold">Fund your creative work</p>
          <p className="text-sm md:text-[16px] text-center mt-3">
            Accept support. Start a membership. Setup a shop. It's easier than you think.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-1/2 p-6 md:p-0">
        <div className="flex flex-col justify-start w-full md:w-[407px]">
          <div className="py-6">
            <p className="text-xl md:text-2xl font-bold">Create Your Account</p>
            <p>Choose a username for your page</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="userName">Username</Label>
              <Input
                id="userName"
                type="text"
                className="w-full mt-2"
                placeholder="Enter username here"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
              />
            </div>
            <div className="space-y-2 mt-4">
              <ul className="space-y-1">
                {validated.map((rule, idx) => (
                  <li
                    key={idx}
                    className={clsx(
                      "flex items-center gap-2 text-sm transition-all duration-300",
                      rule.isValid ? "text-green-600" : "text-red-500"
                    )}
                  >
                    {rule.isValid ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    <span
                      className={clsx(
                        "transition-all duration-300",
                        rule.isValid ? "line-through opacity-70" : ""
                      )}
                    >
                      {rule.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}

            <Button
              type="submit"
              className="w-full mt-6 bg-black text-white"
              disabled={!allValid}
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
