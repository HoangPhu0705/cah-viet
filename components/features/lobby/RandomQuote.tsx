"use client";

import { WordRotate } from "@/components/ui/word-rotate";
import React, { useState, useEffect } from "react";

const funnyQuotes = [
  "Nơi tình bạn bị phản bội chỉ bằng một lá bài.",
  "Cách nhanh nhất để mất người yêu và được thêm kẻ thù.",
  "Nơi thánh thiện cũng phải bật chế độ toxic.",
  "Khi bạn muốn vừa mất bạn bè, vừa được thêm drama.",
  "Trò chơi khiến mẹ bạn phải rút dây mạng.",
  "Nơi drama còn thật hơn phim Hàn.",
  "Khi đạo đức đi nghỉ mát, trò chơi này lên ngôi.",
  "Trò chơi khiến Trấn Thành hết khóc",
  "Game này không có bug, chỉ có người chơi toxic.",
];

export default function RandomQuote() {
  return (
    <div className="relative z-10 mb-4 text-center">
      <div className="mx-auto flex w-3xl max-w-3xl justify-center gap-3 rounded-2xl border-2 border-black bg-gradient-to-r from-white via-gray-50 to-white p-4 shadow-xl">
        <span className="text-5xl">&ldquo;</span>

        <WordRotate
          className="mb-4 text-xl leading-relaxed font-medium text-black md:text-2xl"
          words={funnyQuotes}
          duration={7000}
        />

        <span className="text-5xl">&rdquo;</span>
      </div>
    </div>
  );
}
