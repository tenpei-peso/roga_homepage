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
    label: "初回カウンセリング",
    description: `ワンちゃんの特性や目的に応じて、適切なトレーニングプランを策定します。飼い主さんとの目標設定も行います。`,
  },
  {
    label: "トレーニング開始",
    description:
      "基本的なしつけから競技や警察犬としての専門的なトレーニングを行います。ワンちゃんの能力を最大限に引き出すため、集中した環境でトレーニングを実施します。",
  },
  {
    label: "定期報告と調整",
    description: `トレーニングの進捗状況を飼い主さんに定期的に報告し、必要に応じてプランを調整します。`,
  },
  {
    label: "模擬試験・テスト",
    description: `競技や実務に向けた模擬試験を行い、ワンちゃんの技術を確認します。必要に応じて追加トレーニングを実施します。`,
  },
  {
    label: "卒業・継続サポート",
    description: `トレーニングが終了した後も、継続的なサポートを提供します。競技会や実務での活動をサポートし、成功を目指します。`,
  },
];

export default function PoliceStepper() {
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
