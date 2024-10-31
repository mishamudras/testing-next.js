/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Přidejte domény pro obrázky, pokud nějaké používáte
  }
};

module.exports = nextConfig;