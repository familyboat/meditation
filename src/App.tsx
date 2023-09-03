import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./route";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { ColorModeContext, localeContext } from "./provider";
import * as locales from "@mui/material/locale";
import { IntlProvider } from "react-intl";
import * as zh from "../compiled-lang/zh.json";
import * as en from "../compiled-lang/en.json";
import {
  clearStaleKeys,
  getFontsize,
  getLocale,
  getTheme,
  ThemeProps,
} from "./db";
import { getLocaleByTimezone, modifyRem } from "./utils";

export type SupportedLocales = keyof typeof locales;

// clear stale keys
clearStaleKeys();
// read preference from localstorage
const preferedRem = getFontsize();
const preferedTheme = getTheme();
const preferedLocale = getLocale();

preferedRem && modifyRem(preferedRem);

function App() {
  const [mode, setMode] = useState<ThemeProps>(preferedTheme || "light");
  const [locale, setLocale] = useState<SupportedLocales>(
    preferedLocale || getLocaleByTimezone(),
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }, locales[locale]),
    [mode, locale],
  );

  const toggleLocale = useCallback(
    () => {
      setLocale((prevMode) => (prevMode === "enUS" ? "zhCN" : "enUS"));
    },
    [],
  );

  const localePrefix = locale.substring(0, 2);
  return (
    <>
      <localeContext.Provider
        value={{
          toggleLocale,
          locale,
        }}
      >
        <IntlProvider
          messages={localePrefix === "en" ? en : zh}
          locale={localePrefix}
          defaultLocale="en"
        >
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <RouterProvider router={router} />
            </ThemeProvider>
          </ColorModeContext.Provider>
        </IntlProvider>
      </localeContext.Provider>
    </>
  );
}

export default App;
