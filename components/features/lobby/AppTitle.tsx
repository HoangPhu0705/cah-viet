import { LineShadowText } from "@/components/ui/line-shadow-text";
import React from "react";

export default function AppTitle() {
  return (
    <div className="mb-20 text-center relative z-10">
      {/* Main Title with Gradient Effect */}
      <div className="relative mb-8">
        <h1 className="text-4xl md:text-[10rem] lg:text-[7rem] font-black">
          XAM
          <LineShadowText className="italic" shadowColor="black">
            CARD
          </LineShadowText>
        </h1>

        {/* Tagline */}
        <div className="text-lg md:text-xl text-gray-600 font-medium italic max-w-2xl mx-auto leading-relaxed">
          Chơi đi... hoặc không. Tôi phải mẹ bạn đâu.
        </div>
      </div>
    </div>
  );
}
