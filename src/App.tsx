import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./route";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { ColorModeContext, localeContext } from "./provider";
import { IntlProvider } from "react-intl";
import * as zh from "../compiled-lang/zh.json";
import * as en from "../compiled-lang/en.json";
import { getLocaleByTimezone, modifyRem } from "./utils";
import {
  clearStaleKeysInLocal,
  getFontsizeInLocal,
  getLocaleInLocal,
  getThemeInLocal,
  locales,
  SupportedLocales,
  ThemeResourceProps,
} from "./db";

// clear stale keys
clearStaleKeysInLocal();
// read preference from localstorage
const preferedRem = getFontsizeInLocal();
const preferedTheme = getThemeInLocal();
const preferedLocale = getLocaleInLocal();

preferedRem && modifyRem(preferedRem);

function App() {
  const [mode, setMode] = useState<ThemeResourceProps>(
    preferedTheme || "light",
  );
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
      createTheme(
        {
          palette: {
            mode,
          },
        },
        locales[locale],
      ),
    [mode, locale],
  );

  const toggleLocale = useCallback(() => {
    setLocale((prevMode) => (prevMode === "enUS" ? "zhCN" : "enUS"));
  }, []);
  const localeValue = useMemo(
    () => ({
      toggleLocale,
      locale,
    }),
    [locale, toggleLocale],
  );

  const localePrefix = locale.substring(0, 2);
  return (
    <>
      <localeContext.Provider value={localeValue}>
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
