"use client";
import React, { useState } from "react";
import { PlayingCardProps } from "./types/playing-card";
import ActionCard from "../../ui/ActionCard";
import { cn } from "@/lib/utils";

export default function PlayingCard({
  variant,
  text,
  dataSwapyId,
  className,
}: PlayingCardProps) {
  const [hovered, setHovered] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <div
      {...(dataSwapyId && { "data-swapy-item": dataSwapyId })}
      className={cn(
        "h-full w-full",
        dataSwapyId ? "cursor-grab" : "cursor-pointer",
      )}
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={() => setIsGrabbing(false)}
    >
      <ActionCard
        variant={variant}
        hovered={hovered}
        text={text}
        className={`${isGrabbing ? "cursor-grabbing" : ""} ${className || ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </div>
  );
}
