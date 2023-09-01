export function getLocaleByTimezone() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return offset === -480 ? 'zhCN' : 'enUS';
}