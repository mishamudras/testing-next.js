/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // přidání podpory pro Tailwind CSS
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['postcss-loader']
    });
    return config;
  }
};

module.exports = nextConfig;