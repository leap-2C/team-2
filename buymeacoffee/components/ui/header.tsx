"use client";

import React from "react";
import Image from "next/image";
import { ChevronDown, LogOut } from "lucide-react";
import { useUser } from "@/hooks/UserContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {toast} from "react-toastify";
import { getValidImageUrl } from "@/utils/getVAlidImageUrl";
import { get } from "http";




const Header = ({  }) => {
  const { userData } = useUser();
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
    toast("Logged out successfully", {type: "success"});
  };


  return (
    <header className="w-full border-b px-4 py-2 flex items-center justify-between bg-white">
      <div className="flex items-center gap-2 relative">
        <Image src="/logo.svg" alt="Logo" width={24} height={24} />

        <div className="relative">
          <span className="text-xl font-medium text-black relative z-10">
            Buy Me Coffee
          </span>
          <div className="absolute inset-0 w-full h-full"></div>
        </div>
      </div>

      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded-md">
              <Image
                src={getValidImageUrl(userData?.profile?.avatarImage || "/avatar-image.svg")}
                alt="User avatar"
                width={30}
                height={30}
                className="rounded-full"
              />
              <h2 className="text-xs font-medium text-black">
                {userData?.username}
              </h2>
              <ChevronDown className="w-3 h-3 text-black" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            side="bottom"
            className="w-32 bg-white shadow-md rounded-md border"
          >
            <DropdownMenuItem
              className="p-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-black cursor-pointer flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 text-red-500" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
