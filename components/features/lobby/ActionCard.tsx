"use client";

import { ArrowRight } from "lucide-react";
import React from "react";

interface ActionCardProps {
  variant: "black" | "white";
  title?: string;
  text?: string;
  actionText?: string;
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick?: () => void;
}

export default function ActionCard({
  variant,
  title = "XAMCARD",
  text,
  actionText,
  hovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ActionCardProps) {
  const isBlack = variant === "black";

  return (
    <div
      className={`w-72 h-96 rounded-2xl shadow-xl flex flex-col justify-between p-8 font-bold
        hover:shadow-2xl transition-shadow duration-300 cursor-pointer
        ${
          isBlack
            ? "bg-black text-white border-2 border-black"
            : "bg-white text-black border-2 border-black"
        }
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div>
        <div
          className={`text-sm mb-6 font-normal uppercase tracking-wider ${
            isBlack ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {title}
        </div>
        {text && (
          <div
            className={`text-xl leading-relaxed font-medium ${
              isBlack ? "text-white" : "text-black"
            }`}
          >
            {text}
          </div>
        )}
      </div>
      {actionText && (
        <div className="text-center">
          <div className="flex flex-col items-center justify-center space-x-2">
            <div
              className={`text-2xl font-black uppercase tracking-wide ${
                isBlack ? "text-white" : "text-black"
              }`}
            >
              {actionText}
            </div>
            <ArrowRight
              className={`w-10 h-10 transition-all duration-300 ${
                isBlack ? "text-white" : "text-black"
              } ${
                hovered
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
