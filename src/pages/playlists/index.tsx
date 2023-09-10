import { Autocomplete, Box, IconButton, Paper, TextField } from "@mui/material";
import {
  SpeakingModeProps,
  isSpeakingSignal,
  next,
  playlistSignal,
  previous,
  speakingModeList,
  speakingModeSignal,
} from "../../store";
import Note from "../notes/note";
import { FormattedMessage, useIntl } from "react-intl";
import Play from "./play";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Timer from "./timer";

export default function Playlists() {
  const playlist = playlistSignal.value;
  const disabled = playlist.length === 0 ? true : false;

  const intl = useIntl();

  return (
    <Box>
      <Box
        sx={{
          fontSize: "1.5rem",
          display: "flex",
          alignItems: "center",
          padding: "0.5rem 0",
        }}
      >
        <Box>
          <FormattedMessage defaultMessage="Playlists" id="playlists" />
        </Box>
        <IconButton onClick={previous} disabled={disabled}>
          <SkipPreviousIcon fontSize="small" />
        </IconButton>
        <Play isSpeaking={isSpeakingSignal.value} disabled={disabled} />
        <IconButton onClick={next} disabled={disabled}>
          <SkipNextIcon fontSize="small" />
        </IconButton>
        <Autocomplete
          disableClearable
          size="small"
          sx={{
            inlineSize: "8rem",
          }}
          value={speakingModeSignal.value}
          onChange={(_, value) => {
            speakingModeSignal.value = value as SpeakingModeProps;
          }}
          options={Object.keys(speakingModeList) as SpeakingModeProps[]}
          getOptionLabel={(option: SpeakingModeProps) => {
            return speakingModeList[option][intl.locale];
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              label={intl.formatMessage({
                defaultMessage: "mode",
                id: "speaking_mode",
              })}
            />
          )}
        />
        <Timer />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {disabled ? (
          <Box>
            <FormattedMessage
              defaultMessage="No notes!"
              id="playlist_no_notes"
            />
          </Box>
        ) : (
          playlist.map((note, index) => (
            <Paper
              sx={{
                padding: "0.5rem",
              }}
              key={index}
            >
              <Note note={note} />
            </Paper>
          ))
        )}
      </Box>
    </Box>
  );
}
