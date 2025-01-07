import type { NextConfig } from "next";
import svgr from 'vite-plugin-svgr'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.tsx'
        }
      }
    }
  }
};

export default nextConfig;