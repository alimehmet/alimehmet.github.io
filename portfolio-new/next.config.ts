import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  // Uncomment and set basePath if deploying to a subpath like /alimehmet.github.io
  // basePath: '',
};

export default nextConfig;
