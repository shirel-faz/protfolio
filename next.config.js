/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    REACT_APP_SERVICE_ID : process.env.REACT_APP_SERVICE_ID,
    REACT_APP_PUBLIC_KEY : process.env.REACT_APP_PUBLIC_KEY
  },
  // This configures Next.js to export a static build
  // that can be served from any static file server
  target: 'experimental-serverless-trace',
}

module.exports = nextConfig
