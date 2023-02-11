/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["localhost", "fastly.picsum.photos"] },
}

module.exports = nextConfig
