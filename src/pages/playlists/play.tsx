import { ButtonBaseWithHover } from "../../components";
import { speak, stop } from "../../store";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import StopCircleIcon from "@mui/icons-material/StopCircle";

type PlayProps = {
  isSpeaking: boolean;
  disabled: boolean;
};

export default function Play({ isSpeaking, disabled }: PlayProps) {
  return (
    <>
      {isSpeaking ? (
        <ButtonBaseWithHover onClick={stop} disabled={disabled}>
          <StopCircleIcon fontSize="small" />
        </ButtonBaseWithHover>
      ) : (
        <ButtonBaseWithHover onClick={speak} disabled={disabled}>
          <PlayCircleOutlineIcon fontSize="small" />
        </ButtonBaseWithHover>
      )}
    </>
  );
}
