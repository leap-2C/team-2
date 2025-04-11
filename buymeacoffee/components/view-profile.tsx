"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Creator, Supporter } from "@/lib/types";

export default function ViewProfile({ creator }: { creator: Creator }) {
  const [amount, setAmount] = useState<number>(1);
  const [message, setMessage] = useState<string>("");

  if (!creator) {
    return (
      <div className="text-center text-muted-foreground">
        Creator not found.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        {/* About */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-bold">{creator.name}</h2>
            <p className="text-sm text-muted-foreground">
              About {creator.name}
            </p>
            <p className="mt-2">{creator.description}</p>
          </CardContent>
        </Card>

        {/* Social URL */}
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

        {/* Supporters */}
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
                Be the first one to support Jake.
              </p>
            )}
            <Button variant="ghost">See more</Button>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT SIDE: Support Form */}
      <div>
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">
              Buy {creator.name} a Coffee
            </h2>

            <div className="flex gap-2">
              {[1, 2, 5, 10].map((val: number) => (
                <Button
                  key={val}
                  variant={amount === val ? "default" : "outline"}
                  onClick={() => setAmount(val)}
                >
                  ${val}
                </Button>
              ))}
            </div>

            <Input defaultValue={creator.url} />

            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Special message"
            />

            <Button className="w-full">Support</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
