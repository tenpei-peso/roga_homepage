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
    description: `お電話でお預け予定の日程をお教え下さい。
ワンちゃんの健康状態や特徴（性格）などの確認、ワクチン接種の確認、緊急ご連絡先、送迎が必要か、否かなどスタッフがヒヤリングをさせていただきます。
ワンちゃんのこだわりの寝具やおもちゃ、ドッグフードなどございましたらご指示や、お預けの際にお持ち下さい。`,
  },
  {
    label: "お預かり",
    description:
      "ご指定のお預け時間に、ワンちゃんを当校までお連れ下さい。ご費用の方は、恐れいりますがお預け時にご精算いただきます。また、予定よりもお預け時間が延長した場合のご費用につきましてはお迎え時にご精算でお願い致します。お預かりスタートです。施設でリラックスできるようにスタッフが責任持ってご案内します。ワンちゃんがストレスなく楽しんでもらえるようにドッグランも併設しています。朝（8：00）と夜（18：30）が食事のお時間です。（ワンちゃん専用のこだわりのドッグフードがある場合は事前にスタッフへお預け下さい。）",
  },
  {
    label: "ご報告",
    description: `滞在中の様子を定期的に飼い主さんにご報告します。写真やビデオを通じて、安心してお預けいただけるよう心がけます。`,
  },
  {
    label: "お引き渡し",
    description: `お帰りの際に、延長時間がある場合は、追加時間のご費用精算をお願い致します。
ワンちゃんの健康状態をご確認いただきお引渡しです。
お気をつけてお帰り下さい。またのご利用お待ちしております。`,
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
