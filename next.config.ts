/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public', // Destination directory for PWA files (sw.js, workbox, etc.)
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development
  register: true, // Register the service worker
  skipWaiting: true, // Skip waiting for the service worker to activate
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

}

export default withPWA(nextConfig)
