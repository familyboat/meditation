import { Box, Button, TextField } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
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
      if (isCreating) {
        const newNote: Omit<NoteProps, "id"> = {
          title,
          content,
          "created_at": new Date(),
        };
        await setNote(newNote);
      } else {
        const oldNote = await getNoteInDb(noteId);
        await putNote({
          ...oldNote,
          title,
          content,
        });
      }
      back();
    }
    if (title === null) setTitle('');
    if (content === null) setContent('');
  };

  const back = useCallback(() => {
    navigate(NotesPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNote = useCallback(async () => {
    const note = await getNoteInDb(noteId);
    if (!note) navigate(ErrorPath);
    const { title, content } = note;
    setTitle(title);
    setContent(content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const hasNote = recordId === `${noteId}`;
    if (!hasNote && !isCreating) navigate(ErrorPath);
    if (hasNote) fetchNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Button onClick={back}>
            <ArrowBackIosIcon />
          </Button>
          <Box>
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
          <Button onClick={handleSubmit} variant="contained" size="small">
            <FormattedMessage
              defaultMessage="Add"
              id="add"
            />
          </Button>
        </Box>
      </Box>
    </>
  );
}