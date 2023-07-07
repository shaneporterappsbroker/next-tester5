/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'dist',
  basePath: '/next-tester5',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
