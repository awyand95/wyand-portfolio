import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted anywhere (Vercel, GitHub Pages, S3).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
