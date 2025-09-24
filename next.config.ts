import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ignorer les erreurs ESLint pendant le build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
