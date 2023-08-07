import {i18n} from "@lingui/core";

export const locales = {
  en: "English",
  fr: "French"
};
// We initialize the default language to be english
export const defaultLocale = "en";

/**
 * We dynamically load the messages with the given locale
 * then we pass it through the `load` function of lingui
 * and `activate` the current locale.
 * @param locale The locale we want to load
 */
export async function dynamicLoadNActivateLocale(locale: string){
  const { messages } = await import(`@/locales/${locale}/messages`);

  i18n.load(locale, messages);
  i18n.activate(locale);

  console.log(`The current loaded locale is: ${i18n.locale}`);
}
