import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./types/**/*.{js,ts,jsx,tsx}",
    "./providers/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "from-[#1C0C32]",
    "to-[#0A0412]",
    "from-[#E0F2FE]",
    "to-[#7DD3FC]",
    "from-[#F1D197]",
    "to-[#66267A]",
    "from-[#D6E8D8]",
    "to-[#FFFFFF]",
    "text-midnight",
    "dark:text-white",
    "dark:hover:text-slate-400",
    "fill-current"
  ],
  theme: {
    height: {
      layout: "var(--layout)",
    },
    fontSize: {
      responsive: ["clamp(36px, 8vw, 80px)", "1.1"],
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
    },
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        white: "0 0 48px rgba(255, 255, 255, 0.25)",
      },
      colors: {
        midnight: "#1C0C32",
        twilight: "#371761",
        deepnight: "#0a0412",
        deepPurple: "#8B4FD1",
      },
      keyframes: {
      },
      animation: {
      },
    },
  },
  plugins: [],
} as const;

export default config;
