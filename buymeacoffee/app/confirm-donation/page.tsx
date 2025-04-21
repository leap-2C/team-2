"use client";

import { Suspense } from "react";
import ConfirmDonationClient from "./ConfirmDonationClient";

export default function ConfirmDonationPage() {
  return (
    <Suspense fallback={<div className="text-center pt-10">Loading...</div>}>
      <ConfirmDonationClient />
    </Suspense>
  );
}
