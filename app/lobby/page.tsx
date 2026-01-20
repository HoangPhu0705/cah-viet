import React from "react";
import AppTitle from "@/components/features/lobby/AppTitle";
import InteractiveCards from "@/components/features/lobby/InteractiveCards";
import RandomQuote from "@/components/features/lobby/RandomQuote";
import AnimatedBackground from "@/components/features/lobby/AnimatedBackground";

export default function LobbyPage() {
  return (
    <AnimatedBackground>
      <RandomQuote />
      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        <AppTitle />
        <InteractiveCards
          joinText="Tham gia phòng có sẵn và lao vào cuộc chiến hỗn loạn cùng bạn bè của bạn."
          createText="Tạo một phòng mới và trở thành chủ nhân của những cuộc trò chuyện không phù hợp."
          joinAction="THAM GIA PHÒNG"
          createAction="TẠO PHÒNG"
        />
        <div className="relative z-10 text-center">
          <p className="text-sm font-medium text-gray-500 md:text-base">
            XAMCard @ 2025
          </p>
        </div>
      </div>
    </AnimatedBackground>
  );
}
