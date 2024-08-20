import React from "react";
import { Card, CardHeader, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import PoliceStepper from "./stepper/PoliceStepper";
import AppButton from "@/components/AppButton";

export default function Entrance() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4 md:w-1/2 text-center">
        <h3 className="break-words pt-3 text-sm">
          当校の競技・警察犬訓練プログラムは、高度な技能と規律を要する特殊な犬の育成に特化しています。このプログラムは、高い目標を持つ飼い主様と、優れた素質を持つ犬のためのものです。厳しい訓練を通じて、犬の潜在能力を最大限に引き出し、飼い主様との絆をさらに深めることを目指します。
        </h3>
      </div>

      <div className="flex justify-around my-8">
        {/* カード */}
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Services
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              競技会・警察犬訓練
            </h4>
          </CardHeader> */}
          <Image
            width={600}
            height={300}
            alt="Relaxing app background"
            className="w-full h-full object-cover"
            src="/police.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">競技会・警察犬訓練</p>
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
          <PoliceStepper />
          <Spacer y={6} />
        </div>
        <AppButton text="競技会・警察犬訓練を詳しく見る" href="/police" />
      </div>
    </div>
  );
}
