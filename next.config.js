/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedRoutes: true,
    swcPlugins: [
      ["@lingui/swc-plugin", {}],
    ]
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "yaml-loader",
    });
    return config;
  },
  i18n: {
    // These are all the locales we want to support
    locales: ["en", "fr"],
    defaultLocale: "en"
  },
  output: undefined
}

module.exports = nextConfig
