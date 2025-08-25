import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // enables dark mode toggle (using a "dark" class)
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // example blue (you can change later)
        secondary: "#9333ea", // example purple
      },
    },
  },
  plugins: [],
};

export default config;
