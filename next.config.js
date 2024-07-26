/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['utfs.io', 'aceternity.com','images.unsplash.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          port: ''
        },
        {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
        },
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          pathname: "**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  