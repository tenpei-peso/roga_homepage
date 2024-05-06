import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  Spacer,
} from "@nextui-org/react";
import Image from "next/image";
import AccordionComponent from "./Accordion";

export default function Entrance() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/4 md:w-1/2 text-center">
        <h3 className="break-words pt-3 text-sm text-gray-500">
          入学時期は、生後5ヶ月前後から1年までの入学が効果的です。
          日本犬・超大型犬など頑固になりやすい犬種や、幼いうちに問題行動（咬む・唸るなど）が出てしまっている犬は早めの対処が必要です。
          また、個体によってはそれ以後の入学でも充分効果が期待できる場合も多くあります。お問い合わせください。
        </h3>
      </div>

      <div className="flex justify-around my-8">
        {/* カード */}
        <Card
          isFooterBlurred
          className="w-2/5 h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Services
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              入学コース（6カ月預かり）
            </h4>
          </CardHeader>
          <Image
            width={200}
            height={200}
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/entrance.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">
                  入学コース（6カ月預かり）
                </p>
                <p className="text-tiny text-white/60">詳しく見る</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              入学コース
            </Button>
          </CardFooter>
        </Card>
        {/* 説明 */}
        <AccordionComponent />
      </div>
    </div>
  );
}
