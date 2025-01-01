import type { NextConfig } from "next";
import { generalDepTree } from "./data/generalTree";

generalDepTree()
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  distDir: 'build',
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 200,
  },
};

export default nextConfig;
