import { Box } from "@mui/material";
import { purple } from "@mui/material/colors";
import { NoteResourceProps } from "../../db";

export default function Note({ note }: { note: NoteResourceProps }) {
  const { title, content, created_at, modified_at } = note;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          fontSize: "0.8rem",
        }}
      >
        <Box
          sx={{
            flex: "1 1 0",
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
          {(created_at || modified_at).toLocaleString()}
        </Box>
      </Box>

      <Box
        sx={{
          overflowWrap: "anywhere",
        }}
      >
        {content}
      </Box>
    </>
  );
}
