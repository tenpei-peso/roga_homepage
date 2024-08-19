import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function AppButton({ text, href }) {
  return (
    <div className="flex justify-center items-center">
      <Link href={href} passHref legacyBehavior>
        <Button
          radius="full"
          className="bg-gradient-to-tr from-orange-500 to-yellow-500 text-white shadow-lg"
        >
          {text}
        </Button>
      </Link>
    </div>
  );
}
