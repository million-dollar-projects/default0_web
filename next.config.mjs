import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  experimental: {},
  webpack: (config, { dev }) => {
    config.resolve.alias["@font-config"] = path.resolve(
      __dirname,
      dev ? "lib/font-config.dev.ts" : "lib/font-config.prod.ts"
    );
    return config;
  }
};

export default nextConfig;
