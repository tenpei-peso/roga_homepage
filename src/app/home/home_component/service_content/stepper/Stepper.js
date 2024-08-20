"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "お迎え",
    description: `お電話などでお預け予定の日程・お時間をご相談下さい。ご自宅までワンちゃんをお迎えに伺います。`,
  },
  {
    label: "到着と健康チェック",
    description: "訓練施設に到着後、健康状態を確認します。",
  },
  {
    label: "トレーニング開始",
    description: `基本的なしつけ（お座り、伏せ、待て等）、社会化訓練からワンちゃんの個人的に気になる問題点の改善までトレーニングを行います。広いドックランでのびのびとトレーニングを行い、ワンちゃんが楽しく学べる環境を提供します。`,
  },
  {
    label: "お届け",
    description: `ご相談で決まった時間にワンちゃんをご自宅までお届けします。`,
  },
];

export default function StepperComponent() {
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
