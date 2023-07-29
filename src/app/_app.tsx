// Import styles and types
import style from "/public/stylesheets/master.module.css";
import type { AppProps } from "next/app";

// ReactJS / NextJS Imports
import { I18nProvider } from "@lingui/react";
import { i18n } from '@lingui/core';
import { defaultLocale, dynamicLoadNActivateLocale } from "@/headers/i18n";
import { useEffect } from "react";
import { ThemeProvider, BaseStyles} from '@primer/react';


function App({ Component, pageProps }: AppProps) {

  // Dynamically call translations inside a `useEffect` React hook
  const I18nApp = () => {
    useEffect(() => {
      // With this method we should dynamically load the required locale
      dynamicLoadNActivateLocale(defaultLocale);
    })
  }

  return (
    <ThemeProvider colorMode={"night"} preventSSRMismatch>
      <BaseStyles>
        <I18nProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nProvider>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
