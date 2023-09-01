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

// font size
const fontsizeKey = 'fontsize';
export function setFontsize(newFontsize: string) {
  localStorage.setItem(fontsizeKey, newFontsize);
}
export function getFontsize() {
  return localStorage.getItem(fontsizeKey);
}

function updateCountOfVisit(key: string) {
  const oldCount = parseInt(getCountOfVisit(key) || '0');
  localStorage.setItem(key, (oldCount + 1).toString());
}
function getCountOfVisit(key: string) {
  return localStorage.getItem(key);
}

// determine whether the visitor views the app for the first time
const countOfVisitApp = 'countOfVisitApp';
export function updateCountOfVisitApp() {
  updateCountOfVisit(countOfVisitApp)
}
export function getCountOfVisitApp() {
  return getCountOfVisit(countOfVisitApp);
}

// determine whether the visitor has viewd the Notes page
const countOfVisitNotes = 'countOfVisitNotes';
export function updateCountOfVisitNotes() {
  updateCountOfVisit(countOfVisitNotes);
}
export function getCountOfVisitNotes() {
  return getCountOfVisit(countOfVisitNotes)
}