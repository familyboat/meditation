import { ButtonGroup, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import HistoryIcon from "@mui/icons-material/History";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useNavigate } from "../../hook";
import { NotesPath } from "../../constant";
import { NoteResourceProps } from "../../db";
import { useIntl } from "react-intl";
import { useState } from "react";
import { toast } from "react-toastify";
import { addToPlaylist, formatNote, stop } from "../../store";

export default function Actions({
  note,
  onDeleteNote,
}: {
  note: NoteResourceProps;
  onDeleteNote?: (note: NoteResourceProps) => void;
}) {
  const navigate = useNavigate();
  const { title, content, id } = note;
  const intl = useIntl();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const shareData = {
    title: title,
    text: content,
  };

  function goHistory() {
    navigate(`${NotesPath}/${id}/history`);
  }

  async function share() {
    try {
      await navigator.share(shareData);
    } catch (e) {
      alert(e);
    }
  }

  function speak() {
    const word = formatNote(note);
    const utterance = new SpeechSynthesisUtterance(word);

    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
      stop();
    }
    toast.success(
      intl.formatMessage({
        defaultMessage: "Speaking immediately",
        id: "speaking_tip_part_two",
      }),
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 500,
      },
    );

    speechSynthesis.speak(utterance);

    utterance.onstart = () => {
      setIsSpeaking(true);
    };
    utterance.onend = () => {
      setIsSpeaking(false);
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
    };
  }

  function add() {
    addToPlaylist(note);
    toast.info(
      intl.formatMessage({
        defaultMessage: "Add to playlist",
        id: "speaking_tip_part_one",
      }),
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 500,
      },
    );
  }

  return (
    <>
      <ButtonGroup
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <IconButton onClick={goHistory}>
          <HistoryIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={() => onDeleteNote!(note)}>
          <DeleteForeverIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={share}>
          <ShareIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={speak}
          disabled={isSpeaking}
          sx={
            isSpeaking
              ? {
                  animation: "speak .5s ease-in .2s infinite alternate",
                  "@keyframes speak": {
                    from: {
                      color: "inherit",
                      scale: "1",
                    },
                    to: {
                      color: "primary.main",
                      scale: "1.2",
                    },
                  },
                }
              : {}
          }
        >
          <KeyboardVoiceIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={add}>
          <PlaylistAddIcon fontSize="small" />
        </IconButton>
      </ButtonGroup>
    </>
  );
}
