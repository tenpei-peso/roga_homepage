// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primeColor: '#FF9900',
        pressColor: '#555555',
      },
      screens: {
        'xs': '420px', // xs画面サイズを420pxと定義
      },
      fontFamily: {
        notojp: ['var(--font-notojp)'],
      },
    },
  },
  plugins: [nextui()],
};
