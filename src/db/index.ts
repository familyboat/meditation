import { openDB } from "idb";
import { SupportedLocales } from "../App";
import { incrementByOne } from "../utils";

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

// localstorage
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

// determine whether the visitor views the app for the first time
const countOfVisitApp = 'countOfVisitApp';
export function updateCountOfVisitApp() {
  const oldCount = getCountOfVisitApp();
  const newCount = incrementByOne(oldCount);
  localStorage.setItem(countOfVisitApp, newCount.toString());
}
export function getCountOfVisitApp() {
  return localStorage.getItem(countOfVisitApp) || 0;
}

// determine whether the visitor has viewd the Notes page or Home page

const visitedHomePage = 'visitedHomePage';
const visitedNotesPage = 'visitedNotesPage';
function getVisited(page: string) {
  return localStorage.getItem(page) || '0'
}
export function getVisitedHomePage() {
  return getVisited(visitedHomePage);
}
export function getVisitedNotesPage() {
  return getVisited(visitedNotesPage);
}
function turnOnVisited(page: string) {
  localStorage.setItem(page, '1');
}
export function turnOnVisitedHomePage() {
  turnOnVisited(visitedHomePage)
}
export function turnOnVisitedNotesPage() {
  turnOnVisited(visitedNotesPage)
}

const allKey = [localeKey, themeKey, fontsizeKey, countOfVisitApp, visitedHomePage, visitedNotesPage];
export function clearStaleKeys() {
  for (let i = 0, len = localStorage.length; i < len; i++) {
    const key = localStorage.key(i);
    if (key && !allKey.includes(key)) {
      localStorage.removeItem(key)
    }
  }
}