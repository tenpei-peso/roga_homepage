import React from 'react'
import { Spacer } from "@nextui-org/spacer";
import { FaDog } from "react-icons/fa6";
import TitleContainer from "@/components/TitleContainer";

export default function AboutDogSchool() {
  return (
    <div>
          <TitleContainer>
            <h1 className="text-2xl font-bold text-center md:text-4xl">
              About
            </h1>
            <h1 className="text-2xl font-bold text-center text-primeColor ml-2 md:text-4xl">
              Dog
            </h1>
            <h1 className="text-2xl font-bold text-center md:text-4xl ml-2">
              School
            </h1>
          </TitleContainer>

          <div className="h-1 bg-red-500 w-1/6"></div>
          <Spacer y={8} />
          
          <p className="text-center text-sm">
            嘱託警察犬の訓練実績から、ご家庭で育てられている犬のしつけ（噛み癖、無駄吠えなど）も行っております。
          </p>
          <p className="text-center text-sm">
            また当訓練所では、愛犬のしつけを矯正するためだけではなく更に高度な競技に参加できる訓練もできます。
          </p>
        </div>
  )
}
