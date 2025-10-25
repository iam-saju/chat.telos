import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-slot",
      "clsx",
      "tailwind-merge"
    ]
  }
};

export default nextConfig;
