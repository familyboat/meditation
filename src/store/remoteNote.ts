import { signal } from "@preact/signals-react";
import { NoteResourceProps } from "../db";

export const remoteNotesSignal = signal<NoteResourceProps[]>([]);
