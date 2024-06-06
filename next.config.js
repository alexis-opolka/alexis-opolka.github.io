/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {},
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "yaml-loader",
    });
    return config;
  },
  output: "standalone",
};

module.exports = nextConfig
