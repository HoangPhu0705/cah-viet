"use client";
import React, { useState } from "react";
import ActionCard from "./ActionCard";

interface PlayingCardProps {
  variant: "black" | "white";
  text?: string;
}

export default function PlayingCard({ variant, text }: PlayingCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <ActionCard
      variant={variant}
      hovered={hovered}
      text={text}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}
