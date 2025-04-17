"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Creator, Supporter } from "@/lib/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { sendRequest } from "@/lib/sendRequest";
import { useToken } from "@/hooks/TokenContext";

export default function ViewProfile({ creator }: { creator: Creator }) {
  const [amount, setAmount] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { token } = useToken();
  const recipientUsername = creator.name;

  const handleDonation = async () => {
    if (!recipientUsername) return;
    setIsLoading(true);
    try {
      const res = await sendRequest.post(
        "/user/donation",
        {
          amount,
          recipientUsername,
          specialMessage: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 201) {
        toast("Donation sent successfully!", { type: "success" });
        setAmount(1);
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending donation:", error);
      toast("Failed to send donation. Please try again.", { type: "error" });
      setIsLoading(false);
    }
  };

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
              {creator.supporters && creator.supporters.length > 0 ? (
                creator.supporters.map((s: Supporter, index: number) => (
                  <div key={index} className="text-sm">
                    <p>
                      <strong>{s.name}</strong> bought ${s.amount} coffee
                    </p>
                    <p className="text-muted-foreground">{s.message}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Be the first one to support {creator.name}.
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
                onClick={handleDonation}
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
