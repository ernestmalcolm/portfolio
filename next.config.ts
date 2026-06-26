import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
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
