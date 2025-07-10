/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  //turn off image optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.nexel.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
