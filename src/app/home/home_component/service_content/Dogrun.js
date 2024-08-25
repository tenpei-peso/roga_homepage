"use client";

import React from "react";
import { Card, CardHeader, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import StepperComponent from "./stepper/Stepper";
import AppButton from "@/components/AppButton";
import DogrunStepper from "./stepper/DogrunStepper";

export default function Dogrun() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl md:w-1/2 text-center">
        <h3 className="break-words pt-3 text-sm text-left">
          こちらのコースは、広々としたドッグランをノーリードで走り回ったり、他の子たちと遊んだり、ボール遊びしたりなど、自由にドッグランを満喫してもらうコースになります。
          普段運動不足気味なので適度に 運動させたい
          平日はあまりお散歩行ってあげられない、 お留守番が長く退屈そう、
          他のワンちゃんと遊ぶのが好きなので、ノーリードで遊ばせてあげたいなど
          お家でのしつけや問題行動に困っては無いけれど、ワンちゃんの運動不足解消、ストレス発散などをご希望の方におすすめのコースになります。
        </h3>
        <Spacer y={3} />

        <h1 className="text-sm font-bold text-red-500 text-right">
          ＊送迎あり
        </h1>
        <Spacer y={1} />
        <h1 className="text-sm font-bold text-red-500 text-right">
          ＊注意事項、雨天中止、ワンちゃんの体調不良によるキャンセルなどで有効期限が過ぎた場合は振替させて頂きます。
        </h1>
      </div>

      <div className="flex justify-around my-8">
        {/* カード */}

        <Image
          width={500}
          height={300}
          alt="Relaxing app background"
          className="w-3/4 h-full object-cover"
          src="/dogrun5.jpg"
        />
      </div>
      <Spacer y={6} />

      {/* スケジュールなど */}
      <div className="flex flex-col content-center justify-center items-center">
        <div className="2xl:flex flex-row justify-between">
          <h1 className="text-lg font-bold">スケジュール</h1>
          <Spacer y={6} />
          <DogrunStepper />
          <Spacer y={10} />
        </div>
        <AppButton text="料金はこちら" href="/price" />
      </div>
    </div>
  );
}
