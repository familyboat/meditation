import { Box, Button, Paper } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorPath, NotesPath } from "../../constant";
import {
  NoteResourceProps,
  NoteVersionResourceProps,
  getNoteInDb,
} from "../../db";
import { useNavigate } from "../../hook";
import { FormattedMessage } from "react-intl";
import Note from "./note";

export default function HistoryNotes() {
  const { recordId } = useParams();
  const navigate = useNavigate();
  const noteId = parseInt(recordId as string);
  const [versions, setversions] = useState<NoteVersionResourceProps[]>([]);

  const back = useCallback(() => {
    navigate(NotesPath);
  }, [navigate]);

  const fetchNote = useCallback(async () => {
    const note = await getNoteInDb(noteId);
    if (!note) navigate(ErrorPath);
    const { versions = [] } = note;
    setversions(versions);
  }, [navigate, noteId]);

  useEffect(() => {
    const hasNote = recordId === `${noteId}`;
    if (!hasNote) navigate(ErrorPath);
    if (hasNote) fetchNote();
  }, [fetchNote, navigate, noteId, recordId]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button onClick={back}>
          <ArrowBackIosIcon />
        </Button>
        <Box>
          <FormattedMessage
            defaultMessage="history versions"
            id="note_history"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {versions.map((version) => (
          <Paper
            sx={{
              padding: "0.5rem",
            }}
          >
            <Note
              key={version.modified_at.getTime()}
              note={version as NoteResourceProps}
            />
          </Paper>
        ))}
      </Box>
    </>
  );
}
