import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};
module.exports = nextConfig;
export default nextConfig;
