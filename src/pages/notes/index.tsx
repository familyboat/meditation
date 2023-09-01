import { useState, useEffect } from "react";
import AddNote from "./addNote";
import { NoteProps, getAllNotes, getCountOfVisitNotes, updateCountOfVisitNotes } from "../../db";
import { Note } from "./note";
import { FormattedMessage, useIntl } from "react-intl";
import {Box} from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@emotion/react";

export default function Notes () {
  const [noteAdded, setNoteAdded] = useState(false);
  const [allNotes, setAllNotes] = useState<NoteProps[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useTheme();
  const themeMode = theme.palette.mode;
  const intl = useIntl();

  useEffect(() => {
    updateCountOfVisitNotes();
    async function fetchNotes () {
      const allNotes = await getAllNotes();
      setAllNotes(allNotes);
      if (getCountOfVisitNotes() === '1' && allNotes.length === 0) {
        toast.info(intl.formatMessage({
          defaultMessage: 'Oops! No notes yet. Click the Add button to create your first note.',
          id: 'first_note_tip'
        }), {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }
    fetchNotes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteAdded])

  return (
    <>
      <Box
        sx={{
          fontSize: '1.5rem'
        }}
      >
        <FormattedMessage
          defaultMessage="All notes"
          id="all_notes" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}
      >
        {
          allNotes.map(note => (<Note note={note} key={note.created_at.getTime()} />))
        }
      </Box>
      <AddNote onNoteAdded={setNoteAdded} />
      <ToastContainer theme={themeMode} />
    </>
  )
}
