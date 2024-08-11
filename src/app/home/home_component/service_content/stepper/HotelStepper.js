import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "お問い合わせ",
    description: `お電話やメールでお預け予定の日程、また送迎のお時間をお教え下さい。`,
  },
  {
    label: "ご訪問",
    description:
      "ご指定のお時間に、ご訪問させていただきます。",
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
