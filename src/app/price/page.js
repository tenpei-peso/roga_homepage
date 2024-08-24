"use client";
import React from "react";
import { Spacer } from "@nextui-org/react";
import PriceTable from "../home/home_component/service_content/PriceTable";

export default function PricePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-3/4 content-center justify-center items-center mb-4">
        <div className="2xl:flex flex-col justify-between">
          <Spacer y={10} />

          <h1 className="text-2xl font-bold text-orange-500">
            料金＆注意事項表一覧
          </h1>
          <Spacer y={14} />
          <h1 className="text-lg font-bold">出張訓練＆幼稚園通園コース</h1>
          <Spacer y={6} />
          <PriceTable href={"/price_list1.png"} />
          <Spacer y={12} />
          <h1 className="text-lg font-bold">お家訪問コース</h1>
          <Spacer y={6} />
          <PriceTable href={"/price_list2.png"} />
          <Spacer y={12} />
          <h1 className="text-lg font-bold">スクール訓練コース</h1>
          <Spacer y={6} />
          <PriceTable href={"/price_list3.png"} />
          <Spacer y={12} />
          <h1 className="text-lg font-bold">ドッグラン&お友だち交流コース</h1>
          <Spacer y={6} />
          <PriceTable href={"/price_list4.png"} />
          <Spacer y={12} />
          <h1 className="text-lg font-bold">競技会、展覧会、警察犬訓練</h1>
          <Spacer y={6} />
          <h1 className="text-base font-bold">
            ご料金についてはお電話でご相談下さい。
          </h1>
          <Spacer y={1} />
          <h1 className="text-base font-bold text-red-600">
            ＊大会参加費や出場料や、試験費用は別途発生いたします。
          </h1>
          <Spacer y={12} />
          <h1 className="text-lg font-bold">おやつ、グッズ販売(スクール生向けサービス)</h1>
          <Spacer y={6} />
          <h1 className="text-base font-bold">
          当店では季節に合わせたおやつを提供しております。そのため、使用する材料や季節の変動により、価格が変わることがございます。最新の価格やご相談については、ぜひお気軽お電話でお尋ねください。
          </h1>
          <Spacer y={12} />
        </div>
      </div>
    </div>
  );
}
