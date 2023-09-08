import { ButtonGroup, ButtonBase, styled } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import HistoryIcon from "@mui/icons-material/History";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useNavigate } from "../../hook";
import { NotesPath } from "../../constant";
import { NoteResourceProps } from "../../db";
import { useIntl } from "react-intl";
import { useState } from "react";
import { toast } from "react-toastify";

const MyButton = styled(ButtonBase)(({ theme }) => ({
  "@media (hover: hover)": {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function Actions({
  note,
  onDeleteNote,
}: {
  note: NoteResourceProps;
  onDeleteNote?: (note: NoteResourceProps) => void;
}) {
  const navigate = useNavigate();
  const { title, content, created_at, modified_at, id } = note;
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
    const word = `${intl.formatMessage({
      defaultMessage: "The title is",
      id: "speak_one_part",
    })} ${title} ${intl.formatMessage({
      defaultMessage: "; The content is",
      id: "speak_two_part",
    })} ${content} ${intl.formatMessage({
      defaultMessage: "; This note created at",
      id: "speak_three_part",
    })} ${created_at.toLocaleString()} ${intl.formatMessage({
      defaultMessage: "; The last modified time is",
      id: "speak_four_part",
    })} ${modified_at.toLocaleString()}`;
    const utterance = new SpeechSynthesisUtterance(word);

    if (speechSynthesis.speaking) {
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
    } else {
      toast.success(
        intl.formatMessage({
          defaultMessage: "Speaking immediately",
          id: "speaking_tip_part_two",
        }),
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 500
        },
      );
    }

    speechSynthesis.speak(utterance);

    utterance.onstart = () => {
      setIsSpeaking(true);
    };
    utterance.onend = () => {
      setIsSpeaking(false);
    };
  }

  return (
    <>
      <ButtonGroup
        sx={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <MyButton onClick={goHistory}>
          <HistoryIcon fontSize="small" />
        </MyButton>
        <MyButton onClick={() => onDeleteNote!(note)}>
          <DeleteForeverIcon fontSize="small" />
        </MyButton>
        <MyButton onClick={share}>
          <ShareIcon fontSize="small" />
        </MyButton>
        <MyButton
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
        </MyButton>
      </ButtonGroup>
    </>
  );
}
