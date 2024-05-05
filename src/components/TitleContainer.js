import React from "react";
import { Spacer } from "@nextui-org/spacer";
import { FaDog } from "react-icons/fa6";

export default function TitleContainer({ children }) {
  return (
    <div className="relative flex justify-center">
      {children}
      <Spacer x={1} />
      <FaDog className="text-primeColor" />
    </div>
  );
}
