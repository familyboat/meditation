import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "@mui/material";
import Base from "./base";

export default function Contact () {
  const  intl = useIntl();
  return (
    <>
      <Base
        heading={
          intl.formatMessage({
            defaultMessage: 'Contact author via email',
            id: 'contact_email'
          })
        }
        subHeading={(<Link href='mailto:familyboat@163.com'>
          <FormattedMessage
            defaultMessage='familyboat'
            id="author_name"
          />
        </Link>)}
      />
    </>
  )
}