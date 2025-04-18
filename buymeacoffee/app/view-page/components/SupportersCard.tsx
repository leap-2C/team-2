import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useUser } from "@/hooks/UserContext";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Donation } from "@/lib/types";

const SupportersCard = () => {
  const { userData } = useUser();

  const donations = userData?.donationsReceived as Donation[] || [];
  const hasSupporters = donations.length > 0;
  const uniqueDonors = Array.from(
    new Map(donations.map((d) => [d.donorId, d])).values()
  );

  return (
    <Card className={cn("transition-shadow", hasSupporters ? "shadow-purple-200 hover:shadow-purple-400" : "hover:shadow-lg")}>
      <CardContent className="p-6 space-y-4">
        <div className="text-purple-600 animate-pulse flex justify-center">
          <Heart className="w-8 h-8" />
        </div>

        {hasSupporters ? (
          <>
            <h4 className="text-lg font-semibold text-center">Supporters ❤️</h4>
            <div className="space-y-3">
              {donations.map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-start space-x-3 border rounded-md p-3 bg-gray-50 shadow-sm"
                >
                  {/* Avatar or initials */}
                  <div className="w-10 h-10 rounded-full bg-purple-200 overflow-hidden flex items-center justify-center text-white font-bold text-sm">
                    {userData?.profile?.avatarImage ? (
                      <Image
                        src={userData?.profile?.avatarImage}
                        alt="Supporter Avatar"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      userData?.username?.[0]?.toUpperCase() || "?"
                    )}
                  </div>

                  {/* Message + amount */}
                  <div className="flex-1">
                    {donation.specialMessage ? (
                      <p className="text-sm font-medium">"{donation.specialMessage}"</p>
                    ) : (
                      <p className="text-sm italic text-muted-foreground">No message left.</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Donated ${donation.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h4 className="mt-3 text-base font-semibold">No supporters yet</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Be the first to show some love
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SupportersCard;
