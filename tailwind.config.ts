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
  theme: {
  	height: {
  		layout: 'var(--layout)'
  	},
  	extend: {
  		colors: {
  			border: "hsl(var(--border))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  		},
  		fontSize: {
  			responsive: [
  				'clamp(34px, 8vw, 80px)',
  				'1.1'
  			]
  		},
  		keyframes: {},
  		animation: {},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} as const;

export default config;
