"use client";

import PlayingCard from "@/components/features/lobby/PlayingCard";

export default function Playroom() {
  return (
    <div className="flex h-screen w-full items-end justify-center p-4">
      <PlayingCard variant="white" text="A" size="small" />
    </div>
  );
}
