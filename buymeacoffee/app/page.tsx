// "use client";

// import { useState } from "react";
// import Header from "@/components/ui/header";
// import DashboardCard from "@/components/dashboard-card";
// import Sidebar from "@/components/ui/sidebar";
// import AccountSettingsPage from "./account-settings/_components/AccountSettingsPage";
// import Explore from "@/components/ui/explore";
// import ViewProfile from "@/components/view-profile";
// import { Creator } from "@/lib/types";
// import ViewPage from "@/components/ui/view-page";

// export default function DashboardPage() {
//   const [activePage, setActivePage] = useState("home");
//   const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

//   const handleViewProfile = (creator: Creator): void => {
//     setSelectedCreator(creator);
//     setActivePage("profile");
//   };

//   return (
//     <div className="space-y-6 p-6">
//       <Header />

//       <div className="flex flex-1">
//         <div className="w-full md:w-64 bg-white border-r p-4">
//           <Sidebar activePage={activePage} setActivePage={setActivePage} />
//         </div>

//         <div className="flex-1 p-6">
//           {activePage === "home" && <DashboardCard />}

//           {activePage === "explore" && (
//             <Explore handleViewProfile={handleViewProfile} />
//           )}

//           {activePage === "account-settings" && <AccountSettingsPage />}
//           {activePage === "profile" && selectedCreator && (
//             <ViewProfile creator={selectedCreator} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Header from "@/components/ui/header";
import DashboardCard from "@/components/dashboard-card";
import Sidebar from "@/components/ui/sidebar";
import AccountSettingsPage from "./account-settings/_components/AccountSettingsPage";
import ViewPage from "@/app/view-page/.components/ViewPage";
import Explore from "@/components/ui/explore";
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
          {activePage === "view-page" && <ViewPage />}
          {activePage === "explore" && <Explore />}
        </div>
      </div>
    </div>
  );
}
