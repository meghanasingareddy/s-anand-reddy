import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          950: "#07090D",
          900: "#0B0E14",
          850: "#0E1217",
          800: "#131822",
          700: "#1D2433",
          600: "#2B3548",
        },
        sand: {
          50: "#FAF8F5",
          100: "#F4EFE6",
          200: "#EBE3D3",
          300: "#DDD1BC",
          400: "#CDBDA2",
          500: "#B8A383",
        },
        gold: {
          300: "#EAD7BA",
          400: "#D9C3A3",
          500: "#C5A880",
          600: "#A98A60",
          700: "#8C6F47",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
