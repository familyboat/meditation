import { FormattedMessage, useIntl } from "react-intl";
import Base from "./base";
import { Button } from "@mui/material";

export default function Share() {
  const intl = useIntl();

  const shareData = {
    title: intl.formatMessage({
      defaultMessage: 'notes',
      id: 'notes',
    }),
    text: intl.formatMessage({
      defaultMessage: 'This app will be your favorite one',
      id: 'share_text',
    }),
    url: 'https://familyboat.github.io/notes'
  }

  return (
    <>
      <Base
        heading={
          intl.formatMessage({
            defaultMessage: 'Share with your friends',
            id: 'share_heading'
          })
        }
        subHeading={(<Button onClick={async () => {
          try {

            await navigator.share(shareData);
          } catch (e) {alert(e)}
        }}>
          <FormattedMessage
            defaultMessage='share'
            id="share_button"
          />
        </Button>)}
      />
    </>
  )
}