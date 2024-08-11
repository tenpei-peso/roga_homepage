import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "お迎え",
    description: `お電話、メールなどでお預け予定の日程・お時間をお教え下さい。朝ご指定のお時間にワンちゃんをお迎えに行きます。`,
  },
  {
    label: "到着と健康チェック",
    description: "訓練施設に到着後、健康状態を確認します。",
  },
  {
    label: "トレーニング開始",
    description: `基本的なしつけ（お座り、伏せ、待て等）を重点的に行います。ワンちゃんが学びやすい環境を整え、一日で基本動作を身につけられるようサポートします。`,
  },
  {
    label: "復習とアドバイス",
    description: `一日のトレーニングの内容を復習し、飼い主さんに家庭での継続的な実践方法をアドバイスします。`,
  },
  {
    label: "お届け",
    description: `夕方ご指定の時間にワンちゃんをお届けします。教室での様子や学んだ内容について詳しくご説明します。`,
  },
];

export default function EntranceStepper() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical" activeStep={-1}>
        {steps.map((step, index) => (
          <Step key={step.label} expanded="true">
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
