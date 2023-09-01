import { useState, useEffect } from "react";
import AddNote from "./addNote";
import { NoteProps, getAllNotes } from "../../db";
import { Note } from "./note";
import { FormattedMessage } from "react-intl";
import {Box} from '@mui/material';

export default function Notes () {
  const [noteAdded, setNoteAdded] = useState(false);
  const [allNotes, setAllNotes] = useState<NoteProps[]>([]);

  useEffect(() => {
    async function fetchNotes () {
      const allNotes = await getAllNotes();
      setAllNotes(allNotes);
    }
    fetchNotes();
  }, [noteAdded])

  return (
    <>
      <Box
        sx={{
          fontSize: '2rem'
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
    </>
  )
}
