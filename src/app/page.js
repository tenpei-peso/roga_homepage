"use client";
import MotionContainer from "@/components/MotionContainer";
import VideoWithText from "./home/home_component/VideoWithText";
import AboutDogSchool from "./home/home_component/AboutDogSchool"
import { Spacer } from "@nextui-org/spacer";


export default function Home() {
  return (
    <div>
      <VideoWithText />
      <Spacer y={20} />
      <MotionContainer>
        <AboutDogSchool />
      </MotionContainer>
    </div>
  );
}
