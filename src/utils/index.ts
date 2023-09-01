export function getLocaleByTimezone() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return offset === -480 ? 'zhCN' : 'enUS';
}

export function modifyRem(newRem: string) {
  document.documentElement.style.fontSize = newRem;
}

export function getRem() {
  return getComputedStyle(document.documentElement).fontSize
}