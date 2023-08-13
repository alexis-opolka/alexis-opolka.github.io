"use client"

// Stylesheets and Types imports
import styles from "/public/stylesheets/master.module.css";

// NextJS imports
import { Inter } from 'next/font/google'
import { I18nProvider } from "@lingui/react";
import { i18n } from '@lingui/core';
import { useEffect, useState } from "react";

// Intern Imports
import NoSSR from "@/components/wrappers/NoSSR";
import GithubPrimerWrapper from "@/components/wrappers/GithubPrimerWrappers";
import { defaultLocale, dynamicLoadNActivateLocale } from "@/headers/i18n";
import defaultMessages from "@/locales/en/messages";

// Variables
const inter = Inter({ subsets: ['latin'] })

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
  }, [])
}

export default function RootLayout({children}:{children: React.ReactNode}){

    // Workaround for `I18nProvider` Component not being activated
    // We set the locale and the messages by default
    if (!isDefaultLocaleSet) {
        i18n.load(defaultLocale, defaultMessages);
        i18n.activate(defaultLocale);
        isDefaultLocaleSet = true;
    }


    return(
        <html className={`${styles.html}`}>
        <body className={`body ${inter.className} ${styles.body}`}>
            <I18nProvider i18n={i18n}>
            <NoSSR>
                {/** The `NoSSR` custom element is present to avoid
                 * the SSR Tree Mismatch error because certain components
                 * such as `ThemeProvider` from `@primer/react` needs to be
                 * rendered client side and is therefore not included creating
                 * an SSR Tree mismatch error.
                 */}
                <GithubPrimerWrapper>
                    {children}
                </GithubPrimerWrapper>
            </NoSSR>
            </I18nProvider>
        </body>
        </html>
    )
}