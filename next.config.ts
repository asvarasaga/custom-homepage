import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  Images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};
module.exports = nextConfig;
export default nextConfig;
