/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, "src/styles"),
      path.join(__dirname, "src/app/styles"),
    ],
    //disable lint when building
    eslint: {
      ignoreDuringBuilds: true,
    },
  },
};

module.exports = nextConfig;
