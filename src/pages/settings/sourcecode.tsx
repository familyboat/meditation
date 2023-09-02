import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "@mui/material";
import Base from "./base";

export default function Sourcecode() {
  const intl = useIntl();
  return (
    <>
      <Base
        heading={intl.formatMessage({
          defaultMessage: "Repository of the source code",
          id: "source_code",
        })}
        subHeading={
          <Link href="https://github.com/familyboat/notes">
            <FormattedMessage
              defaultMessage="Github Repository"
              id="github_repository"
            />
          </Link>
        }
      />
    </>
  );
}
