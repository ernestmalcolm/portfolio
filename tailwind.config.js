/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B1F3A", light: "#12264A", dark: "#07152A" },
        cream: "#F5F1E8",
        coral: { DEFAULT: "#FF6B5E", light: "#FF8A80" },
        mist: "#C5CEDB",
        muted: "#98A4B8",
        line: "#2E4670",
        field: "#5B7096",
        // The receipt is a white slip of paper, so it keeps its own palette
        receipt: {
          DEFAULT: "#FFFFFF",
          ink: "#222831",
          slate: "#30475E",
          muted: "#5F6873",
          red: "#C8333F",
        },
        stamp: "#E5484D",
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        condensed: ["var(--font-plex-condensed)", "var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        sm: ["0.9375rem", { lineHeight: "1.5" }],
        base: ["1.0625rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
      },
      borderRadius: {
        DEFAULT: "4px",
        img: "8px",
      },
      maxWidth: {
        prose: "65ch",
      },
      animation: {
        spotlight: "spotlight 2s ease 0.4s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.mist"),
            "--tw-prose-headings": theme("colors.cream"),
            "--tw-prose-links": theme("colors.coral.DEFAULT"),
            "--tw-prose-bold": theme("colors.cream"),
            "--tw-prose-counters": theme("colors.muted"),
            "--tw-prose-bullets": theme("colors.coral.DEFAULT"),
            "--tw-prose-quotes": theme("colors.mist"),
            "--tw-prose-quote-borders": theme("colors.coral.DEFAULT"),
            "--tw-prose-hr": theme("colors.line"),
            maxWidth: "65ch",
            fontSize: "1.125rem",
            lineHeight: "1.65",
            a: { textUnderlineOffset: "3px" },
            h2: {
              fontFamily: theme("fontFamily.condensed").join(","),
              fontWeight: "700",
              fontSize: "1.875rem",
              letterSpacing: "-0.01em",
              marginTop: "2.5em",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
