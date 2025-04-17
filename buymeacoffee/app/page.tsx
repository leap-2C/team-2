"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LandingPage from "./first/Landingpage";
import DashboardCard from "@/components/dashboard-card";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import Explore from "@/components/ui/explore";
import ViewProfile from "@/components/view-profile";
import { Creator } from "@/lib/types";
import ViewPage from "@/app/view-page/components/ViewPage";
import { Tabs } from "@/components/ui/tabs";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("landing");
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const hasLoggedIn = localStorage.getItem("hasLoggedIn");
      if (hasLoggedIn === "true") {
        setActivePage("home");
        router.push("/home");
      }
    }
  }, [isClient, router]);

  const handleViewProfile = (creator: Creator) => {
    setSelectedCreator(creator);
    setActivePage("profile");
    router.push("/profile");
  };

  const handleLogout = (): void => {
    localStorage.setItem("hasLoggedIn", "false");
    setActivePage("landing");
    router.push("/landing");
  };

  if (!isClient) return null;

  if (activePage === "landing") {
    return <LandingPage setActivePage={setActivePage} />;
  }

  const tabs = [
    {
      title: "Home",
      value: "home",
      content: <DashboardCard />,
    },
    {
      title: "Explore",
      value: "explore",
      content: <Explore handleViewProfile={handleViewProfile} />,
    },
    {
      title: "Profile",
      value: "profile",
      content: selectedCreator ? <ViewProfile creator={selectedCreator} /> : null,
    },
    {
      title: "View Page",
      value: "view-page",
      content: <ViewPage />,
    },
  ];

  return (
    <div className="space-y-4 p-4 sm:p-6">
      <Header handleLogout={handleLogout} />

      <div className="block sm:hidden">
        <Tabs tabs={tabs} />
      </div>

      <div className="hidden sm:flex flex-col sm:flex-row flex-1">
        <div className="w-full sm:w-64 bg-white border-r p-4 mb-4 sm:mb-0">
          <Sidebar
            activePage={activePage}
            setActivePage={setActivePage}
            setSelectedCreator={setSelectedCreator}
          />
        </div>

        <div className="flex-1 p-0 sm:p-6 space-y-6">
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
