"use client";

import { useState } from "react";
import Header from "@/components/ui/header";
import DashboardCard from "@/components/dashboard-card";
import Sidebar from "@/components/ui/sidebar";
import AccountSettingsPage from "./account-settings/_components/AccountSettingsPage";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="space-y-6 p-6">
      <Header />

      <div className="flex flex-1">
        <div className="w-full md:w-64 bg-white border-r p-4">
          <Sidebar activePage={activePage} setActivePage={setActivePage} />
        </div>
        <div className="flex-1 p-6">
          {activePage === "home" && <DashboardCard />}
          {activePage === "account-settings" && <AccountSettingsPage />}
        </div>
      </div>
    </div>
  );
}
