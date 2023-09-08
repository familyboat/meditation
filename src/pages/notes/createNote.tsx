import { Box, Button, TextField } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import {
  NoteResourceProps,
  createNoteInDb,
  getNoteInDb,
  modifyNoteInDb,
} from "../../db";
import { FormattedMessage, useIntl } from "react-intl";
import { ErrorPath, NotesPath } from "../../constant";
import { useNavigate } from "../../hook";

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
        const newNote: Omit<NoteResourceProps, "id"> = {
          title,
          content,
          created_at: now,
          modified_at: now,
          versions: [],
        };
        await createNoteInDb(newNote);
      } else {
        const {
          title: oldTitle,
          content: oldContent,
          versions = [],
          ...oldNote
        } = await getNoteInDb(noteId);
        versions.push({
          title: oldTitle,
          content: oldContent,
          modified_at: now,
        });

        await modifyNoteInDb({
          ...oldNote,
          title,
          content,
          modified_at: now,
          versions,
        });
      }
      back();
    }
    if (title === null) setTitle("");
    if (content === null) setContent("");
  };

  const back = useCallback(() => {
    navigate(NotesPath);
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
          <FormattedMessage defaultMessage="Add" id="add" />
        </Button>
      </Box>
      <Box
        sx={{
          flex: "1 1 0",
          overflow: "hidden auto",
        }}
      >
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
    </>
  );
}
