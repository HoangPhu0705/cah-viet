"use client";
import React, { useState } from "react";
import { PlayingCardProps } from "./types/playing-card";
import ActionCard from "../lobby/ActionCard";

export default function PlayingCard({
  variant,
  text,
  size,
  dataSwapyId,
}: PlayingCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <ActionCard
      dataSwapyId={dataSwapyId}
      variant={variant}
      hovered={hovered}
      size={size}
      text={text}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}
