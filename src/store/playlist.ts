import { signal } from "@preact/signals-react";
import { NoteResourceProps } from "../db";
import { createIntl, createIntlCache } from "react-intl";
import * as zh from "../../compiled-lang/zh.json";
import * as en from "../../compiled-lang/en.json";
import { localeSignal } from ".";

export type SpeakingModeProps = "loop" | "single" | "random";
export const speakingModeList: Record<
  SpeakingModeProps,
  Record<string, string>
> = {
  loop: {
    en: "loop",
    zh: "循环播放",
  },
  single: {
    en: "single",
    zh: "单曲循环",
  },
  random: {
    en: "random",
    zh: "随机播放",
  },
};

export const playlistSignal = signal<NoteResourceProps[]>([]);
export const isSpeakingSignal = signal(false);
const currentSpeakingNoteIndexSignal = signal<number | null>(null);
export const speakingModeSignal = signal<SpeakingModeProps>("loop");

type DirectionProps = "previous" | "next";

function nextNoteIndex(direction: DirectionProps) {
  const playlist = playlistSignal.value;
  const playlistLength = playlist.length;
  if (playlistLength === 0) throw Error("No notes to speak!");

  const speakingMode = speakingModeSignal.value;
  const currentSpeakingNoteIndex = currentSpeakingNoteIndexSignal.value || 0;
  const ratio = direction === "next" ? 1 : -1;
  let maybeNextIndex;
  switch (speakingMode) {
    case "loop": {
      maybeNextIndex = currentSpeakingNoteIndex + 1 * ratio;
      if (maybeNextIndex >= playlistLength) maybeNextIndex = 0;
      if (maybeNextIndex < 0) maybeNextIndex = playlistLength - 1;
      break;
    }
    case "single":
      maybeNextIndex = currentSpeakingNoteIndex;
      break;
    case "random":
      maybeNextIndex = Math.floor(Math.random() * playlistLength);
      break;
  }
  currentSpeakingNoteIndexSignal.value = maybeNextIndex;
}

const cache = createIntlCache();

export function formatNote(note: NoteResourceProps) {
  const localePrefix = localeSignal.value.substring(0, 2);
  const intl = createIntl(
    {
      locale: localePrefix,
      messages: localePrefix === "en" ? en : zh,
    },
    cache,
  );

  const { title, content, created_at, modified_at } = note;
  return `${intl.formatMessage({
    defaultMessage: "The title is",
    id: "speak_one_part",
  })} ${title} ${intl.formatMessage({
    defaultMessage: "; The content is",
    id: "speak_two_part",
  })} ${content} ${intl.formatMessage({
    defaultMessage: "; This note created at",
    id: "speak_three_part",
  })} ${created_at.toLocaleString()} ${intl.formatMessage({
    defaultMessage: "; The last modified time is",
    id: "speak_four_part",
  })} ${modified_at.toLocaleString()}`;
}

function innerSpeak() {
  speechSynthesis.cancel();
  const playlist = playlistSignal.value;
  if (playlist.length === 0) return;
  const currentSpeakingNoteIndex = currentSpeakingNoteIndexSignal.value;
  if (currentSpeakingNoteIndex === null) return;
  const note = playlist[currentSpeakingNoteIndex];
  const utterance = new SpeechSynthesisUtterance(formatNote(note));
  speechSynthesis.speak(utterance);
  utterance.addEventListener("start", () => {
    // Speaking starts
    isSpeakingSignal.value = true;
  });
  utterance.addEventListener("end", () => {
    // Next note
    next();
  });
}

export function speak() {
  nextNoteIndex("next");
  innerSpeak();
}

export function stop() {
  speechSynthesis.cancel();
  isSpeakingSignal.value = false;
}

export function previous() {
  nextNoteIndex("previous");
  innerSpeak();
}

export function next() {
  nextNoteIndex("next");
  innerSpeak();
}

export function addToPlaylist(note: NoteResourceProps) {
  const playlist = playlistSignal.value;
  playlist.push(note);
  playlistSignal.value = playlist;
}
