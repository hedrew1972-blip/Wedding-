import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F3EC",
        payne: "#49515B",
        charcoal: "#2E3135",
        gold: "#B89A58",
        navy: "#1F2D3D"
      },
      boxShadow: {
        soft: "0 30px 80px -35px rgba(46,49,53,.45)"
      }
    }
  },
  plugins: []
};

export default config;
