import React from "react";
import { Card, CardHeader, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import PoliceStepper from "./stepper/PoliceStepper";
import AppButton from "@/components/AppButton";

export default function Police() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4 md:w-1/2 text-center">
        <h3 className="break-words pt-3 text-sm">
          当校の競技・警察犬訓練プログラムは、高度な技能と規律を要する特殊な犬の育成に特化しています。このプログラムは、高い目標を持つ飼い主様と、優れた素質を持つ犬のためのものです。厳しい訓練を通じて、犬の潜在能力を最大限に引き出し、飼い主様との絆をさらに深めることを目指します。
        </h3>
      </div>

      <div className="flex justify-around my-8">
        <Image
          width={400}
          height={300}
          alt="Relaxing app background"
          className="w-3/4 h-full object-cover"
          src="/police.jpeg"
        />

        {/* 説明 */}
      </div>
      <Spacer y={6} />

      {/* スケジュールなど */}
      <div className="flex flex-col content-center justify-center items-center">
        <div className="2xl:flex flex-row justify-between">
          <h1 className="text-lg font-bold">スケジュール</h1>
          <Spacer y={6} />
          <PoliceStepper />
          <Spacer y={6} />
        </div>
        <AppButton text="料金はこちら" href="/price" />
      </div>
    </div>
  );
}
