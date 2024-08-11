"use client";
import React from "react";
import Image from "next/image";
import { Spacer } from "@nextui-org/spacer";
import TitleContainer from "@/components/TitleContainer";
import MotionContainer from "@/components/MotionContainer";
import { Avatar, Card, CardBody } from "@nextui-org/react";
import ImageSlider from "./ImageSlider";
import FeatureSchool from "./FeatureSchool";

export default function AboutDogSchool() {
  return (
    <div>
      <TitleContainer>
        <h1 className="text-2xl text-center font-medium md:text-4xl" id="about">ABOUT</h1>
        <h1 className="text-2xl text-center font-medium text-primeColor ml-2 md:text-4xl">
          OUR
        </h1>
        <h1 className="text-2xl  text-center font-medium md:text-4xl ml-2">
          SCHOOL
        </h1>
      </TitleContainer>

      <Spacer y={8} />

      <p className="text-center text-sm max-w-xl mx-auto font-semibold">
        狼賀警察犬訓練所で運営している犬の学校は、愛犬とより快適な生活ができるようサポートいたします。犬の噛み癖、無駄吠えやトイレの失敗、引っ張りなどでお困りの飼い主様、当学校では飼い主様のライフスタイル・犬の性格に合わせた、犬のしつけコースをご用意しております。
        どうぞ、お気軽にご相談ください。
      </p>

      <Spacer y={6} />

      <MotionContainer>
        <div className="flex justify-center items-center w-full">
          <ImageSlider />
        </div>
      </MotionContainer>
      <Spacer y={10} />

      <MotionContainer>
        <Card>
          <CardBody>
            <div className="flex flex-col items-center md:flex-row md:justify-center md:items-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/profile.png"
                width={270}
                height={180}
              />
              <div className="px-4 py-4">
                <p className="text-sm">竹中 大輔</p>
                <h1 className="text-xl font-medium">DAISUKE TAKENAKA</h1>
                <Spacer y={3} />
                <h2 className="text-xs">日本警察犬協会公認訓練士、ＪＫＣ公認訓練士</h2>
                <Spacer y={2} />
                <h2 className="text-xs">
                愛犬との絆を深めるお手伝いをします。しつけ相談、お預かり、広々とした運動スペース、ドッグショーや訓練競技会の参加サポートなど、愛犬に関することならなんでもOK！一緒に楽しく、健康的なワンライフを築きましょう。お気軽にご相談ください！
                </h2>
                <Spacer y={2} />
                <h2 className="text-xs">
                動物取扱業  訓練１５００１１D
                </h2>
              </div>
            </div>
          </CardBody>
        </Card>
      </MotionContainer>

      <Spacer y={10} />
      <MotionContainer>
        <FeatureSchool />
      </MotionContainer>
    </div>
  );
}
