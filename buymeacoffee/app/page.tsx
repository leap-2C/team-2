"use client" ;

import { useState } from "react";
import LandingPage from "./first/Landingpage";
import DashboardCard from "@/components/dashboard-card";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import Explore from "@/components/ui/explore";
import ViewProfile from "@/components/view-profile";
import { Creator } from "@/lib/types";
import ViewPage from "@/app/view-page/components/ViewPage";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("landing");
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const handleViewProfile = (creator: Creator) => {
    setSelectedCreator(creator);
    setActivePage("profile");
  };

  if (activePage === "landing") {
    return <LandingPage setActivePage={setActivePage} />;
  }

  return (
    <div className="space-y-6 p-6">
      <Header />

      <div className="flex flex-1">
        <div className="w-full md:w-64 bg-white border-r p-4">
          <Sidebar
            activePage={activePage}
            setActivePage={setActivePage}
            setSelectedCreator={setSelectedCreator}
          />
        </div>

        <div className="flex-1 p-6">
          {activePage === "home" && <DashboardCard />}
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
