import type { NextConfig } from 'next';

const nextConfig = {

  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
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