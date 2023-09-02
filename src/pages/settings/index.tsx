import { Box } from "@mui/material";
import Locale from "./locale";
import Theme from "./theme";
import Font from "./font";
import Share from "./share";
import Sourcecode from "./sourcecode";
import Contact from "./contact";
import Version from "./version";

export default function Settings () {
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
      <Version />
      <Sourcecode />
      <Contact />
      <Share />
    </Box>
  )
}
