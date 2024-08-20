"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import PriceTable from "../home/home_component/service_content/PriceTable";
import ServiceInfo from "@/components/ServiceInfo";
import HotelStepper from "../home/home_component/service_content/stepper/HotelStepper";

export default function HotelPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4 md:w-1/2 text-center">
        <Spacer y={6} />
        <h1 className="text-xl font-bold text-orange-400">
          お宅訪問訓練コース
        </h1>
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
      <Spacer y={4} />

      {/* サービスの説明 */}
      <div className="flex flex-col w-3/4 md:w-1/2 text-center justify-center items-center content-center">
        <h1 className="text-xl font-bold">お宅訪問訓練コースとは？</h1>
        <Spacer y={6} />
        <div className="">
          <ServiceInfo
            href={"/hotel2.jpeg"}
            title={"お宅訪問訓練コース"}
            description={
              "お家に伺い、一時間の間お家で訓練を行います。お家の中での問題行動、お散歩中の問題行動、お家の中でのトイレトレーニング、お家の中でのしつけなど、お家の中での問題行動を解決するための訓練を行います。また、より効果的な訓練を行うために、お家の中での環境を見て、アドバイスを行います。"
            }
          />
        </div>
        <Spacer y={6} />
      </div>

      {/* スケジュールなど */}
      <div className="flex flex-col content-center justify-center items-center">
        <div className="2xl:flex flex-row justify-between">
          <h1 className="text-lg font-bold">スケジュール</h1>
          <Spacer y={6} />
          <HotelStepper />
          <Spacer y={10} />
        </div>
      </div>

      {/* 料金注意事項 */}
      <div className="flex flex-col content-center justify-center items-center mb-4">
        <div className="2xl:flex flex-col justify-between">
          <h1 className="text-lg font-bold">料金＆注意事項</h1>
          <Spacer y={6} />
          <PriceTable href={"/price2.png"} />
          <Spacer y={10} />
        </div>
      </div>
    </div>
  );
}
