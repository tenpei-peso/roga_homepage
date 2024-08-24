import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Entrance from "./Entrance";
import Discipline from "./Discipline";
import Hotel from "./Hotel";
import Police from "./Police";
import Dogrun from "./Dogrun";
import Snack from "./Snack";

export default function ServiceContent() {
  let tabs = [
    {
      id: "trip",
      label: "出張訓練＆幼稚園通園コース",
      content: <Discipline />,
    },
    {
      id: "hotel",
      label: "お宅訪問訓練コース",
      content: <Hotel />,
    },
    {
      id: "entrance",
      label: "スクール訓練コース",
      content: <Entrance />,
    },
    {
      id: "dogrun",
      label: "ドッグラン&お友だち交流コース",
      content: <Dogrun />,
    },
    {
      id: "police",
      label: "競技会、展覧会、警察犬訓練",
      content: <Police />,
    },
    {
      id: "snack",
      label: "おやつ、グッズ販売(スクール生向けサービス)",
      content: <Snack />,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        fullWidth
        size="sm"
        radius="full"
        color="warning"
        items={tabs}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
