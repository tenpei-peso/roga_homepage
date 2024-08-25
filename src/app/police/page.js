import React from "react";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import PoliceStepper from "../home/home_component/service_content/stepper/PoliceStepper";

export default function PolicePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl mx-2 md:w-1/2 text-center">
        <Spacer y={6} />
        <h1 className="text-xl font-bold text-orange-400">
          競技会、展覧会、警察犬訓練
        </h1>
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
        {/* カード */}

        <Image
          width={600}
          height={300}
          alt="Relaxing app background"
          className="w-3/4 h-full object-cover"
          src="/police.jpeg"
        />

        {/* 説明 */}
      </div>
      <Spacer y={4} />

      {/* サービスの説明 */}
      {/* <div className="flex flex-col w-3/4 md:w-1/2 text-center justify-center items-center content-center">
        <h1 className="text-xl font-bold">競技会・警察犬訓練とは？</h1>
        <Spacer y={6} />
        <div className="">
          <ServiceInfo
            href={"/school10.jpg"}
            title={"競技会・警察犬訓練"}
            description={
              "お家まで送迎させて頂き、一日お預かりしてトレーニングを行います。遊びながら人との接し方、犬同士のコミュニケーションを学び、早い時期に学ばせることで学習能力を養います。他のワンちゃんとの交流を通じて、社会性を身につけることができます。 飼い主様もご一緒に訓練に参加していただいた方がより効果的です。"
            }
          />
        </div>
        <Spacer y={6} />
      </div> */}

      {/* スケジュールなど */}
      <div className="flex flex-col content-center w-3/4 justify-center items-center">
        <div className="2xl:flex flex-row justify-between">
          <h1 className="text-lg font-bold">スケジュール</h1>
          <Spacer y={6} />
          <PoliceStepper />
          <Spacer y={10} />
        </div>
      </div>

      {/* 料金注意事項 */}
      <div className="flex flex-col content-center w-3/4 justify-center items-center mb-4">
        <div className="2xl:flex flex-col justify-between">
          <h1 className="text-lg font-bold">料金＆注意事項</h1>
          <Spacer y={6} />
          <h1 className="text-base font-semibold">
            ご料金についてはお電話でご相談下さい。
          </h1>
          <Spacer y={1} />
          <h1 className="text-base font-semibold text-red-600">
            ＊大会参加費や出場料や、試験費用は別途発生いたします。
          </h1>
          <Spacer y={10} />
        </div>
      </div>
    </div>
  );
}
