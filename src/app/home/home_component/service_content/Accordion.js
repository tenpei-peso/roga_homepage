import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import AccordionContent from "./AccordionContent";

export default function AccordionComponent() {
  const itemClasses = {
    base: "py-2 w-full",
    title: "font-bold text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  return (
    <Accordion
      showDivider={false}
      className="p-2 flex flex-col gap-1 w-full max-w-[300px]"
      variant="shadow"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
        aria-label="教育目標"
        subtitle={
          <p className="flex">
            家族の一員としての
            <span className="text-primeColor ml-1">生活マナー</span>
          </p>
        }
        title="教育目標"
        startContent={<RiNumber1 />}
      >
        {<AccordionContent />}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="しつけ方針"
        subtitle={
          <p className="flex">
            情操教育で正しい
            <span className="text-primeColor ml-1">スキンシップ</span>
          </p>
        }
        title="しつけ方針"
        startContent={<RiNumber2 />}
      >
        {<AccordionContent />}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="環境"
        subtitle={
          <p className="flex">
            規則正しい日常生活
            <span className="text-primeColor ml-1">自然に矯正</span>
          </p>
        }
        title="環境"
        startContent={<RiNumber3 />}
      >
        {<AccordionContent />}
      </AccordionItem>
    </Accordion>
  );
}
