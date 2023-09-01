import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Notes from "./pages/notes"
import Layout from "./layout";
import { HomePath, NotesPath, SettingsPath } from "./constant";
import Settings from "./pages/settings";
import ErrorPage from "./layout/error";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: HomePath,
        Component: Home,
      },
      {
        path: NotesPath,
        Component: Notes
      },
      {
        path: SettingsPath,
        Component: Settings,
      },
      {
        path: '*',
        Component: ErrorPage,
      }
    ]
  }
])