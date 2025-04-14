"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Coffee } from "lucide-react";

const DonationCard = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");

  const amounts = [1, 2, 5, 10];

  const finalAmount =
    selectedAmount ?? (customAmount ? parseFloat(customAmount) : null);
  const isSupportDisabled =
    !finalAmount || isNaN(finalAmount) || finalAmount <= 0;

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4 space-y-4">
        <h3 className="text-lg font-semibold">Buy Jake a Coffee</h3>

        <div className="flex gap-2 flex-wrap">
          {amounts.map((amount) => (
            <Button
              key={amount}
              variant={selectedAmount === amount ? "default" : "outline"}
              className="rounded-full px-4 py-1 text-sm flex items-center gap-1"
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
            >
              <Coffee className="w-4 h-4" />${amount}
            </Button>
          ))}
        </div>

        <Input
          type="number"
          min={1}
          placeholder="Or enter custom amount"
          value={customAmount}
          onChange={(e) => handleCustomAmountChange(e.target.value)}
        />

        <Input placeholder="Enter BuyMeCoffee or social account URL:" />

        <Textarea placeholder="Please write your message here" rows={3} />

        <Button className="w-full" disabled={isSupportDisabled}>
          Support {finalAmount ? `$${finalAmount}` : ""}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DonationCard;
