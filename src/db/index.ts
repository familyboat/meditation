import { keyOfFontsize } from "./fontsize";
import { keyOfLocale } from "./locale";
import { keyOfTheme } from "./theme";
import { countOfVisitApp, visitedHomePage, visitedNotesPage } from "./visit";

export * from "./fontsize";
export * from "./locale";
export * from "./note";
export * from "./theme";
export * from "./visit";

const allKey = [
  keyOfLocale,
  keyOfTheme,
  keyOfFontsize,
  countOfVisitApp,
  visitedHomePage,
  visitedNotesPage,
];
export function clearStaleKeysInLocal() {
  for (let i = 0, len = localStorage.length; i < len; i++) {
    const key = localStorage.key(i);
    if (key && !allKey.includes(key)) {
      localStorage.removeItem(key);
    }
  }
}
