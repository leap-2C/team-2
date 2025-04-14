"use client";

import { useState } from "react";
import Header from "@/components/ui/header";
import DashboardCard from "@/components/dashboard-card";
import Sidebar from "@/components/ui/sidebar";
import AccountSettingsPage from "./account-settings/_components/AccountSettingsPage";
import Explore from "@/components/ui/explore";
import ViewProfile from "@/components/view-profile";
import { Creator } from "@/lib/types";
import ViewPage from "@/app/view-page/components/ViewPage";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("home");
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  // Optional helper for viewing a creator profile
  const handleViewProfile = (creator: Creator) => {
    setSelectedCreator(creator);
    setActivePage("profile");
  };

  return (
    <div className="space-y-6 p-6">
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white border-r p-4">
          <Sidebar activePage={activePage} setActivePage={setActivePage} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activePage === "home" && <DashboardCard />}
          {activePage === "account-settings" && <AccountSettingsPage />}
          {activePage === "explore" && (
            <Explore handleViewProfile={handleViewProfile} />
          )}

          {activePage === "profile" && selectedCreator && (
            <ViewProfile creator={selectedCreator} />
          )}
          {activePage === "view-page" && <ViewPage />}
        </div>
      </div>
    </div>
  );
}
