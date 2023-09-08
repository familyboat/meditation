export const keyOfFontsize = "fontsize";
export function setFontsizeInLocal(fontsize: string) {
  localStorage.setItem(keyOfFontsize, fontsize);
}
export function getFontsizeInLocal() {
  return localStorage.getItem(keyOfFontsize);
}
