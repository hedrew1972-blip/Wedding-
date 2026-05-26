import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#161116",
        plum: "#241721",
        ivory: "#f6f0e8",
        gold: "#c9a86a",
        sienna: "#7a3f2b",
        gaslamp: "#cc8b49",
        quarter: "#496858"
      },
      backgroundImage: {
        "plaster": "radial-gradient(circle at top left, rgba(201,168,106,.12), transparent 40%), radial-gradient(circle at bottom right, rgba(122,63,43,.12), transparent 45%)"
      },
      boxShadow: {
        soft: "0 30px 60px -30px rgba(0,0,0,.5)"
      }
    }
  },
  plugins: []
};

export default config;
