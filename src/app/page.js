"use client";
import MotionContainer from "@/components/MotionContainer";
import VideoWithText from "./home/home_component/VideoWithText";
import AboutDogSchool from "./home/home_component/about_dog_school/AboutDogSchool";
import Services from "./home/home_component/Services";
import ServiceContent from "./home/home_component/service_content/ServiceContent";
import { Spacer } from "@nextui-org/spacer";
import HomeTopSvg from "@/components/SvgComponent/HomeTopSvg";
import HomeTopSvg2 from "@/components/SvgComponent/HomeTopSvg2";
import HomeTopSvg3 from "@/components/SvgComponent/HomeTopSvg3";

export default function Home() {
  return (
    <div>
      <VideoWithText />
      <Spacer y={12} />
      <MotionContainer>
        <div className="relative w-full flex justify-center items-center ">
          <div className="absolute z-[-1] top-0 left-0.5 w-1/2 h-1/2">
            <HomeTopSvg />
          </div>
          <div className="absolute z-[-1] bottom-[-50px] right-[-20px] w-2/5 h-2/5">
            <HomeTopSvg2 />
          </div>
          <div className="absolute z-[-1] bottom-[-100px] left-[-20px] w-1/2 h-1/2">
            <HomeTopSvg3 />
          </div>
          <div className="absolute z-[-1] bottom-[-400px] right-0 w-1/2 h-1/2">
            <HomeTopSvg />
          </div>
          <div className="absolute z-[-1] bottom-[-800px] left-0.5 w-1/2 h-1/2">
            <HomeTopSvg />
          </div>
          <div className="absolute z-[-1] bottom-[-1200px] right-0 w-1/2 h-1/2">
            <HomeTopSvg2 />
          </div>
          <div className="absolute z-[-1] bottom-[-1600px] left-0.5 w-1/2 h-1/2">
            <HomeTopSvg />
          </div>
          <div className="absolute z-[-1] bottom-[-1800px] left-[-20px] w-1/2 h-1/2">
            <HomeTopSvg3 />
          </div>
          <div className="absolute z-[-1] bottom-[-2200px] right-0 w-1/2 h-1/2">
            <HomeTopSvg2 />
          </div>
          <div className="absolute z-[-1] bottom-[-2300px] right-[-20px] w-1/2 h-1/2">
            <HomeTopSvg3 />
          </div>
          <div className="absolute z-[-1] bottom-[-2800px] left-[-20px] w-1/2 h-1/2">
            <HomeTopSvg3 />
          </div>
        </div>
      </MotionContainer>
      <MotionContainer>
        <AboutDogSchool />
      </MotionContainer>
      <Spacer y={12} />
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
