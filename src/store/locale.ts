import { signal } from "@preact/signals-react";
import { SupportedLocales, getLocaleInLocal } from "../db";
import { getLocaleByTimezone } from "../utils";

const preferedLocale = getLocaleInLocal();

export const localeSignal = signal<SupportedLocales>(
  preferedLocale || getLocaleByTimezone(),
);
