import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Entrance from "./Entrance";

export default function ServiceContent() {
  let tabs = [
    {
      id: "entrance",
      label: "入学コース",
      content: <Entrance />,
    },
    {
      id: "police",
      label: "警察犬訓練",
      content: <Entrance />,
    },
    {
      id: "trip",
      label: "出張しつけ教室",
      content: <Entrance />,
    },
    {
      id: "hotel",
      label: "ドッグホテル",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
