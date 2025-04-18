"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { toast } from "react-toastify";
import { sendRequest } from "@/lib/sendRequest";
import { CheckCircle, XCircle, Eye, EyeOff } from "lucide-react";
import clsx from "clsx";

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
  const [touched, setTouched] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const passwordRules = [
    {
      label: "At least 6 characters",
      test: (val: string) => val.length >= 6,
    },
    {
      label: "Includes a lowercase letter",
      test: (val: string) => /[a-z]/.test(val),
    },
    {
      label: "Includes an uppercase letter",
      test: (val: string) => /[A-Z]/.test(val),
    },
    {
      label: "Includes a number",
      test: (val: string) => /[0-9]/.test(val),
    },
  ];

  const emailRules = [
    {
      label: "Must include @ symbol",
      test: (val: string) => val.includes("@"),
    },
    {
      label: "Must include a valid domain",
      test: (val: string) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
    },
  ];

  const validatedPassword = useMemo(() => {
    return passwordRules.map((rule) => ({
      ...rule,
      isValid: rule.test(password),
    }));
  }, [password]);

  const validatedEmail = useMemo(() => {
    return emailRules.map((rule) => ({
      ...rule,
      isValid: rule.test(email),
    }));
  }, [email]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const emailValid = validatedEmail.every((r) => r.isValid);
    const passwordValid = validatedPassword.every((r) => r.isValid);

    if (!emailValid) {
      setError("Please enter a valid email");
      return;
    }

    if (!passwordValid) {
      setError("Password does not meet the requirements");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await sendRequest.post("/user/signup", {
        username,
        email,
        password,
      });

      if (response.data.success) {
        toast("Sign up successful", { type: "success" });
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
            Accept support. Start a membership. Setup a shop. It's easier than
            you think.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2 p-6 md:p-0">
        <div className="flex flex-col justify-start w-full md:w-[407px]">
          <div className="py-6">
            <p className="text-xl md:text-2xl font-bold">Welcome, {username}</p>
            <p className="font-extralight">Connect email and set a password</p>
          </div>

          <form onSubmit={handleSignUp}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                className="w-full mt-2"
                placeholder="Enter email here"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (!touchedEmail) setTouchedEmail(true);
                }}
                required
              />
            </div>

            {touchedEmail && (
              <div className="space-y-2 mt-2">
                <ul className="space-y-1">
                  {validatedEmail.map((rule, idx) => (
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
            )}

            {/* Password Field */}
            <div className="mt-4 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full mt-2"
                placeholder="Enter password here"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (!touched) setTouched(true);
                }}
              />
              <button
                type="button"
                className="absolute right-3 top-[38px] transform -translate-y-1/2"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-600" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            {touched && (
              <div className="space-y-2 mt-4">
                <ul className="space-y-1">
                  {validatedPassword.map((rule, idx) => (
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
            )}

            {/* Error */}
            {error && <p className="text-sm text-red-500 mt-3">{error}</p>}

            {/* Buttons */}
            <div className="flex justify-between mt-6">
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
