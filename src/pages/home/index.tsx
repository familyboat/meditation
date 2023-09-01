import { useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FormattedMessage, useIntl } from "react-intl";
import { getCountOfVisitApp, updateCountOfVisitApp } from "../../db";
import { useTheme } from "@emotion/react";

export default function Home() {
  const intl = useIntl();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useTheme();
  const themeMode = theme.palette.mode

  useEffect(() => {
    updateCountOfVisitApp();
    if (getCountOfVisitApp() === '1') {
      toast.info(intl.formatMessage({
        defaultMessage: 'Hello, there! This is your first time to visit our app. Feel free to browser.',
        id: 'first_time_tip'
      }), {
        position: toast.POSITION.TOP_CENTER
      });
    }
  })

  return (
    <>
      <FormattedMessage
        defaultMessage={
          `Hey, Welcome to our world! This app is about notes.`
        }
        id="home_introduction"
      />
      <ToastContainer theme={themeMode} />
    </>
  )
}

