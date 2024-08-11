import React from "react";

export default function FooterInfo() {
  return (
    <div className="text-sm flex flex-col py-3">
      <div className="flex justify-center content-center">
        <div className="px-3 ">〒551-0023</div>
        <div className="text-">大阪市大正区鶴町2-17-18</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="px-3 text-lg">TEL 090-6816-4812</div>
        <div>営業時間 7:00～20:00</div>
      </div>
    </div>
  );
}
