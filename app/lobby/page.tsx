import React from "react";
import AppTitle from "@/components/features/lobby/AppTitle";
import InteractiveCards from "@/components/features/lobby/InteractiveCards";
import RandomQuote from "@/components/features/lobby/RandomQuote";
import AnimatedBackground from "@/components/features/lobby/AnimatedBackground";

export default function LobbyPage() {
  return (
    <AnimatedBackground>
      <RandomQuote />
      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        <AppTitle />
        <InteractiveCards
          joinText="Tham gia phòng có sẵn và lao vào cuộc chiến hỗn loạn cùng bạn bè của bạn."
          createText="Tạo một phòng mới và trở thành chủ nhân của những cuộc trò chuyện không phù hợp."
          joinAction="THAM GIA PHÒNG"
          createAction="TẠO PHÒNG"
        />
        <div className="text-center relative z-10">
          <p className="text-gray-500 text-sm md:text-base font-medium">
            XAMCard @ 2025
          </p>
        </div>
      </div>
    </AnimatedBackground>
  );
}
