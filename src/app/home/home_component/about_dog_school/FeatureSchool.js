import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Spacer } from "@nextui-org/spacer";
import Avatar from "@mui/material/Avatar";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import { white, orange } from "@mui/material/colors";

export default function FeatureSchool() {
  return (
    <Card>
      <CardBody>
        <div className="flex flex-col items-center content-center flex-wrap">
          <div className="flex items-center">
            <h1 className="text-lg font-bold leading-6">本学校の特徴</h1>
          </div>

          <Spacer y={4} />
          <div className="flex flex-col items-center content-between md:flex-row md:justify-between">
            <div className="flex flex-col items-center mb-5 px-4 md:mx-8">
              <Avatar sx={{ width: 60, height: 60, bgcolor: orange[500] }}>
                <WorkspacePremiumIcon />
              </Avatar>
              <Spacer y={2} />
              <h1 className="text-center max-w-xs font-semibold">
                有資格者による訓練プログラム
              </h1>
              <Spacer y={4} />
              <p className="text-sm">
                プロが各ワンちゃんの特性を見極め、個別に最適化された訓練プログラムを提供します。基礎的なしつけから高度な技能訓練まで、幅広いニーズに対応し、ワンちゃんの潜在能力を最大限に引き出します。
              </p>
            </div>
            <div className="flex flex-col items-center mb-5 px-4 md:mx-8">
              <Avatar sx={{ width: 60, height: 60, bgcolor: orange[500] }}>
                <GroupsIcon />
              </Avatar>
              <Spacer y={2} />
              <h1 className="text-center max-w-xs font-semibold">
                訓練後も末永いお付き合い
              </h1>
              <Spacer y={4} />
              <p className="text-sm">
                訓練プログラム修了後も、継続的なサポートを提供します。定期的なフォローアップセッションや、飼い主様からのご相談に随時対応します。ワンちゃんの成長段階に応じたアドバイスや、長期的な視点で、ワンちゃんと飼い主様の良好な関係づくりをサポートします。
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
