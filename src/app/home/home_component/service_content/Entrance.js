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

        <Image
          width={500}
          height={200}
          alt="Relaxing app background"
          className="w-3/4 h-full object-cover"
          src="/training.jpeg"
        />
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
        <AppButton text="料金はこちら" href="/entrance" />
      </div>
    </div>
  );
}
