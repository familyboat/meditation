import { useTheme } from "@emotion/react";
import { Switch } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../provider";
import { useIntl } from "react-intl";
import Base from "./base";
import { setTheme } from "../../db";

export default function Theme() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useTheme();
  const themeMode = theme.palette.mode;
  const colorMode = useContext(ColorModeContext);
  const intl = useIntl();
  return (
    <Base
      heading={intl.formatMessage({
        defaultMessage: "dark mode",
        id: "dark_mode",
      })}
      subHeading={themeMode === "dark"
        ? intl.formatMessage({
          defaultMessage: "on",
          id: "dark_mode_on",
        })
        : intl.formatMessage({
          defaultMessage: "off",
          id: "dark_mode_off",
        })}
    >
      <Switch
        defaultChecked={themeMode === 'dark' ? true : false}
        onChange={(_, isDark) => {
          colorMode.toggleColorMode();
          setTheme(isDark ? 'dark' : 'light');
        }}
      />
    </Base>
  );
}
