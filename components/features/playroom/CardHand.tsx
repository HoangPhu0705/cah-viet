"use client";

import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import { PlayingCardProps } from "./types/playing-card";

interface CardHandProps {
  cards: PlayingCardProps[];
}

const CARD_WIDTH = 156; // px
const CARD_HEIGHT = 232; // px
const FAN_ANGLE = 40; // total degrees spanned by the whole hand
const PIVOT_DIST = 900; // distance from pivot to card bottom-center

export default function CardHand({ cards }: CardHandProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [containerHovered, setContainerHovered] = useState(false);
  const count = cards.length;

  const startAngle = -FAN_ANGLE / 2;
  const step = count > 1 ? FAN_ANGLE / (count - 1) : 0;

  const angleRad = (FAN_ANGLE / 2) * (Math.PI / 180);
  const maxX = PIVOT_DIST * Math.sin(angleRad) + CARD_WIDTH / 2;
  const containerWidth = maxX * 2; // symmetric
  const containerHeight = CARD_HEIGHT + 56;

  // Pivot sits at the horizontal center, below the container bottom
  const pivotX = containerWidth / 2;
  const pivotY = containerHeight + (PIVOT_DIST - CARD_HEIGHT); // below the container

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
        const angleDeg = containerHovered
          ? startAngle + step * i
          : (i - (count - 1) / 2) * 2;
        const angleRad = angleDeg * (Math.PI / 180);

        // Card bottom-center position after rotating around pivot
        const cardBottomX = pivotX + PIVOT_DIST * Math.sin(angleRad);
        const cardBottomY = pivotY - PIVOT_DIST * Math.cos(angleRad);

        const isHovered = hoveredIndex === i;
        const hoverShift = isHovered && containerHovered ? -20 : 0;

        return (
          <div
            key={i}
            className="absolute transition-all duration-300"
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              left: cardBottomX - CARD_WIDTH / 2,
              top: cardBottomY - CARD_HEIGHT + hoverShift,
              transform: `rotate(${angleDeg}deg) ${isHovered ? "scale(1.1) translateX(-40px)" : ""}`,
              zIndex: isHovered ? count + 1 : i + 1,
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <PlayingCard
              dataSwapyId={`hand-card-${i}`}
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
