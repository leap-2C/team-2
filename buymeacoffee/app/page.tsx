"use client";

import { useState } from "react";
import Header from "@/components/ui/header";
import DashboardCard from "@/components/dashboard-card";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="space-y-6 p-6">
      <Header />
      <DashboardCard />
    </div>
  );
}
