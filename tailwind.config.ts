import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "hsl(157, 59%, 47%)",
          accent: "hsl(157, 40%, 35%)",
          secondary: "hsl(157, 10%, 96%)",
          muted: "hsl(157, 10%, 96%)",
        },
        // Chart Colors
        chart: {
          1: "hsl(157, 59%, 47%)",
          2: "hsl(157, 40%, 35%)",
          3: "hsl(157, 33%, 71%)",
          4: "hsl(157, 41%, 57%)",
          5: "hsl(157, 10%, 20%)",
        },
        // Category Colors
        category: {
          1: "hsl(157, 33%, 71%)",
          2: "hsl(157, 41%, 57%)",
          3: "hsl(157, 59%, 47%)",
          4: "hsl(157, 40%, 35%)",
          5: "hsl(157, 10%, 20%)",
          6: "hsl(157, 25%, 45%)",
        },
        // System Colors
        border: "hsl(157, 10%, 90%)",
        background: "hsl(0, 0%, 100%)",
        card: "hsl(0, 0%, 100%)",
        destructive: "hsl(0, 84.2%, 60.2%)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
