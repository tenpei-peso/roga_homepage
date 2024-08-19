import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  Spacer,
} from "@nextui-org/react";
import Image from "next/image";

export default function PriceTable({ href }) {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[500px] col-span-12 sm:col-span-7"
    >
      <Image
        width={600}
        height={300}
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={href}
      />
    </Card>
  );
}
