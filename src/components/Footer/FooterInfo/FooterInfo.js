import { Spacer } from "@nextui-org/react";
import React from "react";

export default function FooterInfo() {
  return (
    <div className="text-sm flex flex-col py-3">
      <div className="flex flex-col justify-center items-center content-center">
        <h1 className="text-lg font-bold">お問い合わせはこちらから</h1>
        <Spacer y={3} />

        <div className="px-3 ">〒551-0023</div>
        <div className="text-">大阪市大正区鶴町2-17-18</div>
        <Spacer y={2} />
      </div>
      <div className="flex justify-center items-center px-3 text-lg">
        ドックラン所在地: 此花区舞洲スポーツアイランド内
      </div>
      <div className="flex justify-center items-center">
        <a href="tel:090-6816-4812" className="px-3 text-lg">
          TEL: 090-6816-4812
        </a>
      </div>
      <div className="flex justify-center items-center px-3 text-lg">
        EMAIL: roga.p.dog@gmail.com
      </div>
    </div>
  );
}
