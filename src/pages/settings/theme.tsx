import { useTheme } from "@emotion/react";
import { Switch } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../provider";
import { useIntl } from "react-intl";
import Base from "./base";

export default function Theme() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useTheme();
  const colorMode = useContext(ColorModeContext);
  const intl = useIntl();
  return (
    <Base
    heading={
      intl.formatMessage({
        defaultMessage:"dark mode",
        id:"dark_mode"
      })
    }
    subHeading={
      theme.palette.mode === "dark" ?
      intl.formatMessage({
        defaultMessage:"on",
        id:"dark_mode_on"
      }) :
      intl.formatMessage({
        defaultMessage:"off",
        id:"dark_mode_off"
      })
    }
    >
    <Switch onChange={colorMode.toggleColorMode} />
    </Base>
  );
}
