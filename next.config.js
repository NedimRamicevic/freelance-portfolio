/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "funkytours.com",
      "cdn-ph-org.worldtattoogallery.com",
      "m.media-amazon.com",
    ],
  },
};

module.exports = nextConfig;
