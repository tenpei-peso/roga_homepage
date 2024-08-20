"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import PriceTable from "../home/home_component/service_content/PriceTable";
import ServiceInfo from "@/components/ServiceInfo";
import EntranceStepper from "../home/home_component/service_content/stepper/EntranceStepper";

export default function EntrancePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4 md:w-1/2 text-center">
        <Spacer y={6} />
        <h1 className="text-xl font-bold text-orange-400">
          スクール訓練コース
        </h1>
        <h3 className="break-words pt-3 text-sm">
          当校では、飼い主様とワンちゃんと一緒にしつけの基礎を学んでいただけるドックスクールを開校しています。
          ドッグランにワンちゃんと来ていただき飼い主様ご自身で訓練士の指導のもと一緒に訓練を行います。
          また、家庭犬のしつけで困っている飼い主様へ、経験豊富な訓練士が悩みをお聞きしアドバイスもさせていただいております。
        </h3>
      </div>

      <div className="flex justify-around my-8">
        {/* カード */}
        
          <Image
            width={600}
            height={300}
            alt="Relaxing app background"
            className="w-3/4 h-full object-cover"
            src="/training.jpeg"
          />
          
        {/* 説明 */}
      </div>
      <Spacer y={4} />

      {/* サービスの説明 */}
      <div className="flex flex-col w-3/4 md:w-1/2 text-center justify-center items-center content-center">
        <h1 className="text-xl font-bold">スクール訓練コースとは？</h1>
        <Spacer y={6} />
        <div className="">
          <ServiceInfo
            href={"/school11.jpg"}
            title={"スクール訓練コース"}
            description={
              "ドッグランにワンちゃんと来ていただき、一時間の間、専門トレーナーが個別に指導します。基本的なコマンドの練習や社会性の向上を目指し、愛犬がリラックスしながら学べる環境を提供します。トレーニング後は、飼い主様へのフィードバックや今後のアドバイスも行い、家庭でのケアやトレーニングの効果を持続できるようサポートいたします。"
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
          <EntranceStepper />
          <Spacer y={10} />
        </div>
      </div>

      {/* 料金注意事項 */}
      <div className="flex flex-col content-center justify-center items-center mb-4">
        <div className="2xl:flex flex-col justify-between">
          <h1 className="text-lg font-bold">料金＆注意事項</h1>
          <Spacer y={6} />
          <PriceTable href={"/price3.png"} />
          <Spacer y={10} />
        </div>
      </div>
    </div>
  );
}
