import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function AccordionContent() {
  return (
    <div className="flex flex-col py-3">
      <h3 className="font-semibold break-words pb-2 text-primeColor">
        家族の一員として生活マナー習得
      </h3>
      <h3 className="font-semibold break-words pb-4 text-primeColor">
        困った行動の修正
      </h3>
      <h4 className="text-sm font-thin break-words text-center pb-3">
        一般家庭での、社会的ルール・散歩中の困りごとなどをしつけ訓練します。
      </h4>
      <Button color="warning">詳しく見る</Button>
    </div>
  );
}
