import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        muted: "var(--muted)",
        line: "var(--line)",
        brand: {
          DEFAULT: "var(--brand)",
          soft: "var(--brand-soft)",
          strong: "var(--brand-strong)"
        },
        accent: "var(--accent)"
      },
      borderRadius: {
        xl2: "1.25rem",
        xxl: "1.75rem"
      },
      boxShadow: {
        glow: "0 20px 70px -30px color-mix(in oklab, var(--brand) 35%, transparent)",
        panel: "0 10px 40px -20px rgba(0,0,0,0.25)"
      },
      spacing: {
        section: "clamp(4rem, 8vw, 7.5rem)",
        container: "min(1120px, 92vw)"
      }
    }
  },
  plugins: []
};

export default config;
