import React from "react";
import { Card, CardHeader, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import StepperComponent from "./stepper/Stepper";
import AppButton from "@/components/AppButton";

export default function Entrance() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4 md:w-1/2 text-center">
        <h3 className="break-words pt-3 text-sm">
          預託訓練だとワンちゃんに会えないので寂しい。
          番犬として飼っているので預けられない。
          一度、預託での訓練を卒業し、継続して訓練を受けたい方など、
          預託ではなく、お預かりしてその日のうちにお返しにあがる訓練コースです。
        </h3>
      </div>

      <div className="flex justify-around my-8">
        {/* カード */}
        
          <Image
            width={600}
            height={300}
            alt="Relaxing app background"
            className="w-3/4 h-full object-cover"
            src="/situke.jpeg"
          />
          
        {/* 説明 */}
      </div>
      <Spacer y={6} />

      {/* スケジュールなど */}
      <div className="flex flex-col content-center justify-center items-center">
        <div className="2xl:flex flex-row justify-between">
          <h1 className="text-lg font-bold">スケジュール</h1>
          <Spacer y={6} />
          <StepperComponent />
          <Spacer y={10} />
        </div>
        <AppButton
          text="出張訓練＆幼稚園通園コースを詳しく見る"
          href="/discipline"
        />
      </div>
    </div>
  );
}
