"use client";

import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import { PlayingCardProps } from "./types/playing-card";

interface CardHandProps {
  cards: PlayingCardProps[];
}

const CARD_WIDTH = 156; // px
const CARD_HEIGHT = 232; // px
const SPREAD_OVERLAP = 50; // px each card overlaps the previous when fanned
const MAX_ROTATION = 6; // max rotation in degrees for outermost cards
const COLLAPSED_OFFSET = 4; // px offset per card when stacked

export default function CardHand({ cards }: CardHandProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [containerHovered, setContainerHovered] = useState(false);
  const count = cards.length;

  // Fanned: card spacing = CARD_WIDTH - SPREAD_OVERLAP
  const cardStep = CARD_WIDTH - SPREAD_OVERLAP;
  const totalFannedWidth = CARD_WIDTH + cardStep * (count - 1);
  const containerWidth = totalFannedWidth + 120; // padding
  const containerHeight = CARD_HEIGHT + 40; // room for hover lift

  const centerX = containerWidth / 2;

  return (
    <div
      className="relative"
      style={{ width: containerWidth, height: containerHeight }}
      onMouseEnter={() => setContainerHovered(true)}
      onMouseLeave={() => {
        setContainerHovered(false);
        setHoveredIndex(null);
      }}
    >
      {cards.map((card, i) => {
        const mid = (count - 1) / 2;
        const t = count > 1 ? (i - mid) / mid : 0; // -1 to 1

        // Fanned position: evenly spaced from center
        const fannedLeft = centerX - totalFannedWidth / 2 + cardStep * i;
        const fannedRotation = t * MAX_ROTATION;

        // Collapsed position: stacked at center with tiny offset
        const collapsedLeft =
          centerX - CARD_WIDTH / 2 + (i - mid) * COLLAPSED_OFFSET;
        const collapsedRotation = (i - mid) * 1.5;

        const left = containerHovered ? fannedLeft : collapsedLeft;
        const rotation = containerHovered ? fannedRotation : collapsedRotation;

        const isHovered = hoveredIndex === i;
        const hoverLift = isHovered && containerHovered ? -20 : 0;

        return (
          <div
            key={i}
            className="absolute transition-all duration-300 ease-out"
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              left,
              bottom: 20 - hoverLift,
              transform: `rotate(${rotation}deg) ${isHovered ? "scale(1.1) translateX(-20px)" : ""}`,
              transformOrigin: "bottom center",
              zIndex: isHovered ? count + 1 : i + 1,
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <PlayingCard
              variant={card.variant}
              text={card.text}
              className={card.className}
            />
          </div>
        );
      })}
    </div>
  );
}
