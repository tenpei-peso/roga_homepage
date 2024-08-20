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
          <h1 className="text-lg font-bold">出張訓練＆幼稚園通園コース</h1>
          <Spacer y={6} />
          <PriceTable href={"/price_list4.png"} />
          <Spacer y={10} />
        </div>
      </div>
    </div>
  );
}
