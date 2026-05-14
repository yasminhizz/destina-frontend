import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.destina.my",
      },
    ],
  },
};

export default nextConfig;
