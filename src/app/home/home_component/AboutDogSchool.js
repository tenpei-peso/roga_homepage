"use client";
import React from "react";
import { Spacer } from "@nextui-org/spacer";
import TitleContainer from "@/components/TitleContainer";
import Image from "next/image";

export default function AboutDogSchool() {
  return (
    <div>
      <TitleContainer>
        <h1 className="text-2xl text-center md:text-4xl">ABOUT</h1>
        <h1 className="text-2xl text-center text-primeColor ml-2 md:text-4xl">
          DOG
        </h1>
        <h1 className="text-2xl  text-center md:text-4xl ml-2">SCHOOL</h1>
      </TitleContainer>

      <Spacer y={8} />

      <p className="text-center text-sm">
        嘱託警察犬の訓練実績から、ご家庭で育てられている犬のしつけ（噛み癖、無駄吠えなど）も行っております。
      </p>
      <p className="text-center text-sm">
        また当訓練所では、愛犬のしつけを矯正するためだけではなく更に高度な競技に参加できる訓練もできます。
      </p>
      {/* <Image
        src="/entrance.jpeg"
        alt="Logo"
        width={300}
        height={300}
        style={{
          clipPath: "url(#myClipPath)",
          WebkitClipPath: "url(#myClipPath)",
        }}
      />
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="myClipPath">
            <path
              fill="#000000"
              d="M65.9,-22.4C74.9,6.2,64.4,40.1,41.4,56.7C18.4,73.4,-17,72.7,-41.1,55.4C-65.3,38.2,-78.3,4.3,-69.5,-24C-60.8,-52.3,-30.4,-74.9,-1,-74.6C28.5,-74.3,57,-51,65.9,-22.4Z"
              transform="translate(100 100)"
            >
              <animate
                attributeType="XML"
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values=" M65.9,-22.4C74.9,6.2,64.4,40.1,41.4,56.7C18.4,73.4,-17,72.7,-41.1,55.4C-65.3,38.2,-78.3,4.3,-69.5,-24C-60.8,-52.3,-30.4,-74.9,-1,-74.6C28.5,-74.3,57,-51,65.9,-22.4Z;            M70.1,-23C79,4.7,66.2,39.2,42.1,56.3C18,73.4,-17.5,73.2,-41.9,55.9C-66.2,38.7,-79.4,4.3,-70.5,-23.3C-61.7,-50.9,-30.8,-71.8,-0.1,-71.8C30.6,-71.7,61.1,-50.8,70.1,-23Z;            M68.8,-23.9C77.6,4.5,65,38.3,41.1,55.4C17.2,72.5,-18,72.9,-41.1,56.2C-64.2,39.5,-75.1,5.8,-66.2,-22.8C-57.3,-51.4,-28.7,-74.8,0.7,-75C30,-75.3,60.1,-52.3,68.8,-23.9Z;            M71,-22.4C80,4.7,67.1,39.5,42.1,57.5C17.2,75.5,-19.6,76.6,-42.6,59.7C-65.5,42.8,-74.5,7.8,-65.1,-19.8C-55.7,-47.5,-27.9,-67.8,1.6,-68.3C31,-68.8,62,-49.5,71,-22.4Z; M69.3,-23.5C78.4,5.5,66.4,40.2,42.2,57.8C17.9,75.4,-18.6,75.7,-42.5,58.4C-66.4,41.1,-77.6,6.1,-68.4,-23C-59.1,-52.2,-29.6,-75.5,0.3,-75.6C30.1,-75.7,60.2,-52.5,69.3,-23.5Z; M62,-19.2C71,7.4,62.4,40.8,40.1,57.5C17.9,74.1,-18,74.2,-41.1,57.3C-64.2,40.4,-74.4,6.4,-65.4,-20.3C-56.4,-47,-28.2,-66.4,-0.8,-66.2C26.5,-65.9,53.1,-45.9,62,-19.2Z; M65.6,-21.9C74.8,6.8,64.8,41.2,42,57.8C19.1,74.4,-16.6,73.3,-41.4,55.6C-66.1,37.9,-79.9,3.8,-71.1,-24.4C-62.4,-52.5,-31.2,-74.6,-1.5,-74.2C28.2,-73.7,56.5,-50.6,65.6,-21.9Z"
              />
            </path>
          </clipPath>
        </defs>
      </svg> */}
    </div>
  );
}
