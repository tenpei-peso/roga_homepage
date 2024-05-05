import React from "react";
import Container from "../../Container";
import { Divider } from "@nextui-org/react";
import { PiTrain, PiPoliceCar } from "react-icons/pi";

const Map = () => {
  return (
    <div className="py-3 xs:w-full sm:h-64 sm:w-full sm:h-64 md:flex md:w-full md:h-64 lg:flex lg:w-full lg:h-64">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52503.229481976145!2d135.50551040000002!3d34.668544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0b7e4764e57%3A0xbea610d725ffcb7f!2z5qOu44OO5a6u6aeF!5e0!3m2!1sja!2sjp!4v1713509708743!5m2!1sja!2sjp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Container>
        <div className="w-full h-full flex flex-col justify-around py-3">
          <div className="flex justify-around">
            <div className="flex flex-col">
              <div className="flex items-center">
                <PiPoliceCar size={26} className="pr-1" />
                <h3 className="font-bold">お車でお越しの方</h3>
              </div>
              <h5 className="py-2 text-sm">南阪奈道路　太子ICから10分</h5>
            </div>
            <Divider orientation="vertical" className="mx-2" />
            <div className="flex flex-col">
              <div className="flex items-center">
                <PiTrain size={26} className="pr-1" />
                <h3 className="font-bold">電車でお越しの方</h3>
              </div>
              <h5 className="py-2 text-sm">南阪奈道路　太子ICから10分</h5>
            </div>
          </div>
          <h5 className="py-2 text-sm">
            ※電車、バスご利用のお客様はお気軽にご連絡下さい。最寄駅までスタッフにて送迎致します。
            大変恐れ入りますが、当日のご依頼の場合はご希望のお時間通り送迎できない場合がございます、できましたら前日までに、ご用命いただければ幸いです。
          </h5>
        </div>
      </Container>
    </div>
  );
};

export default Map;
