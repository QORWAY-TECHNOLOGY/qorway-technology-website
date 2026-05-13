import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        qorway: {
          black: "var(--qorway-black)",
          graphite: "var(--qorway-graphite)",
          charcoal: "var(--qorway-charcoal)",
          cream: "var(--qorway-cream)",
          sand: "var(--qorway-sand)",
          muted: "var(--qorway-muted)",
          terracotta: "var(--qorway-terracotta)",
          copper: "var(--qorway-copper)",
          border: "var(--qorway-border)"
        }
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        sovereign: "0 24px 80px rgba(0, 0, 0, 0.32)"
      },
      backgroundImage: {
        "qorway-grid": "linear-gradient(rgba(243, 232, 208, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(243, 232, 208, 0.055) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
