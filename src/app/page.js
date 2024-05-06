"use client";
import MotionContainer from "@/components/MotionContainer";
import VideoWithText from "./home/home_component/VideoWithText";
import AboutDogSchool from "./home/home_component/AboutDogSchool";
import Services from "./home/home_component/Services";
import ServiceContent from "./home/home_component/service_content/ServiceContent";
import { Spacer } from "@nextui-org/spacer";
import { FaDog } from "react-icons/fa6";
import TitleContainer from "@/components/TitleContainer";

export default function Home() {
  return (
    <div>
      <VideoWithText />
      <Spacer y={20} />
      <MotionContainer>
        <AboutDogSchool />
      </MotionContainer>
      <Spacer y={24} />
      <MotionContainer>
        <Services />
      </MotionContainer>
      <Spacer y={12} />
      <MotionContainer>
        <ServiceContent />
      </MotionContainer>
    </div>
  );
}
