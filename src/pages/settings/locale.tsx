import { useContext } from "react";
import { localeContext, localeMap } from "../../provider";
import { Autocomplete, TextField } from "@mui/material";
import { useIntl } from "react-intl";
import Base from "./base";
import { SupportedLocales, setLocaleInLocal } from "../../db";

export default function Locale() {
  const localeMode = useContext(localeContext);
  const intl = useIntl();

  return (
    <>
      <Base
        heading={intl.formatMessage({
          defaultMessage: "locale",
          id: "locale",
        })}
        subHeading={
          localeMode.locale === "enUS"
            ? intl.formatMessage({
                defaultMessage: "English",
                id: "locale_en",
              })
            : intl.formatMessage({
                defaultMessage: "简体中文",
                id: "locale_zh",
              })
        }
      >
        <Autocomplete
          options={Object.keys(localeMap)}
          getOptionLabel={(key) => localeMap[key]}
          value={localeMode.locale}
          disableClearable
          onChange={(_, newLocale) => {
            localeMode.toggleLocale();
            setLocaleInLocal(newLocale as SupportedLocales);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={intl.formatMessage({
                id: "locale",
                defaultMessage: "locale",
              })}
              fullWidth
            />
          )}
          sx={{
            inlineSize: "8rem",
          }}
          size="small"
        />
      </Base>
    </>
  );
}
