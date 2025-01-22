/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/mentalic-website/',
  basePath: '/mentalic-website',
  trailingSlash: true,
}

module.exports = nextConfig 