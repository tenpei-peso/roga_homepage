import React from "react";
import { Spacer } from "@nextui-org/spacer";
import { FaDog } from "react-icons/fa6";
import TitleContainer from "@/components/TitleContainer";

export default function Services() {
  return (
    <div>
      <TitleContainer>
        <h1 className="text-2xl text-center font-medium md:text-4xl">SER</h1>
        <h1 className="text-2xl text-center font-medium text-primeColor ml-2 md:text-4xl">
          VI
        </h1>
        <h1 className="text-2xl text-center font-medium md:text-4xl ml-2">
          CES
        </h1>
      </TitleContainer>
      <Spacer y={8} />
      <p className="text-center text-sm font-semibold" id="services">
        プロ訓練士があなたの愛犬のしつけをお手伝いします。
      </p>
      <p className="text-center text-sm font-semibold max-w-xl mx-auto">
        高い技術と経験を活かし、愛犬とより充実した毎日を過ごせるようしっかりサポートします。どのコースが自分の子に合っていのかわからない方は、カウンセリング等していきながら相談させて頂きますのでご安心ください！ 
      </p>
    </div>
  );
}
