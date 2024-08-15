import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#4663fe",
        success: "#85E13A",
        secondary: "#7d7d7d",
        accent: "#ffffff",
        "accent-foreground": "#000000",
        bgColor: "#080808",
        modalBgColor: "#101010",
        buttonBorderColor: "#383838",
        borderColor: "#1b1b1b",
        lightBgColor: "#2a2a2a",
      },
    },
  },
  plugins: [],
};
export default config;
