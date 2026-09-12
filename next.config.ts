import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/longevity", destination: "/peptides/nad-plus", permanent: true },
      { source: "/longevity/:path*", destination: "/peptides", permanent: true },
      { source: "/shop/longevity", destination: "/shop", permanent: true },
      { source: "/shop/pen-accessories", destination: "/shop/facial-needling", permanent: true },
      { source: "/skin/ghk-cu", destination: "/skin/peptide-serums", permanent: true },
    ];
  },
};

export default nextConfig;
