"use client";
import { ActionCardProps } from "./types/action-card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function ActionCard({
  dataSwapyId,
  variant,
  title = "XAMCARD",
  text,
  size = "medium",
  actionText,
  hovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ActionCardProps) {
  const isBlack = variant === "black";

  return (
    <div
      data-swapy-item={dataSwapyId}
      className={cn(
        "flex cursor-pointer flex-col justify-between rounded-2xl p-4 font-bold shadow-lg transition-shadow duration-300",
        size === "small"
          ? "h-64 w-48"
          : size === "large"
            ? "h-[24rem] w-80"
            : "h-80 w-64",
        isBlack ? "border bg-black text-white" : "border bg-white text-black",
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="flex h-full w-full flex-col justify-between">
        {text && (
          <div
            className={`text-lg leading-relaxed font-normal ${
              isBlack ? "text-white" : "text-black"
            }`}
          >
            {text}
          </div>
        )}
        <div
          className={`mb-4 text-center text-xs font-normal tracking-wider uppercase ${
            isBlack ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {title}
        </div>
      </div>
      {actionText && (
        <div className="text-center">
          <div className="flex flex-col items-center justify-center space-x-2">
            <div
              className={`text-xl font-black tracking-wide uppercase ${
                isBlack ? "text-white" : "text-black"
              }`}
            >
              {actionText}
            </div>
            <ArrowRight
              className={`h-8 w-8 transition-all duration-300 ${
                isBlack ? "text-white" : "text-black"
              } ${
                hovered
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-2 opacity-0"
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
