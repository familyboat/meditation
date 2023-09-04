import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Notes from "./pages/notes"
import Layout from "./layout";
import { HomePath, NotePath, NotesPath, SettingsPath } from "./constant";
import Settings from "./pages/settings";
import ErrorPage from "./layout/error";
import CreateNote from "./pages/notes/createNote";
import NavMenu from "./layout/navMenu";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        Component: NavMenu,
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
        ]
      },
      {
        path: NotePath,
        Component: CreateNote,
      },
      {
        path: '*',
        Component: ErrorPage,
      }
    ]
  }
])