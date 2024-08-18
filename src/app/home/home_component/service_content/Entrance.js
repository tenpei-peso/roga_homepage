import React from "react";
import { Card, CardHeader, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import EntranceStepper from "./stepper/EntranceStepper";
import PriceTable from "./PriceTable";
import AppButton from "@/components/AppButton";

export default function Entrance() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4 md:w-1/2 text-center">
        <h2 className="text-lg font-bold text-blue-400">
          まずはお気軽にお越しください
        </h2>
        <Spacer y={2} />

        <h3 className="break-words pt-3 text-sm">
          当校では、飼い主様とワンちゃんと一緒にしつけの基礎を学んでいただけるドックスクールを開校しています。
          ドッグランにワンちゃんと来ていただき飼い主様ご自身で訓練士の指導のもと一緒に訓練を行います。
          また、家庭犬のしつけで困っている飼い主様へ、経験豊富な訓練士が悩みをお聞きしアドバイスもさせていただいております。
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
              スクール訓練コース
            </h4>
          </CardHeader>
          <Image
            width={200}
            height={200}
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/training.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">スクール訓練コース</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Spacer y={6} />

      {/* スケジュールなど */}
      <div className="flex flex-col content-center justify-center items-center">
        <div className="2xl:flex flex-row justify-between">
          <h1 className="text-lg font-bold">スケジュール</h1>
          <Spacer y={6} />
          <EntranceStepper />
          <Spacer y={10} />
        </div>
        <AppButton text="スクール訓練コースを詳しく見る" />
      </div>
    </div>
  );
}
