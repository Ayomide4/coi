import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#EDF7F6",
        background: "#081211",
        primary: "#2A847C",
        secondary: "#101D1B",
        accent: "#5CD1C7",
        foreground: "#151D1C",
        backgroundGreen: "#1C3431",
      },
    },
  },

  plugins: [scrollbarHide],
} satisfies Config;
