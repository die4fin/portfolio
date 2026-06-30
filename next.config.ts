import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Memaksa evaluasi env validation menggunakan jalur absolut Node.js
import(path.resolve(process.cwd(), "src/env.ts"));

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
