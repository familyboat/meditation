import { signal } from "@preact/signals-react";
import { stop as stopSpeaking } from "./";

let timer: NodeJS.Timeout | null = null;
export const totalTimeSignal = signal<number | null>(null);
export const timerStartAtSignal = signal<Date | null>(null);

export function startTask(total: number) {
  totalTimeSignal.value = total;
  timerStartAtSignal.value = new Date();
  if (timer) clearTimeout(timer);
  timer = setTimeout(
    () => {
      stopTask();
      stopSpeaking();
    },
    total * 60 * 1000,
  );
}

export function stopTask() {
  if (timer) clearTimeout(timer);
  totalTimeSignal.value = null;
  timerStartAtSignal.value = null;
  timer = null;
}
