import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted anywhere (Vercel, GitHub Pages, S3).
  output: "export",
  // Set in the Pages workflow; empty for local dev and root-domain hosts.
  basePath: process.env.BASE_PATH || "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
