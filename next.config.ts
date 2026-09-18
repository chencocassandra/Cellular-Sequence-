import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/longevity", destination: "/peptides/nad-plus", permanent: true },
      { source: "/longevity/:path*", destination: "/peptides", permanent: true },
      { source: "/shop/longevity", destination: "/shop", permanent: true },
      { source: "/shop/patches", destination: "/shop/peptide-patches", permanent: true },
      { source: "/shop/tablets", destination: "/shop", permanent: true },
      { source: "/shop/cognitive", destination: "/shop", permanent: true },
      {
        source: "/shop/focus-theanine-capsules",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/shop/focus-bacopa-capsules",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/shop/nad-plus-tablets",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/about/the-longevity-protocol",
        destination: "/about/cellular-sequence",
        permanent: true,
      },
      { source: "/skin/ghk-cu", destination: "/skin/peptide-serums", permanent: true },
    ];
  },
};

export default nextConfig;
