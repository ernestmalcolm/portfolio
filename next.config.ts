import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/work/simplitech", destination: "/work/simplify", permanent: true },
      { source: "/work/finsol-verified-portal", destination: "/work", permanent: true },
      {
        source: "/writing/notes-from-the-build",
        destination: "/writing/intern-to-tech-lead-and-whats-next",
        permanent: true,
      },
    ];
  },
  webpack: (config, { dev }) => {
    // Prevents corrupted HMR cache packs that cause
    // "__webpack_modules__[moduleId] is not a function" in dev.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
