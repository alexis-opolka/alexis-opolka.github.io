/** @type {import('@lingui/conf').LinguiConfig} */

import {formatter} from "@lingui/format-json";
import nextConfig from "./next.config";

module.exports = {
  locales: nextConfig.i18n.locales,
  pseudoLocale: "pseudo",
  sourceLocale: nextConfig.i18n.defaultLocale,
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "src/locales/{locale}/messages",
      include: ["src/app"],
    },
  ],
  format: formatter({style: "lingui"}),
};
