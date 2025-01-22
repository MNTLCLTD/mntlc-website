import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0077FF",    // Blue
          dark: "#0A1128",       // Dark blue
          success: "#32FF7E",    // Green
          warning: "#FF914D",    // Orange
          light: "#F5F5F5",      // Light gray
          muted: "#A8A8A8",      // Medium gray
          text: "#343A40",       // Dark gray
          accent: "#8A2EFF",     // Purple
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
