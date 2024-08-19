import React from "react";
import { Card, CardHeader, CardFooter, Spacer } from "@nextui-org/react";
import Image from "next/image";
import StepperComponent from "../home/home_component/service_content/stepper/Stepper";
import PriceTable from "../home/home_component/service_content/PriceTable";
import ServiceInfo from "@/components/ServiceInfo";

export default function DisciplinePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4 md:w-1/2 text-center">
        <Spacer y={6} />
        <h1 className="text-xl font-bold text-orange-400">
          出張訓練＆幼稚園通園コース
        </h1>
        <h3 className="break-words pt-3 text-sm">
          預託訓練だとワンちゃんに会えないので寂しい。
          番犬として飼っているので預けられない。
          一度、預託での訓練を卒業し、継続して訓練を受けたい方など、
          預託ではなく、お預かりしてその日のうちにお返しにあがる訓練コースです。
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
              出張訓練＆幼稚園通園コース
            </h4>
          </CardHeader>
          <Image
            width={600}
            height={300}
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/situke.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">
                  出張訓練＆幼稚園通園コース
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>
        {/* 説明 */}
      </div>
      <Spacer y={4} />

      {/* サービスの説明 */}
      <div className="flex flex-col w-3/4 md:w-1/2 text-center justify-center items-center content-center">
        <h1 className="text-xl font-bold">出張訓練＆幼稚園通園コースとは？</h1>
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
        <Spacer y={6} />
      </div>

      {/* スケジュールなど */}
      <div className="flex flex-col content-center justify-center items-center">
        <div className="2xl:flex flex-row justify-between">
          <h1 className="text-lg font-bold">スケジュール</h1>
          <Spacer y={6} />
          <StepperComponent />
          <Spacer y={10} />
        </div>
      </div>

      {/* 料金注意事項 */}
      <div className="flex flex-col content-center justify-center items-center mb-4">
        <div className="2xl:flex flex-col justify-between">
          <h1 className="text-lg font-bold">料金＆注意事項</h1>
          <Spacer y={6} />
          <PriceTable href={"/price1.png"} />
          <Spacer y={10} />
        </div>
      </div>
    </div>
  );
}
