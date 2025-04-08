"use client";

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

export default function DashboardCard() {
  return (
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
              <Button variant="outline" size="sm" className="h-8 px-3 text-sm">
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
  );
}
