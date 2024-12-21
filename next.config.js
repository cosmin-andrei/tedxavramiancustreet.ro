/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = {
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;
