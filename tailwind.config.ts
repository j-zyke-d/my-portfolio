import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"], // Montserrat
        mono: ["var(--font-roboto-mono)", "monospace"], // Roboto Mono
      },
      colors: {
        primary: "#181C14", // Dark Green-Black
        secondary: "#3C3D37", // Gray-Green
        accent: "#697565", // Muted Olive
        background: "#ECDFCC", // Soft Beige
      },
    },
  },
  plugins: [],
};

export default config;
