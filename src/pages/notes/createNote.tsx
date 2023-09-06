import { Box, Button, TextField } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState, startTransition } from "react";
import { getNote as getNoteInDb, NoteProps, putNote, setNote } from "../../db";
import { FormattedMessage, useIntl } from "react-intl";
import { ErrorPath, NotesPath } from "../../constant";

export default function CreateNote() {
  const { recordId } = useParams();
  const navigate = useNavigate();
  const isCreating = recordId === "create";
  const noteId = parseInt(recordId as string);

  const [title, setTitle] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);

  const intl = useIntl();

  const handleSubmit = async () => {
    if (title && content) {
      const now = new Date();
      if (isCreating) {
        const newNote: Omit<NoteProps, "id"> = {
          title,
          content,
          "created_at": now,
          "modified_at": now,
        };
        await setNote(newNote);
      } else {
        const {title: oldTitle, content: oldContent, revisions = [], ...oldNote} = await getNoteInDb(noteId);
        revisions.push({
          title: oldTitle,
          content: oldContent,
          "modified_at": now
        })

        await putNote({
          ...oldNote,
          title,
          content,
          "modified_at": now,
          revisions
        });
      }
      back();
    }
    if (title === null) setTitle("");
    if (content === null) setContent("");
  };

  const back = useCallback(() => {
    startTransition(() => {
      navigate(NotesPath);
    })
  }, [navigate]);

  const fetchNote = useCallback(async () => {
    const note = await getNoteInDb(noteId);
    if (!note) navigate(ErrorPath);
    const { title, content } = note;
    setTitle(title);
    setContent(content);
  }, [navigate, noteId]);

  useEffect(() => {
    const hasNote = recordId === `${noteId}`;
    if (!hasNote && !isCreating) navigate(ErrorPath);
    if (hasNote) fetchNote();
  }, [fetchNote, isCreating, navigate, noteId, recordId]);

  return (
    <Box
      sx={{
        padding: '1rem 1rem 0',
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: 'sticky',
          top: 0,
          zIndex: 2,
          backgroundColor: '#fff',

        }}
      >
        <Button onClick={back}>
          <ArrowBackIosIcon />
        </Button>
        <Box
          sx={{
            flex: "1 1 0",
          }}
        >
          {isCreating
            ? intl.formatMessage({
              defaultMessage: "Create note",
              id: "create_note",
            })
            : intl.formatMessage({
              defaultMessage: "Edit note",
              id: "edit_note",
            })}
        </Box>
        <Button onClick={handleSubmit} variant="contained" size="small">
          <FormattedMessage
            defaultMessage="Add"
            id="add"
          />
        </Button>
      </Box>
      <Box>
        <TextField
          autoComplete="off"
          required
          margin="dense"
          id="title"
          label={intl.formatMessage({
            defaultMessage: "title",
            id: "add_note_title",
          })}
          error={title === ""}
          helperText={intl.formatMessage({
            defaultMessage: "Please enter the title of the note",
            id: "add_note_title_helper",
          })}
          type="text"
          value={title ?? ""}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          variant="standard"
        />
        <TextField
          required
          autoComplete="off"
          margin="dense"
          id="content"
          label={intl.formatMessage({
            defaultMessage: "content",
            id: "add_note_content",
          })}
          error={content === ""}
          helperText={intl.formatMessage({
            defaultMessage: "Please enter the content of the note",
            id: "add_note_content_helper",
          })}
          type="text"
          value={content ?? ""}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          multiline
          variant="standard"
        />
      </Box>
    </Box>
  );
}
