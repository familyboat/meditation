import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
    <>
      <FormattedMessage
        defaultMessage={
          `Hey, Welcome to our world! This app is about notes.`
        }
        id="home_introduction"
      />
    </>
  )
}