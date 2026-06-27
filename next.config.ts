import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },

    ],
  },
  allowedDevOrigins: ['192.168.10.8'],
};

export default nextConfig;

