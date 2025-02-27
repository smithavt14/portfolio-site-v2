import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
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
  ],
  theme: {
    fontSize: {
      responsive: ["clamp(36px, 8vw, 80px)", "1.1"],
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
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
        otherBounce: {
          "0%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        spin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        shiftUp: {
          "0%": {
            marginBottom: "0",
          },
          "100%": {
            marginBottom: "8px",
          },
        },
        shiftRightFast: {
          "0%": {
            transform: "translsatex(0px)",
          },
          "100%": {
            transform: "translatex(400px)",
          },
        },
        shiftRightSlow: {
          "0%": {
            transform: "translsatex(0px)",
          },
          "100%": {
            transform: "translatex(400px)",
          },
        },
        shiftDownSlow: {
          "0%": {
            transform: "translsatey(0px)",
          },
          "100%": {
            transform: "translatey(200px)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        twinkle: {
          "0%, 100%": {
            opacity: "1",
            filter: "brightness(1)",
          },
          "50%": {
            opacity: "0.3",
            filter: "brightness(0.5)",
          },
        },
        billowUp: {
          "0%": {
            transform: "translateY(0) scale(1)",
            opacity: "0.8",
          },
          "50%": {
            transform: "translateY(-100px) scale(1.5)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(-200px) scale(2)",
            opacity: "0",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        shiftUp: "shiftUp 0.2s ease-out",
        bounce: "otherBounce 1s infinite",
        spin: "spin 60s linear infinite",
        shiftRightSlow: "shiftRightSlow 90s linear infinite",
        shiftRightFast: "shiftRightFast 30s linear infinite",
        shiftDownSlow: "shiftDownSlow 20s linear",
        float: "float 6s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        billowUp: "billowUp 8s ease-out infinite",
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
} as const;

export default config;
