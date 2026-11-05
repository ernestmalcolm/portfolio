export const siteConfig = {
  name: "Ernest Mwinchumu",
  title: "Product and Tech Lead",
  tagline:
    "I connect what the business needs, what the market wants and what the team can build.",
  personalityLine:
    "I plan it, design it, and build it, then explain it with a metaphor you didn't ask for.",
  location: "Dar es Salaam, Tanzania",
  social: {
    linkedin: "https://www.linkedin.com/in/ernestmwinchumu/",
  },
  email: "gmem200197@gmail.com",
  phone: "+255742200105",
  phoneDisplay: "+255 742 200 105",
  photo: "/images/ernest-portrait.jpg",
} as const;

/**
 * The site's public URL, no trailing slash. NEXT_PUBLIC_SITE_URL wins (set it
 * once a custom domain is live); otherwise Vercel's production domain, which
 * Vercel provides automatically; otherwise localhost for development.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
