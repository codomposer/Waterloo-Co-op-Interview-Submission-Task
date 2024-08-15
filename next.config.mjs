/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.website-files.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
