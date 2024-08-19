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
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Services
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              お宅訪問訓練コース
            </h4>
          </CardHeader>
          <Image
            width={600}
            height={300}
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/hotel1.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">お宅訪問訓練コース</p>
              </div>
            </div>
          </CardFooter>
        </Card>
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
