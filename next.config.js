/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: ["wallpapercave.com", "media.gettyimages.com",],
  },
};

module.exports = nextConfig;
