import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { startTransition, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorPath, NotesPath } from "../../constant";
import { NoteProps, RevisionsProps, getNote } from "../../db";
import Note from "./note";

export default function HistoryNotes () {
  const { recordId } = useParams();
  const navigate = useNavigate();
  const noteId = parseInt(recordId as string);
  const [revisions, setRevisions] = useState<RevisionsProps>([]);

  const back = useCallback(() => {
    startTransition(() => {
      navigate(NotesPath);
    })
  }, [navigate]);

  const fetchNote = useCallback(async () => {
    const note = await getNote(noteId);
    if (!note) navigate(ErrorPath);
    const {revisions = []} = note;
    setRevisions(revisions)
  }, [navigate, noteId]);

  useEffect(() => {
    const hasNote = recordId === `${noteId}`;
    if (!hasNote) navigate(ErrorPath)
    if (hasNote) fetchNote();
  }, [fetchNote, navigate, noteId, recordId]);

  return (
    <>
    <Box
      sx={{
        padding: '1rem 1rem 0',
      }}
    >
      <Box>
      <Button onClick={back}>
          <ArrowBackIosIcon />
        </Button>
      </Box>
      <Box>
      {
        revisions.map((revision) => {
          return (
            <Note
              note={revision as NoteProps}
            />
          )
        })
      }
      </Box>
    </Box>
    </>
  )
}
