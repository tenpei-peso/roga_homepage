import React from "react";
import Container from "../Container";

import Link from "next/link";
import FooterInfo from "./FooterInfo/FooterInfo";
import { Card, Spacer } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLine } from "@fortawesome/free-brands-svg-icons";
import ContactComponent from "./FooterInfo/Contact";

function Footer() {
  return (
    <div className="w-full mt-10" id="access">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 py-3"
        shadow="sm"
      >
        <Container>
          <FooterInfo />
          <div className="flex justify-center items-center mt-4 mb-6">
            <Link href="https://www.instagram.com/daisuketakenaka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-[60px]"
                color="#E043D0"
              />
            </Link>
            <Spacer x={6} />
            <Link href="/privacy">
              <FontAwesomeIcon
                icon={faLine}
                className="h-[56px]"
                color="#8DE055"
              />
            </Link>
          </div>
          <h2 className="text-center text-xs text-gray-500" id="contact">
            ご不明な点がございましたら、電話かメールにてお問い合わせください。
          </h2>
          <Spacer y={4} />
        </Container>
      </Card>
    </div>
  );
}

export default Footer;
