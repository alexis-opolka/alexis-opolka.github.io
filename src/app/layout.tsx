"use client"

// Stylesheets and Types imports
import styles from "/public/stylesheets/master.module.css";
import type { Metadata } from 'next';

// NextJS imports
import { Inter } from 'next/font/google'
import { SSRProvider, PageLayout, Box } from "@primer/react";
import {t} from "@lingui/macro";
import { I18nProvider } from "@lingui/react";
import { i18n } from '@lingui/core';
import { useEffect } from "react";

// Intern Imports
import NoSSR from "@/components/wrappers/NoSSR";
import GithubPrimerWrapper from "@/components/wrappers/GithubPrimerWrappers";
import PortfolioHeader from "@/components/PortfolioHeader";
import { defaultLocale, dynamicLoadNActivateLocale } from "@/headers/i18n";
import defaultMessages from "@/locales/en/messages";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexis Opolka Portfolio',
  description: 'The website & portfolio of Alexis Opolka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // We set this variable to false as default
  // as it serves us to know if the `useEffect` hook
  // was called before rendering `I18nProvider` Component
  var isDefaultLocaleSet = false;

  // Dynamically call translations inside a `useEffect` React hook
  const I18nApp = () => {
    useEffect(() => {
      // With this method we should dynamically load the required locale
      dynamicLoadNActivateLocale(defaultLocale);
      console.log(isDefaultLocaleSet);
      isDefaultLocaleSet = true;
    })
  }


  // Workaround for `I18nProvider` Component not being activated
  // We set the locale and the messages by default
  if (!isDefaultLocaleSet) {
    i18n.load(defaultLocale, defaultMessages);
    i18n.activate(defaultLocale);
  }

  return (
    <SSRProvider>
      {/** The `SSRProvider` Component is here to ensure the same
       * IDs from the Server-side rendering and the Client-side rendering
       * while also letting us make a clear line where we stop rendering
       * components on the server.
      */}
      <html className={`${styles.html}`}>
        <body className={`body ${inter.className} ${styles.bordered} ${styles.body}`}>
          <NoSSR>
            {/** The `NoSSR` custom element is present to avoid
             * the SSR Tree Mismatch error because certain components
             * such as `ThemeProvider` from `@primer/react` needs to be
             * rendered client side and is therefore not included creating
             * an SSR Tree mismatch error.
             */}
            <I18nProvider i18n={i18n}>
              <GithubPrimerWrapper>
                <PageLayout padding='condensed' containerWidth='full'>
                  <PageLayout.Header>
                    <PortfolioHeader />
                  </PageLayout.Header>
                  <PageLayout.Content sx={{
                    border: "border.default",
                    minHeight: "80%"
                  }}>
                    <Box sx={{ minHeight: "100vh" }}>
                      {children}
                    </Box>
                  </PageLayout.Content>
                  <PageLayout.Footer divider={"line"}>
                    {t`This is the Footer Content.`}
                  </PageLayout.Footer>
                </PageLayout>
              </GithubPrimerWrapper>
            </I18nProvider>
          </NoSSR>
        </body>
      </html>
    </SSRProvider>
  )
}
