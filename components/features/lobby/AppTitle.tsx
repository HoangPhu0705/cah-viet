import { LineShadowText } from "@/components/ui/line-shadow-text";
import React from "react";

export default function AppTitle() {
  return (
    <div className="relative z-10 mb-20 text-center">
      {/* Main Title with Gradient Effect */}
      <div className="relative mb-8">
        <h1 className="text-4xl font-black md:text-[10rem] lg:text-[7rem]">
          XAM
          <LineShadowText className="italic" shadowColor="black">
            CARD
          </LineShadowText>
        </h1>

        {/* Tagline */}
        <div className="mx-auto max-w-2xl text-lg leading-relaxed font-medium text-gray-600 italic md:text-xl">
          Chơi đi... hoặc không. Tôi phải mẹ bạn đâu.
        </div>
      </div>
    </div>
  );
}
