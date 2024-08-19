"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Spacer } from "@nextui-org/spacer";
import TitleContainer from "@/components/TitleContainer";
import MotionContainer from "@/components/MotionContainer";
import { Card, CardBody } from "@nextui-org/react";
import FeatureSchool from "../home/home_component/about_dog_school/FeatureSchool";
import ImageSlider from "../home/home_component/about_dog_school/ImageSlider";
import AboutImageList from "./component/AboutImageList";

export default function AboutDogSchool() {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);

    if (window.instgrm !== undefined) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <div>
      <Spacer y={10} />
      <TitleContainer>
        <h1 className="text-2xl text-center font-medium md:text-4xl" id="about">
          ABOUT
        </h1>
        <h1 className="text-2xl text-center font-medium text-primeColor ml-2 md:text-4xl">
          OUR
        </h1>
        <h1 className="text-2xl  text-center font-medium md:text-4xl ml-2">
          SCHOOL
        </h1>
      </TitleContainer>

      <Spacer y={8} />

      <p className="text-center text-sm max-w-xl mx-auto font-semibold">
        浪賀警察犬訓練所で運営している犬の学校は、愛犬とより快適な生活ができるようサポートいたします。犬の噛み癖、無駄吠えやトイレの失敗、引っ張りなどでお困りの飼い主様、当学校では飼い主様のライフスタイル・犬の性格に合わせた、犬のしつけコースをご用意しております。
        どうぞ、お気軽にご相談ください。
      </p>

      <Spacer y={6} />

      <MotionContainer>
        <div className="flex justify-center items-center w-full">
          <ImageSlider />
        </div>
      </MotionContainer>
      <Spacer y={10} />

      {/* 特徴 */}
      <MotionContainer>
        <FeatureSchool />
      </MotionContainer>
      <Spacer y={10} />

      {/* 自己紹介カード */}
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
                <h2 className="text-xs">
                  日本警察犬協会公認訓練士、ＪＫＣ公認訓練士
                </h2>
                <Spacer y={2} />
                <h2 className="text-xs">
                  愛犬との絆を深めるお手伝いをします。しつけ相談、お預かり、広々とした運動スペース、ドッグショーや訓練競技会の参加サポートなど、愛犬に関することならなんでもOK！一緒に楽しく、健康的なワンライフを築きましょう。お気軽にご相談ください！
                </h2>
                <Spacer y={2} />
                <h2 className="text-xs">動物取扱業 訓練１５００１１D</h2>
              </div>
            </div>
          </CardBody>
        </Card>
      </MotionContainer>
      <Spacer y={10} />

      {/* インスタ埋め込み */}
      <MotionContainer>
        <div className="flex justify-center items-center w-full">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/C-r8nbYPVW6/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: "0",
              borderRadius: "3px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: "0",
              width: "calc(100% - 2px)",
            }}
          >
            {/* Instagram埋め込みコードの内容 */}
          </blockquote>
        </div>
      </MotionContainer>

      <Spacer y={10} />

      <TitleContainer>
        <h1 className="text-2xl text-center font-medium md:text-4xl" id="about">
          TRA
        </h1>
        <h1 className="text-2xl text-center font-medium text-primeColor ml-2 md:text-4xl">
          IN
        </h1>
        <h1 className="text-2xl  text-center font-medium md:text-4xl ml-2">
          ING
        </h1>
      </TitleContainer>

      <Spacer y={8} />
      <p className="text-center text-sm max-w-xl mx-auto font-semibold">
        浪賀警察犬訓練所では、愛犬の能力を最大限に引き出し、飼い主様との絆を深めるための多様なトレーニングプログラムをご用意しております。
      </p>
      <Spacer y={6} />
      <MotionContainer>
        <div className="flex justify-center items-center w-full">
          <AboutImageList />
        </div>
      </MotionContainer>
    </div>
  );
}
