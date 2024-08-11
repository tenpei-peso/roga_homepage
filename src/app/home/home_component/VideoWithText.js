import React from "react";
import Video from "@/components/Video";

export default function VideoWithText() {
  return (
    <div className="relative" id="home">
      <div className="absolute top-1/2 left-7 z-10 text-white p-4">
        <h2 className="font-notojp mb-3 text-sm sm:text-sm md:text-lg lg:text-xl">
          経験豊富な訓練士がワンちゃんの
        </h2>
        <h2 className="font-notojp text-sm sm:text-sm md:text-lg lg:text-xl">
          性格や能力に合わせた躾をいたします。
        </h2>
      </div>
      <Video src="/dog_video.mp4" autoPlay null />
    </div>
  );
}
