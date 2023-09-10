export function getLocaleByTimezone() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return offset === -480 ? "zhCN" : "enUS";
}

const rootElement = document.documentElement;

export function modifyRem(newRem: string) {
  rootElement.style.fontSize = newRem;
}

export function getRem() {
  return getComputedStyle(rootElement).fontSize;
}

export function incrementByOne(oldValue: string | number) {
  if (Number.isInteger(oldValue)) return (oldValue as number) + 1;
  if (typeof oldValue === "string") {
    const oldValueInt = parseInt(oldValue);
    return oldValueInt + 1;
  }
  throw Error(`Can not increment ${oldValue}`);
}

export async function deley(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export function throttle(fn: (...args: Array<unknown>) => void, wait: number) {
  let shouldWait = false;
  return function (...args: Array<unknown>) {
    if (!shouldWait) {
      fn(args);
      shouldWait = true;
      setTimeout(() => (shouldWait = false), wait);
    }
  };
}

export function debounce(fn: (...args: Array<unknown>) => void, wait: number) {
  let timeout: number;
  return function (...args: Array<unknown>) {
    const later = () => {
      clearTimeout(timeout);
      fn(...args);
    };
    clearTimeout(timeout);
    setTimeout(later, wait);
  };
}

export function formatTimestamp(timestamp: number): [number, number, number] {
  if (timestamp < 0) return [0, 0, 0];
  const totalSeconds = Math.floor(timestamp / 1000);
  const s = totalSeconds % 60;
  const totalMinutes = (totalSeconds - s) / 60;
  const m = totalMinutes % 60;
  const h = (totalMinutes - m) / 60;
  return [h, m, s];
}
