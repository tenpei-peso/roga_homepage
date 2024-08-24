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
        お家に伺い、普段のワンちゃんの様子をお聞きし、お家の中での問題行動、お散歩中の問題行動、トイレやハウストレーニングなど、お家の中での問題行動を解決するためのトレーニングの仕方を飼い主様にアドバイスを行います。
        また、トレーニングがより効果的になるように、ワンちゃんを管理する環境などの改善アドバイスを行います。
        </h3>
      </div>

      <div className="flex justify-around my-8">
        {/* カード */}

        <Image
          width={600}
          height={300}
          alt="Relaxing app background"
          className="w-3/4 h-full object-cover"
          src="/hotel1.jpeg"
        />

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
      <div className="flex flex-col w-3/4 content-center justify-center items-center">
        <div className="2xl:flex flex-row justify-between">
          <h1 className="text-lg font-bold">スケジュール</h1>
          <Spacer y={6} />
          <HotelStepper />
          <Spacer y={10} />
        </div>
      </div>

      {/* 料金注意事項 */}
      <div className="flex flex-col w-3/4 content-center justify-center items-center mb-4">
        <div className="2xl:flex flex-col justify-between">
          <h1 className="text-lg font-bold">料金＆注意事項</h1>
          <Spacer y={6} />
          <PriceTable href={"/price_list2.png"} />
          <Spacer y={10} />
        </div>
      </div>
    </div>
  );
}
