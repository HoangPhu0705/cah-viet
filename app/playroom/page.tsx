"use client";

import PlayingCard from "@/components/features/playroom/PlayingCard";
import { createSwapy, Swapy, Config } from "swapy";
import { useEffect, useRef } from "react";

export default function Playroom() {
  const swapy = useRef<Swapy | null>(null);
  const container = useRef(null);

  useEffect(() => {
    const swapyConfig: Partial<Config> = {
      animation: "spring",
    };

    if (container.current) {
      swapy.current = createSwapy(container.current, swapyConfig);

      swapy.current.onSwap((event) => {
        console.log("Swap", event);
      });

      return () => {
        swapy.current?.destroy();
      };
    }
  }, []);

  return (
    <div
      className="flex h-screen w-full items-end justify-center p-4"
      ref={container}
    >
      <div data-swapy-slot="a" className="mr-2">
        <PlayingCard dataSwapyId="a" variant="white" text="A" size="small" />
      </div>

      <div data-swapy-slot="b" className="">
        <PlayingCard dataSwapyId="b" variant="black" text="B" size="medium" />
      </div>
    </div>
  );
}
