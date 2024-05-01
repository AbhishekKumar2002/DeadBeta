/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: [
      "wallpapercave.com",
      "media.gettyimages.com",
      "lh5.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
