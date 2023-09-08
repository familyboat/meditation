import { incrementByOne } from "../utils";

// determine whether the visitor views the app for the first time
export const countOfVisitApp = "countOfVisitApp";
export function updateCountOfVisitApp() {
  const oldCount = getCountOfVisitApp();
  const newCount = incrementByOne(oldCount).toString();
  localStorage.setItem(countOfVisitApp, newCount);
}
export function getCountOfVisitApp() {
  return localStorage.getItem(countOfVisitApp) || "0";
}

// determine whether the visitor has viewd the Notes page or Home page

export const visitedHomePage = "visitedHomePage";
export const visitedNotesPage = "visitedNotesPage";
function getVisited(page: string) {
  return localStorage.getItem(page) || "0";
}
export function getVisitedHomePage() {
  return getVisited(visitedHomePage);
}
export function getVisitedNotesPage() {
  return getVisited(visitedNotesPage);
}
function turnOnVisited(page: string) {
  localStorage.setItem(page, "1");
}
export function turnOnVisitedHomePage() {
  turnOnVisited(visitedHomePage);
}
export function turnOnVisitedNotesPage() {
  turnOnVisited(visitedNotesPage);
}
