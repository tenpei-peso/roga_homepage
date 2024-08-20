import React from "react";
import { Card, CardHeader, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import HotelStepper from "./stepper/HotelStepper";
import AppButton from "@/components/AppButton";

export default function Entrance() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4 md:w-1/2 text-center">
        <h3 className="break-words pt-3 text-sm">
          お家での飼い方やしつけ方についてのお困り事など訓練士がお客様のご自宅にお伺いし、飼い主様と一緒にトレーニングします。
        </h3>
      </div>

      <div className="flex justify-around my-8">
        {/* カード */}
        
          <Image
            width={500}
            height={300}
            alt="Relaxing app background"
            className="w-3/4 h-full object-cover"
            src="/hotel1.jpeg"
          />
          
        {/* 説明 */}
      </div>
      <Spacer y={6} />

      {/* スケジュールなど */}
      <div className="flex flex-col content-center justify-center items-center">
        <div className="2xl:flex flex-row justify-between">
          <h1 className="text-lg font-bold">スケジュール</h1>
          <Spacer y={6} />
          <HotelStepper />
          <Spacer y={6} />
        </div>
        <AppButton text="お宅訪問訓練コースを詳しく見る" href="/hotel" />
      </div>
    </div>
  );
}
