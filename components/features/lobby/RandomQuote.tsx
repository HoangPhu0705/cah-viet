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
    <div className="text-center mb-4 relative z-10">
      <div className="flex w-3xl gap-3 justify-center bg-gradient-to-r from-white via-gray-50 to-white border-2 border-black rounded-2xl p-4 max-w-3xl mx-auto shadow-xl">
        <span className="text-5xl">&ldquo;</span>

        <WordRotate
          className="text-xl md:text-2xl text-black font-medium leading-relaxed mb-4"
          words={funnyQuotes}
          duration={7000}
        />

        <span className="text-5xl">&rdquo;</span>
      </div>
    </div>
  );
}
