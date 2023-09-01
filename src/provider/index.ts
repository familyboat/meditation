import { createContext } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const localeContext = createContext({toggleLocale: () => {}, locale: 'enUS'});
export const localeMap: Record<string, string> = {
  'enUS': 'English',
  'zhCN': '简体中文',
}
