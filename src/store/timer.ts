import { signal } from "@preact/signals-react";
import { stop as stopSpeaking } from "./";

let timer: NodeJS.Timeout | null = null;
export const isTaskOverSignal = signal(false);

export function startTask(total: number) {
  isTaskOverSignal.value = false;
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
  isTaskOverSignal.value = true;
  timer = null;
}
