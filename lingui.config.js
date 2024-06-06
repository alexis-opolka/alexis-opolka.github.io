/** @type {import('@lingui/conf').LinguiConfig} */

import {formatter} from "@lingui/format-json";
import nextConfig from "./next.config";

module.exports = {
  locales: ["en", "fr"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
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
