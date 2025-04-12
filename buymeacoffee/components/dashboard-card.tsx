"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Share2 } from "lucide-react";
import Image from "next/image";
import { useToken } from "@/hooks/TokenContext";
import { useUser } from "@/hooks/UserContext";


export default function DashboardCard() {
  
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const { userData } = useUser();

  const filteredTransactions = selectedAmount
    ? userData?.donationsReceived?.filter(
        (donation) => donation.amount === selectedAmount
      )
    : userData?.donationsReceived || [];

  const totalEarnings = userData?.donationsReceived?.reduce(
    (sum, donation) => sum + donation.amount,
    0
  );

  const { token, loading } = useToken();

  useEffect(() => {
    if (loading || !token) return;
  }, [token, loading]);

  return (
    <div className="space-y-6">
      <Card className="w-full p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={userData?.profile?.avatarImage || "/default-avatar.svg"}
            alt="User Avatar"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">
              {userData?.username || "Guest"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {userData?.profile?.socialMediaUrl}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Earnings</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-sm"
                >
                  Last 30 days <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem>Last 90 days</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className="text-2xl font-bold">{totalEarnings}</p>
        </div>

        <Button variant="outline" className="mt-2 md:mt-0">
          <Share2 className="h-4 w-4 mr-2" />
          Share page link
        </Button>
      </Card>

      <div className="pt-2 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">Recent transactions</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 px-3 text-sm">
                Amount {selectedAmount ? `: $${selectedAmount}` : ""}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSelectedAmount(1)}>
                $1
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedAmount(2)}>
                $2
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedAmount(5)}>
                $5
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedAmount(10)}>
                $10
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedAmount(null)}>
                All
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {filteredTransactions.map((donation, i) => (
          <Card key={donation.id || i} className="p-4 space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center font-medium text-sm">
                  💰
                </div>
                <div>
                  <p className="font-medium">Anonymous</p>
                  {donation.message && (
                    <p className="mt-1 text-sm">{donation.message}</p>
                  )}
                </div>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-sm font-medium">+ ${donation.amount}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(donation.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
