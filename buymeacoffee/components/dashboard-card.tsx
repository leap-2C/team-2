"use client";

import { useState } from "react";
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

const transactions = [
  {
    name: "Guest",
    link: "instagram.com/welesley",
    amount: 1,
    message:
      "Thank you for being so awesome everyday! You always manage to brighten up my day when I’m feeling down. Although $1 isn’t that much money it’s all I can contribute at the moment",
    time: "10 hours ago",
    initials: "CN",
  },
  {
    name: "John",
    link: "twitter.com/johnny",
    amount: 2,
    message: "Love your content!",
    time: "2 days ago",
    initials: "JO",
  },
  {
    name: "Penelope",
    link: "facebook.com/penelope",
    amount: 5,
    message: "",
    time: "4 days ago",
    initials: "PN",
  },
  {
    name: "RandomUser",
    link: "tiktok.com/@random",
    amount: 10,
    message: "Keep it up!",
    time: "1 week ago",
    initials: "RU",
  },
];

export default function DashboardCard() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const filteredTransactions = selectedAmount
    ? transactions.filter((t) => t.amount === selectedAmount)
    : transactions;

  return (
    <div className="space-y-6">
      <Card className="w-full p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/jake-avatar-image.svg"
            alt="User Avatar"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">Jake</h2>
            <p className="text-sm text-muted-foreground">
              buymeacoffee.com/baconpancakes1
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
          <p className="text-2xl font-bold">$450</p>
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

        {filteredTransactions.map((t, i) => (
          <Card key={i} className="p-4 space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center font-medium text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.link}</p>
                  {t.message && <p className="mt-1 text-sm">{t.message}</p>}
                </div>
              </div>
              <div className="text-right whitespace-nowrap">
                <p className="text-sm font-medium">+ ${t.amount}</p>
                <p className="text-xs text-muted-foreground">{t.time}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
