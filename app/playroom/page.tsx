"use client";

import CardHand from "@/components/features/playroom/CardHand";

const HAND_CARDS = [
  { variant: "white" as const, text: "Card one" },
  { variant: "white" as const, text: "Card two" },
  { variant: "black" as const, text: "Card three" },
  { variant: "white" as const, text: "Card four" },
  { variant: "black" as const, text: "Card five" },
  { variant: "black" as const, text: "Card six" },
  { variant: "black" as const, text: "Card seven" },
  { variant: "black" as const, text: "Card eight" },
];

export default function Playroom() {
  return (
    <div className="flex h-screen w-full items-end justify-center p-16">
      <CardHand cards={HAND_CARDS} />
    </div>
  );
}
