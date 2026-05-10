import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        secondaryBg: "#0B0B0B",
        accent: "#8B5CF6",
        hoverAccent: "#A78BFA",
        primaryText: "#FFFFFF",
        secondaryText: "#A1A1AA",
        borderWhite: "rgba(255,255,255,0.08)",
        cardWhite: "rgba(255,255,255,0.04)",
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'luxury-gradient': 'radial-gradient(circle at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
};
export default config;