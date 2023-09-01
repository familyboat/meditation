import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './route'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useState, useMemo } from 'react'
import { ColorModeContext, localeContext } from './provider'
import * as locales from "@mui/material/locale";
import { IntlProvider } from 'react-intl'
import * as zh from '../compiled-lang/zh.json';
import * as en from '../compiled-lang/en.json';

type SupportedLocales = keyof typeof locales;

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [locale, setLocale] = useState<SupportedLocales>('enUS');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
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

  const toggleLocale = useMemo(
    () => () => {
        setLocale((prevMode) => (prevMode === 'enUS' ? 'zhCN' : 'enUS'))
      },
    []
  );
  return (
    <>
      <localeContext.Provider value={{
        toggleLocale,
        locale,
      }}>
        <IntlProvider messages={locale.substring(0, 2) === 'en' ? en : zh} locale={locale.substring(0, 2)} defaultLocale='en'>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <RouterProvider router={router} />
            </ThemeProvider>
          </ColorModeContext.Provider>
        </IntlProvider>
      </localeContext.Provider>
    </>
  )
}

export default App