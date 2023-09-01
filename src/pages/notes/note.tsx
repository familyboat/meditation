import { Box, Paper } from "@mui/material";
import { NoteProps } from "../../db";
import { purple } from "@mui/material/colors";

export function Note({
  note,
}: { note: NoteProps }) {
  const { title, content, created_at } = note;
  return (
    <Paper
      sx={{
        padding: '0.5rem'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          fontSize: '0.8rem'
        }}
      >
        <Box
          sx={{
            flex: '1 1 0',
            color: purple[400],
          }}
        >
          {title}
        </Box>
        <Box
          sx={{
            fontWeight: 300,
          }}
        >
          {created_at.toLocaleString()}
        </Box>
      </Box>

      <Box
        sx={{
          overflowWrap: 'anywhere',
        }}
      >
        {content}
      </Box>
    </Paper>
  );
}
