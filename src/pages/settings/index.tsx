import { Box, Link } from "@mui/material";
import Locale from "./locale";
import Theme from "./theme";
import Font from "./font";
import Base from "./base";
import { FormattedMessage, useIntl } from "react-intl";

export default function Settings () {
  const intl = useIntl();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      <Theme />
      <Locale />
      <Font />
      <Base
        heading={
          intl.formatMessage({
            defaultMessage: 'Repository of the source code',
            id: 'source_code'
          })
        }
        subHeading={(<Link href="https://github.com/familyboat/notes">
          <FormattedMessage
            defaultMessage='Github Repository'
            id="github_repository"
          />
          </Link>)}
      />
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
    </Box>
  )
}
