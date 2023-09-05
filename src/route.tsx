import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout";
import { HomePath, NotePath, NotesPath, SettingsPath } from "./constant";
import NavMenu from "./layout/navMenu";
import { lazy } from "react";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        Component: NavMenu,
        children: [
          {
            path: HomePath,
            Component: lazy(() => import('./pages/home')),
          },
          {
            path: NotesPath,
            Component: lazy(() => import('./pages/notes'))
          },
          {
            path: SettingsPath,
            Component: lazy(() => import('./pages/settings')),
          },
        ]
      },
      {
        path: NotePath,
        Component: lazy(() => import('./pages/notes/createNote')),
      },
      {
        path: '*',
        Component: lazy(() => import('./layout/error')),
      }
    ]
  }
])