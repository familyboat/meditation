import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRef, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { NoteProps, setNote } from "../../db";

type AddNoteProps = {
  onNoteAdded: (added: boolean) => void
}

export default function AddNote({
  onNoteAdded
} : AddNoteProps) {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  const isDialogOpen = useRef(false);

  const [isSaving, setIsSaving] = useState(false);
  
  const [title, setTitle] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);

  const handleClickOpen = () => {
    isDialogOpen.current = true;
    setOpen(true);
  };

  const handleClose = () => {
    // reset state and ref
    setOpen(false);
    isDialogOpen.current = false;
    setTitle(null);
    setContent(null);
    setIsSaving(false);
  };

  const handleSubmit = async () => {
    if (title && content) {
      const note: NoteProps = {
        title,
        content,
        'created_at': new Date()
      }

      if (isDialogOpen.current) {
        setIsSaving(true);
        await setNote(note);
        onNoteAdded(true);
        handleClose();
      } else {
        console.log('cancel')
      }
    } 
    if (title === null) setTitle('');
    if (content === null) setContent('');
  }

  return (
    <>
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          right: "1rem",
          bottom: "4rem",
        }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <FormattedMessage
            defaultMessage='Add note'
            id="add_note"
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormattedMessage
              defaultMessage='To add a new note, fill in below form'
              id="add_note_tip"
            />
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            label={
              intl.formatMessage({
                defaultMessage: 'title',
                id: 'add_note_title'
              })
            }
            error={title === ''}
            helperText={
              intl.formatMessage({
                defaultMessage: 'Please enter the title of the note',
                id: 'add_note_title_helper'
              })
            }
            type="text"
            value={title ?? ''}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="content"
            label={
              intl.formatMessage({
                defaultMessage: 'content',
                id: 'add_note_content'
              })
            }
            error={content === ''}
            helperText={
              intl.formatMessage({
                defaultMessage: 'Please enter the content of the note',
                id: 'add_note_content_helper'
              })
            }
            type="text"
            value={content ?? ''}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <FormattedMessage
              defaultMessage="Cancel"
              id="cancel"
            />
          </Button>
          <Button onClick={handleSubmit} disabled={isSaving}>
            <FormattedMessage
              defaultMessage='Add'
              id="add"
            />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

