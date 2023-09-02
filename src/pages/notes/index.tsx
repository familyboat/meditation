import { useEffect, useState } from "react";
import AddNoteButton from "./addNoteButton";
import {
  deleteNote,
  getAllNotes,
  getVisitedNotesPage,
  NoteProps,
  turnOnVisitedNotesPage,
} from "../../db";
import { NoteListItem } from "./noteListItem";
import { FormattedMessage, useIntl } from "react-intl";
import { Box } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@emotion/react";
import { NavLink } from "react-router-dom";
import { NotesPath } from "../../constant";

export default function Notes() {
  const [allNotes, setAllNotes] = useState<NoteProps[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useTheme();
  const themeMode = theme.palette.mode;
  const intl = useIntl();
  async function fetchNotes() {
    const allNotes = (await getAllNotes()).reverse();
    setAllNotes(allNotes);
  }
  async function onDeleteNote(note: NoteProps) {
    await deleteNote(note);
    await fetchNotes();
  }

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
    }
    fetchNotes();
    return () => {
      if (getVisitedNotesPage() === "0") turnOnVisitedNotesPage();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <NavLink to={`${NotesPath}/${note.id}`}
            style={{
              textDecoration: 'none'
            }}
            key={note.created_at.getTime()}
          >
            <NoteListItem
              onDeleteNote={onDeleteNote}
              note={note}
            />
          </NavLink>
        ))}
      </Box>
      <AddNoteButton
      />
      <ToastContainer theme={themeMode} />
    </>
  );
}
