import { openDB } from "idb";
import { SupportedLocales } from "../App";

const dbName = 'app';
const tableName = 'notes'

export type NoteProps = {
  title: string,
  content: string,
  created_at: Date,
}

const notesDb = openDB(dbName, 1, {
  upgrade(db) {
    db.createObjectStore(tableName, {
      keyPath: 'id',
      autoIncrement: true,
    });
  }
});

export async function getAllNotes(): Promise<NoteProps[]> {
  return (await notesDb).getAll(tableName);
}

export async function setNote(val: NoteProps) {
  return (await notesDb).add(tableName, val)
}

// locale
const localeKey = 'locale'
export function setLocale(newLocale: string) {
  localStorage.setItem(localeKey, newLocale)
}

export function getLocale(): SupportedLocales {
  return localStorage.getItem(localeKey) as SupportedLocales;
}

// theme
export type ThemeProps = 'dark' | 'light'
const themeKey = 'theme'
export function setTheme(newTheme: ThemeProps) {
  localStorage.setItem(themeKey, newTheme);
}
export function getTheme(): ThemeProps {
  return localStorage.getItem(themeKey) as ThemeProps;
}