import * as locales from "@mui/material/locale";
export { locales };
export type SupportedLocales = keyof typeof locales;

export const keyOfLocale = "locale";
export function setLocaleInLocal(locale: SupportedLocales) {
  localStorage.setItem(keyOfLocale, locale);
}
export function getLocaleInLocal(): SupportedLocales | null {
  return localStorage.getItem(keyOfLocale) as SupportedLocales | null;
}
