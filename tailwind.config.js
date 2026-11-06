/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./content/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1E2329",
        // Dark surfaces: header and episode cards, then the end credits
        camera: { DEFAULT: "#121417", muted: "#9AA1A9", text: "#E8E9EA" },
        credits: { DEFAULT: "#0B0C0E", text: "#C9CED4", muted: "#8E959D" },
        strip: "#2B2F35",
        wall: "#D9D6CB",
        panel: { DEFAULT: "#E4E1D6", dark: "#CFCBBE" },
        tile: "#D5D1C3",
        cubicle: { DEFAULT: "#4F5B66", text: "#E3E6EA", muted: "#D5DAE0" },
        muted: { DEFAULT: "#4A4F55", deep: "#3B434C" },
        rule: "#9AA2AA",
        marker: "#FFD84D",
        sticky: { DEFAULT: "#FFE98A", ink: "#5C5222" },
        pen: { DEFAULT: "#2244B8", dark: "#1A3490" },
        stamp: "#B8323A",
        rec: "#E0393B",
        manila: { DEFAULT: "#E3C88A", tab: "#D9BC78", edge: "#C9A962" },
        cork: { DEFAULT: "#B98E5E", frame: "#7A5A38" },
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        condensed: ["var(--font-plex-condensed)", "var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
        hand: ["var(--font-reenie)", "cursive"],
      },
      maxWidth: {
        page: "1240px",
        prose: "65ch",
      },
      fontSize: {
        sm: ["0.9375rem", { lineHeight: "1.5" }],
        base: ["1.0625rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
      },
      borderRadius: {
        DEFAULT: "4px",
        folder: "4px",
        board: "6px",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#2E353D",
            "--tw-prose-headings": theme("colors.ink"),
            "--tw-prose-links": theme("colors.pen.DEFAULT"),
            "--tw-prose-bold": theme("colors.ink"),
            "--tw-prose-counters": theme("colors.muted.DEFAULT"),
            "--tw-prose-bullets": theme("colors.muted.DEFAULT"),
            "--tw-prose-quotes": theme("colors.muted.deep"),
            "--tw-prose-quote-borders": theme("colors.pen.DEFAULT"),
            "--tw-prose-hr": theme("colors.rule"),
            maxWidth: "65ch",
            fontSize: "1.125rem",
            lineHeight: "1.65",
            a: { textUnderlineOffset: "3px" },
            h2: {
              fontFamily: theme("fontFamily.condensed").join(","),
              fontWeight: "700",
              fontSize: "1.875rem",
              lineHeight: "1.15",
              marginTop: "1.6em",
              marginBottom: "0.6em",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
