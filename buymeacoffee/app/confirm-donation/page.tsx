"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { sendRequest } from "@/lib/sendRequest";
import { toast } from "react-toastify";

export default function ConfirmDonationPage() {
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fullUrl, setFullUrl] = useState("");

  const amount = searchParams.get("amount") || "0";
  const recipientUsername = searchParams.get("user") || "";
  const message = searchParams.get("message") || "";
  const token = searchParams.get("token") || "";
  
  const handleConfirm = async () => {
    if (!recipientUsername || !amount) return;

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
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
      toast("Failed to send donation.", { type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(window.location.href);
    }
  }, []);

  return (
    <div className="max-w-md mx-auto pt-10">
      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          {success ? (
            <>
              <h2 className="text-xl font-bold">🎉 Thank you!</h2>
              <p>Your donation has been confirmed.</p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold">
                Confirm Donation to {recipientUsername}
              </h2>
              <p>
                Amount: <strong>${amount}</strong>
              </p>
              {message && (
                <p className="italic text-muted-foreground">"{message}"</p>
              )}
              <Button
                onClick={handleConfirm}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? "Processing..." : "Confirm Donation"}
              </Button>
            </>
          )}
          <pre className="bg-muted p-3 rounded text-sm overflow-auto break-words">
            {fullUrl}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
