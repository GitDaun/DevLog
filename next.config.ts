import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Tailwind CSS v4 Oxide 엔진 설정
        '*.{js,ts,jsx,tsx}': ['@tailwindcss/postcss']
      }
    }
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@tailwindcss/oxide': '@tailwindcss/oxide-linux-x64-gnu'
    };
    return config;
  }
};

export default nextConfig; 