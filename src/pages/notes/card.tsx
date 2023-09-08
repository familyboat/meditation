import { Box, Divider, Paper, styled } from "@mui/material";
import React from "react";
import { NoteResourceProps } from "../../db";
import { memo } from "react";
import { NotesPath } from "../../constant";
import Note from "./note";
import { useNavigate } from "../../hook";

const Div = styled("div")(() => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

const NoteCard = memo(function NoteCard({
  note,
  actions,
}: {
  note: NoteResourceProps;
  actions: React.ReactNode;
}) {
  const navigate = useNavigate();

  function goNote() {
    navigate(`${NotesPath}/${note.id}`);
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
          sx={{
            maxHeight: "4rem",
            overflow: "hidden",
          }}
        >
          <Note note={note} />
        </Div>

        <Divider />
        {actions}
      </Paper>
    </Box>
  );
});

export default NoteCard;
