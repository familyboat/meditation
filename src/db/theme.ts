export type ThemeResourceProps = "dark" | "light";
export const keyOfTheme = "theme";
export function setThemeInLocal(theme: ThemeResourceProps) {
  localStorage.setItem(keyOfTheme, theme);
}
export function getThemeInLocal(): ThemeResourceProps | null {
  return localStorage.getItem(keyOfTheme) as ThemeResourceProps | null;
}
