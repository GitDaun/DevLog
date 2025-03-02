import type { NextConfig } from 'next';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dm4xbk7hh/image/upload/**',
      }
    ],
    dangerouslyAllowSVG: true,
  },
  webpack: (config) => {
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