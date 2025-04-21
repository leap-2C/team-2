
"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";


export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();


  const direction = pathname === "/setup/profile" ? 1 : -1;

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: 100 * direction }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 * direction }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-xl"
      >
        {children}
      </motion.div>
    </div>
  );
}