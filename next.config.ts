import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "media.istockphoto.com",
      "imgs.search.brave.com",
    ],
  },
};

export default nextConfig;
