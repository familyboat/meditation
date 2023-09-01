import { Box } from "@mui/material";
import Locale from "./locale";
import Theme from "./theme";

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
    </Box>
  )
}