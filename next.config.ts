import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-slot",
      "clsx",
      "tailwind-merge"
    ]
  }
};

export default nextConfig;
