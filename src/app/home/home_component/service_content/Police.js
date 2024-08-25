import React from "react";
import { Card, CardHeader, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import PoliceStepper from "./stepper/PoliceStepper";
import AppButton from "@/components/AppButton";

export default function Police() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl md:w-1/2 text-center">
        <h3 className="break-words pt-3 text-sm text-left">
          当校では、警察犬、家庭犬訓練競技会や展覧会(ドッグショー)、危険物捜索犬などのワーキングドッグの育成にも取り組んでおります
          警察犬目指すわけじゃないけど、、、
          ワンちゃんの可能性を伸ばしてみたい、競技会や展覧会でご愛犬の頑張る姿を応援したい、
          実際に飼い主様ご自身がハンドラーとして出場してみたいなど
          小型犬、大型犬、犬種問わず(MIX犬もOK)
          トレーニング期間は長期にはなりますが、ドッグスポーツとしてチャレンジしたい方も大歓迎です。
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
