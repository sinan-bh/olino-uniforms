/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com", // Add the image's domain here
      "example.com", // Add other domains if necessary
    ],
  },
};

module.exports = nextConfig;
