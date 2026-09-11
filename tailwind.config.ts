import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0E1B2C",
          800: "#152640",
          700: "#1D3557",
        },
        azure: {
          50: "#EEF4FC",
          100: "#D7E6F9",
          200: "#AFCBF2",
          300: "#7FA9E6",
          400: "#4E82D6",
          500: "#2C5FC0",
          600: "#1F4A9F",
          700: "#193C80",
          800: "#152F63",
          900: "#0F2249",
        },
        flame: {
          50: "#FFF3E8",
          100: "#FFE1C4",
          200: "#FFC48A",
          300: "#FFA854",
          400: "#FB9231",
          500: "#F27B1B",
          600: "#D9620E",
          700: "#B04C0A",
        },
        paper: "#F8FAFC",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(14, 27, 44, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
