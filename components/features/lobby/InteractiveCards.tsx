"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ActionCard from "./ActionCard";

interface InteractiveCardsProps {
  joinText: string;
  createText: string;
  joinAction: string;
  createAction: string;
}

export default function InteractiveCards({
  joinText,
  createText,
  joinAction,
  createAction,
}: InteractiveCardsProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const router = useRouter();

  const handleJoinRoom = () => {
    router.push(`/playroom`);
  };

  const handleCreateRoom = () => {
    const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    router.push(`/game/${roomCode}`);
  };

  return (
    <div className="flex justify-center items-center mb-16 relative">
      <div className="relative">
        {/* White Join Card */}
        <div
          className={`absolute transition-all duration-500 ease-out ${
            hoveredCard === "join"
              ? "transform -translate-x-32 -translate-y-4 rotate-[-20deg] scale-110 z-30 shadow-2xl"
              : "transform -translate-x-24 -translate-y-2 rotate-[-12deg] z-20 shadow-lg"
          }`}
        >
          <ActionCard
            variant="white"
            text={joinText}
            actionText={joinAction}
            hovered={hoveredCard === "join"}
            onMouseEnter={() => setHoveredCard("join")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleJoinRoom}
          />
        </div>

        {/* Black Create Card */}
        <div
          className={`relative transition-all duration-500 ease-out ${
            hoveredCard === "create"
              ? "transform translate-x-32 -translate-y-4 rotate-[20deg] scale-110 z-30 shadow-2xl"
              : "transform translate-x-24 -translate-y-2 rotate-[12deg] z-20 shadow-lg"
          }`}
        >
          <ActionCard
            variant="black"
            text={createText}
            actionText={createAction}
            hovered={hoveredCard === "create"}
            onMouseEnter={() => setHoveredCard("create")}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleCreateRoom}
          />
        </div>
      </div>
    </div>
  );
}
