"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Enkhjargal",
    designation: "Software Engineer",
    image: "/images/jolo.jpeg",
  },
  {
    id: 2,
    name: "Munkhzul",
    designation: "Software Engineer",
    image: "/images/munhzul.jpg",
  },
  {
    id: 3,
    name: "Bat-Erdene",
    designation: "Software Engineer",
    image: "/images/bat-erdene.jpg",
  },
  {
    id: 4,
    name: "Telmuun",
    designation: "Software Engineer",
    image: "/images/telmen.jpg",
  },
  {
    id: 5,
    name: "Tugs-Erdene",
    designation: "Software Engineer",
    image: "/images/tugsuu.jpg",
  },
];

function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default function LandingPage({
  setActivePage,
}: {
  setActivePage: (page: string) => void;
}) {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 flex flex-col items-center justify-center px-6 py-12 space-y-8">
      {/* Login & Signup buttons */}
      <div className="absolute top-4 right-6 flex space-x-4 z-10">
        <button
          onClick={() => router.push("/login")}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/signup")}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition"
        >
          Sign Up
        </button>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-100px] left-[10%] w-[400px] h-[400px] bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-[-80px] right-[5%] w-[300px] h-[300px] bg-yellow-300 rounded-full blur-2xl opacity-40 animate-ping" />
        <div className="absolute top-[50%] left-[40%] w-[200px] h-[200px] bg-purple-200 rounded-full blur-2xl opacity-30 animate-bounce" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-800"
      >
        Fund your creative work
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl text-center text-gray-600 max-w-xl"
      >
        Accept support. Start a membership. Set up a shop. It’s easier than you
        think.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10"
      >
        <AnimatedTooltipPreview />
      </motion.div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setActivePage("home")}
          className="px-6 py-3 bg-black text-white rounded-xl text-lg hover:bg-gray-800 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
