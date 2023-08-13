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
  i18n: {
    // These are all the locales we want to support
    locales: ["en", "fr"],
    defaultLocale: "en"
  },
  output: "export"
}

module.exports = nextConfig
