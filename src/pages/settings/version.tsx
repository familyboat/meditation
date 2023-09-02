import { useIntl } from "react-intl";
import Base from "./base";

export default function Version () {
  const intl = useIntl();
  return (
    <>
      <Base
        heading={intl.formatMessage({
          defaultMessage: "current version",
          id: "current_version",
        })}
        subHeading='0.0.0'
      />
    </>
  );
}