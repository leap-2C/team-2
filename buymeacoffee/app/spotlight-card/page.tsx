import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

function VisaCardSpotlight() {
  return (
    <div className="relative flex h-[40rem] w-full items-center justify-center overflow-hidden rounded-md bg-black/[0.96] antialiased">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      {/* Visa Card Container */}
      <div className="relative z-20 h-64 w-96 rounded-xl bg-gradient-to-br from-blue-600 to-purple-700 p-6 shadow-2xl">
        {/* Visa Logo */}
        <div className="flex justify-end">
          <div className="text-white font-bold text-2xl italic">VISA</div>
        </div>
        
        {/* Card Chip */}
        <div className="mt-8 h-10 w-14 rounded bg-yellow-400/20 flex items-center justify-center">
          <div className="h-6 w-8 rounded-sm bg-yellow-400/40"></div>
        </div>
        
        {/* Card Number */}
        <div className="mt-6">
          <div className="flex space-x-4 text-white font-mono tracking-widest">
            <span>••••</span>
            <span>••••</span>
            <span>••••</span>
            <span>1234</span>
          </div>
        </div>
        
        {/* Card Holder and Expiry */}
        <div className="mt-6 flex justify-between text-white text-sm">
          <div>
            <div className="text-neutral-300 text-xs">CARD HOLDER</div>
            <div>JOHN DOE</div>
          </div>
          <div>
            <div className="text-neutral-300 text-xs">EXPIRES</div>
            <div>12/25</div>
          </div>
        </div>
      </div>

      {/* Spotlights */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <Spotlight
        className="top-40 right-0"
        fill="purple"
      />
      
      {/* Glare effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0,_rgba(255,255,255,0)_60%)]"></div>
    </div>
  );
}

export default VisaCardSpotlight;