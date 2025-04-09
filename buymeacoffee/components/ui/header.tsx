"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full border-b px-6 py-3 flex items-center justify-between bg-white">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={24} height={24} />
        <span className="font-semibold text-lg">Buy Me Coffee</span>
      </div>

      <div className="relative">
        <button
          className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-md transition"
          onClick={toggleDropdown}
        >
          <Image
            src="/avatar-image.svg"
            alt="User avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium">Jake</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md border">
            <div className="p-2 text-sm">Settings (coming soon...)</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
