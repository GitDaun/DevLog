import type { NextConfig } from 'next';

const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.{js,ts,jsx,tsx}': ['@tailwindcss/postcss']
      }
    }
  },
  images: {
    domains: ['cdn.jsdelivr.net'],
    unoptimized: true
  },
  webpack: (config: any) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@tailwindcss/oxide': '@tailwindcss/oxide-linux-x64-gnu'
        }
      }
    };
  }
} satisfies NextConfig;

export default nextConfig; 