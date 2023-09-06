import { useCallback, useEffect, useState } from "react";
import AddNoteButton from "./addNoteButton";
import {
  deleteNote,
  getAllNotes,
  getVisitedNotesPage,
  NoteProps,
  turnOnVisitedNotesPage,
} from "../../db";
import NoteCard from "./noteCard";
import { FormattedMessage, useIntl } from "react-intl";
import { Box } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@emotion/react";

export default function Notes() {
  const [allNotes, setAllNotes] = useState<NoteProps[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useTheme();
  const themeMode = theme.palette.mode;
  const intl = useIntl();

  const fetchNotes = useCallback(async () => {
    const notes = (await getAllNotes()).reverse();
    setAllNotes(notes);
  }, []);
  const onDeleteNote = useCallback(async (note: NoteProps) => {
    await deleteNote(note);
    await fetchNotes();
  }, [fetchNotes]);

  useEffect(() => {
    if (getVisitedNotesPage() === "0") {
      toast.info(
        intl.formatMessage({
          defaultMessage:
            "Oops! No notes yet. Click the Add button to create your first note.",
          id: "first_note_tip",
        }),
        {
          position: toast.POSITION.TOP_CENTER,
        },
      );
      turnOnVisitedNotesPage();
    }
    fetchNotes();
  }, [fetchNotes, intl]);

  return (
    <>
      <Box
        sx={{
          fontSize: "1.5rem",
        }}
      >
        <FormattedMessage
          defaultMessage="All notes"
          id="all_notes"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {allNotes.map((note) => (

            <NoteCard
              onDeleteNote={onDeleteNote}
              note={note}
              key={note.created_at.getTime()}
            />
          
        ))}
      </Box>
      <AddNoteButton />
      <ToastContainer theme={themeMode} />
    </>
  );
}
