"use client";
import React from "react";
import { Spacer } from "@nextui-org/react";
import SnackSlider from "@/components/SnackSlider";
import Image from "next/image";

export default function SnackPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4 md:w-1/2 text-center">
        <Spacer y={6} />
        <h1 className="text-xl font-bold text-orange-400">
        おやつ、グッズ販売(スクール生向けサービス)
        </h1>
        <h3 className="break-words pt-3 text-sm">
        当スクールでは、スクール生のワンちゃん向けにオヤツや、お散歩バッグ等のグッズも取り扱っております。
        </h3>
        <Spacer y={1} />
        <h1 className="text-sm font-bold text-red-500 text-right">
          ※価格は予告なく変更になることがあります
        </h1>
      </div>
      <Spacer y={16} />
      <h1 className="text-xl font-bold">おやつ販売</h1>
      <Spacer y={3} />

      <div className="flex justify-around my-4 mx-4">
        {/* カード */}

        <div className="flex justify-center items-center">
          <SnackSlider />
        </div>

        {/* 説明 */}
      </div>
      <Spacer y={12} />
      <h1 className="text-xl font-bold">グッズ販売</h1>
      <Spacer y={6} />
      <Image width={600}
          height={300}
          alt="Relaxing app background"
          className="w-3/4 h-3/4 object-cover"
          src="/comming.png">

          </Image>
      <Spacer y={12} />


      <div className="flex flex-col content-center w-3/4 justify-center items-center mb-4">
        <div className="2xl:flex flex-col justify-between">
          <h1 className="text-lg font-bold">料金＆注意事項</h1>
          <Spacer y={6} />
          <h1 className="text-base font-semibold">
          当店では季節に合わせたおやつを提供しております。そのため、使用する材料や季節の変動により、価格が変わることがございます。最新の価格やご相談については、ぜひお気軽にお電話でお尋ねください。
          </h1>
          <Spacer y={10} />
        </div>
      </div>
    </div>
  );
}
