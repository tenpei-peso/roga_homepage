import React from "react";
import Container from "../Container";

import Link from "next/link";
import Map from "./Map/Map";
import FooterInfo from "./FooterInfo/FooterInfo";
import { Card } from "@nextui-org/react";

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
          <Map />
        </Container>
      </Card>
    </div>
  );
}

export default Footer;
