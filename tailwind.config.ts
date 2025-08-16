import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto)'],
        kanit: ['var(--font-kanit)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        Main_pallete_04 : "#678C92",
        Main_pallete_00 : "#F4F7FF",
        Heading_01 : "#486A6F",
        blue_1100:"#4397A4",
        Black_1100 : "#41444B",
        blue_1200 :"#16213E",
      },
    },
  },
  plugins: [],
};
export default config;
