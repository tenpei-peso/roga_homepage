import React from "react";
import { Card, CardHeader, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import StepperComponent from "./stepper/Stepper";
import AppButton from "@/components/AppButton";
import ServiceInfo from "@/components/ServiceInfo";

export default function Discipline() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl md:w-1/2 text-center">
        <h3 className="break-words pt-3 text-sm text-left">
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
          src="/discipline1.jpg"
        />
      </div>
      <Spacer y={6} />

      {/* サービスの説明 */}
      <div className="flex flex-col w-3/4 md:w-1/2 text-center justify-center items-center content-center">
        <h1 className="text-lg font-bold">出張訓練＆幼稚園通園コースとは？</h1>
        <Spacer y={6} />
        <div className="">
          <ServiceInfo
            href={"/school10.jpg"}
            title={"出張訓練＆幼稚園通園コース"}
            description={
              "お家まで送迎させて頂き、一日お預かりしてトレーニングを行います。遊びながら人との接し方、犬同士のコミュニケーションを学び、早い時期に学ばせることで学習能力を養います。他のワンちゃんとの交流を通じて、社会性を身につけることができます。 飼い主様もご一緒に訓練に参加していただいた方がより効果的です。"
            }
          />
        </div>
        <Spacer y={10} />
      </div>

      {/* スケジュールなど */}
      <div className="flex flex-col content-center justify-center items-center">
        <div className="2xl:flex flex-row justify-between">
          <h1 className="text-lg font-bold">スケジュール</h1>
          <Spacer y={6} />
          <StepperComponent />
          <Spacer y={10} />
        </div>
        <AppButton text="料金はこちら" href="/price" />
      </div>
    </div>
  );
}
