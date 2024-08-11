import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Entrance from "./Entrance";
import Discipline from "./Discipline";
import Hotel from "./Hotel";
import Police from "./Police";

export default function ServiceContent() {
  let tabs = [
    {
      id: "trip",
      label: "出張しつけ訓練",
      content: <Discipline />,
    },
    {
      id: "hotel",
      label: "ドッグホテル",
      content: <Hotel />,
    },
    {
      id: "police",
      label: "競技会・警察犬訓練",
      content: <Police />,
    },
    {
      id: "entrance",
      label: "一日しつけ教室",
      content: <Entrance />,
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        fullWidth
        size="md"
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
