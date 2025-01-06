import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  compiler: {
    // ssr and displayName are configured by default
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