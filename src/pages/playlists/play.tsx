import { speak, stop } from "../../store";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { IconButton } from "@mui/material";

type PlayProps = {
  isSpeaking: boolean;
  disabled: boolean;
};

export default function Play({ isSpeaking, disabled }: PlayProps) {
  return (
    <>
      {isSpeaking ? (
        <IconButton onClick={stop} disabled={disabled}>
          <StopCircleIcon fontSize="small" />
        </IconButton>
      ) : (
        <IconButton onClick={speak} disabled={disabled}>
          <PlayCircleOutlineIcon fontSize="small" />
        </IconButton>
      )}
    </>
  );
}
