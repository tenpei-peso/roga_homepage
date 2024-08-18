import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "お問い合わせ",
    description: `お電話などで日程やお時間をご相談下さい。`,
  },
  {
    label: "トレーニング",
    description: "基本的な躾に加えてお家でのお困りごともご相談下さい。愛犬との暮らしをより快適にできるようサポートします。",
  },
  {
    label: "復習とアドバイス",
    description: `一日のトレーニングの内容を復習し、飼い主さんに家庭での継続的な実践方法をアドバイスします。`,
  },
];

export default function HotelStepper() {
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
