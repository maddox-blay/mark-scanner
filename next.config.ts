import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true, // Uses a 308 permanent redirect status code
      },
    ];
  },
};

export default nextConfig;
