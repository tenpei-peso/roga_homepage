import { Noto_Serif_JP } from "next/font/google";

export const notojp = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});
