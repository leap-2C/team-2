"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SuccessMessageSettings = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!message.trim()) {
      setError("Confirmation message is required.");
      return;
    }

    setError("");
    console.log("Saved confirmation message:", message);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Success Page</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
       
          <Label htmlFor="message">Confirmation message</Label>
          <Textarea
            id="message"
            placeholder="Thank you for your order!"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {error && (
            <p className="text-sm text-red-500 mt-1">{error}</p>
          )}
        </div>
        <Button onClick={handleSave}>Save changes</Button>
      </CardContent>
    </Card>
  );
};

export default SuccessMessageSettings;
