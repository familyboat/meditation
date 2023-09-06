import { Box, ButtonBase, ButtonGroup, Divider, Paper, styled } from "@mui/material";
import { NoteProps } from "../../db";
import { memo, startTransition } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import HistoryIcon from "@mui/icons-material/History";
import { useNavigate } from "react-router-dom";
import { NotesPath } from "../../constant";
import Note from "./note";

const Div = styled('div')(() => ({
  '&:hover': {
    cursor: 'pointer'
  }
}))

const NoteCard = memo(function NoteCard({
  note,
  onDeleteNote,
}: { note: NoteProps; onDeleteNote?: (note: NoteProps) => void }) {
  
  const navigate = useNavigate();

  function goNote() {
    startTransition(() => {
      navigate(`${NotesPath}/${note.id}`);
    });
  }

  function goHistory() {
    startTransition(() => {
      navigate(`${NotesPath}/${note.id}/history`);
    });
  }

  return (
    <Box
      sx={{
        padding: "0.5rem",
      }}
    >
      <Paper
        sx={{
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Div
          onClick={goNote}
        >
          <Note
            note={note}
          />
        </Div>

        <Divider />
        <ButtonGroup
          sx={{
            display: "flex",
          }}
        >
          <ButtonBase
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
            onClick={goHistory}
          >
            <HistoryIcon fontSize="small" />
          </ButtonBase>
          <ButtonBase
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
            onClick={() => onDeleteNote!(note)}
          >
            <DeleteForeverIcon fontSize="small" />
          </ButtonBase>
        </ButtonGroup>
      </Paper>
    </Box>
  );
});

export default NoteCard;
