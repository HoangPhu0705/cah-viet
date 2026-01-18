"use client";
import React, { useState } from "react";
import { PlayingCardProps } from "./types/playing-card";
import ActionCard from "./ActionCard";

export default function PlayingCard({ variant, text, size }: PlayingCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <ActionCard
      variant={variant}
      hovered={hovered}
      size={size}
      text={text}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}
