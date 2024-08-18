import React from "react";
import { Button } from "@nextui-org/react";

export default function AppButton({ text, onClick }) {
  return (
    <div className="flex justify-center items-center">
      <Button
        radius="full"
        className="bg-gradient-to-tr from-orange-500 to-yellow-500 text-white shadow-lg"
        onClick={onClick}
      >
        {text}
      </Button>
    </div>
  );
}
