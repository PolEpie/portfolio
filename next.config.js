/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://alliance-dapp.vercel.app/api/nft/:path*',
        },
      ]
    },
};
module.exports = {
  images: {
    domains: ['alliance-dapp.vercel.app'],
    formats: ['image/avif', 'image/webp'],
  },
}