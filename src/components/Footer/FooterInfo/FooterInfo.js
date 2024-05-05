import React from "react";

export default function FooterInfo() {
  return (
    <div className="text-sm flex flex-col py-3">
      <div className="flex justify-center content-center">
        <div className="px-3 ">〒583-0992</div>
        <div className="text-">大阪府南河内郡太子町山田3861-3</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="px-3 text-lg">TEL 072-198-3833</div>
        <div>営業時間 7:00～20:00</div>
      </div>
    </div>
  );
}
