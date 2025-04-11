"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full border-b px-4 py-2 flex items-center justify-between bg-white">
      <div className="flex items-center gap-2 relative">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />

        <div className="relative">
          <span className="text-xl font-medium text-black relative z-10">
            {" "}
            Buy Me Coffee
          </span>
          <div className="absolute inset-0 w-full h-full"></div>
        </div>
      </div>

      <div className="relative">
        <button
          className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded-md"
          onClick={toggleDropdown}
        >
          <Image
            src="/avatar-image.svg"
            alt="User avatar"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-xs font-medium text-black"> Jake</span>
          <ChevronDown className="w-3 h-3 text-black" />{" "}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md border">
            <div className="p-2 text-xs">Settings (coming soon...)</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
