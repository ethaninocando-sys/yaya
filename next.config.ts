import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All imagery is served locally from /public/assets. Keep modern formats on.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
