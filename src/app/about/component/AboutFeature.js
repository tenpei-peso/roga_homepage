import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Spacer } from "@nextui-org/spacer";
import Avatar from "@mui/material/Avatar";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ParkIcon from "@mui/icons-material/Park";
import { white, orange } from "@mui/material/colors";

export default function AboutFeature() {
  return (
    <Card>
      <CardBody>
        <div className="flex flex-col items-center content-center flex-wrap">
          <div className="flex items-center">
            <h1 className="text-lg font-bold leading-6">本学校の施設</h1>
          </div>

          <Spacer y={4} />
          <div className="flex flex-col items-center content-between md:flex-row md:justify-between">
            <div className="flex flex-col items-center mb-5 px-4 md:mx-8">
              <Avatar sx={{ width: 60, height: 60, bgcolor: orange[500] }}>
                <ParkIcon />
              </Avatar>
              <Spacer y={2} />
              <h1 className="text-center max-w-xs font-semibold">
                広々としたドッグラン
              </h1>
              <Spacer y={4} />
              <p className="text-sm">
                当施設には、安全で広々としたドッグランを完備しています。ここでは、愛犬が自由に走り回り、他の犬たちと交流しながら、基本的な命令の練習や社会性を身につけることができます。
              </p>
            </div>
            <div className="flex flex-col items-center mb-5 px-4 md:mx-8">
              <Avatar sx={{ width: 60, height: 60, bgcolor: orange[500] }}>
                <ConnectWithoutContactIcon />
              </Avatar>
              <Spacer y={2} />
              <h1 className="text-center max-w-xs font-semibold">
                ストレス・運動不足解消に最適
              </h1>
              <Spacer y={4} />
              <p className="text-sm">
                広々としたスペースは、愛犬のストレス解消や運動不足を解消するのに最適です。自然の中でのびのびと走り回ることで、心身ともに健康的な生活をサポートします。また、他の犬たちとの交流を通じて、社会性を身につけることができます。
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
