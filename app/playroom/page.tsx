"use client";

import PlayingCard from "@/components/features/lobby/PlayingCard";
import React, { useEffect, useRef } from "react";
import { createSwapy } from "swapy";

export default function Playroom() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const swapy = createSwapy(containerRef.current, {
      animation: "dynamic",
    });

    return () => {
      swapy.destroy();
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen">
      {/* Center Placeholder */}
      <div
        ref={containerRef}
        className="w-full h-full flex flex-col justify-between items-center"
      >
        {/* Center play area */}
        <div className="flex justify-center items-center flex-1">
          <div
            data-swapy-slot="center"
            className="w-40 h-56 border-2 border-dashed border-white rounded-lg flex justify-center items-center"
          >
            {/* Empty slot (will hold card when dropped) */}
          </div>
        </div>

        {/* Hand of cards at bottom */}
        <div className="flex gap-4 mb-10">
          <div data-swapy-slot="hand-1">
            <div data-swapy-item="1">
              <PlayingCard variant="white" text="Thẻ test" />
            </div>
          </div>
          <div data-swapy-slot="hand-2">
            <div data-swapy-item="2">
              <PlayingCard variant="black" text="Thẻ test 2" />
            </div>
          </div>
          <div data-swapy-slot="hand-3">
            <div data-swapy-item="3">
              <PlayingCard variant="white" text="Thẻ test 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
