"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Creator, Supporter } from "@/lib/types";
import QRCode from "react-qr-code";
import { useToken } from "@/hooks/TokenContext";
import { useUser } from "@/hooks/UserContext";
import { UserData } from "@/lib/types";
import Image from "next/image";

export default function ViewProfile({ creator }: { creator: Creator }) {
  const [amount, setAmount] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const recipientUsername = creator.name;
  const { token } = useToken();
  const { userData } = useUser() as { userData: UserData };

  const donationUrl = `https://buymeacoffee-ashen.vercel.app/confirm-donation?amount=${amount}&user=${recipientUsername}&message=${encodeURIComponent(
    message
  )}&token=${token}`;

  if (!creator) {
    return (
      <div className="text-center text-muted-foreground">
        Creator not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Background image */}
      <div className="relative w-full h-52 md:h-64 lg:h-72 overflow-hidden rounded-xl">
        <img
          src="/galaxy.svg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="grid md:grid-cols-2 gap-6 px-4 md:px-0">
        {/* Left Column - Creator Info */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-bold">{creator.name}</h2>
              <p className="text-sm text-muted-foreground">
                About {creator.name}
              </p>
              <p className="mt-2">{creator.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-medium text-muted-foreground">
                Social media URL
              </h3>
              <a
                href={creator.url}
                className="text-blue-600 underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {creator.url}
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground">
                Recent Supporters
              </h3>
              {userData?.donationsReceived?.length > 0 ? (
                userData.donationsReceived.map((donation) => (
                  <div key={donation.id} className="text-sm">
                    <div className="flex items-center gap-2">
                      <Image
                        src={
                          donation.donor.profile?.avatarImage ||
                          "/avatar-image.svg"
                        }
                        alt={`${donation.donor.username}'s avatar`}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <p>
                        <strong>{donation.donor.username}</strong>
                        <p>${donation.amount}</p>
                      </p>
                    </div>
                    {donation.specialMessage && (
                      <p className="text-muted-foreground mt-1 pl-8">
                        "{donation.specialMessage}"
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Be the first one to support {userData.username}.
                </p>
              )}
              <Button variant="ghost">See more</Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Donation Form */}
        <div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-lg font-semibold">
                Buy {creator.name} a Coffee
              </h2>

              <Button
                className="w-full"
                onClick={() => setShowQr(true)}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Support"}
              </Button>
              {showQr && (
                <div className="flex justify-center pt-4">
                  <QRCode value={donationUrl} />
                </div>
              )}

              <div className="flex gap-2">
                {[1, 2, 5, 10].map((val) => (
                  <Button
                    key={val}
                    variant={amount === val ? "default" : "outline"}
                    onClick={() => setAmount(val)}
                    value={amount}
                  >
                    ${val}
                  </Button>
                ))}
              </div>

              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Say something nice..."
                className="min-h-[100px]"
              />

              <Button
                className="w-full"
                onClick={() => setShowQr(true)}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Support"}
              </Button>

              {!token && (
                <p className="text-sm text-muted-foreground text-center">
                  You're supporting as a guest
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
