/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Enable RTL support
  i18n: {
    locales: ['en', 'he', 'ar'],
    defaultLocale: 'he',
    localeDetection: false,
  },
  // Custom webpack configuration for better RTL support
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
