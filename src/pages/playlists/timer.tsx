import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { ButtonBaseWithHover } from "../../components";
import TimerIcon from "@mui/icons-material/Timer";
import { FormattedMessage, useIntl } from "react-intl";
import { formatTimestamp } from "../../utils";
import {
  isTaskOverSignal,
  startTask as startTimerTask,
  stopTask as stopTimerTask,
} from "../../store/timer";

export default function Timer() {
  const intl = useIntl();

  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState<string | null>(null);
  const [now, setNow] = useState<Date>(new Date());
  const [totalTime, setTotalTime] = useState<number | null>(null);
  const timerStartAt = useMemo(() => {
    if (totalTime !== null) {
      return new Date();
    } else {
      return null;
    }
  }, [totalTime]);

  let remainingTime = "";
  if (totalTime !== null && timerStartAt !== null) {
    remainingTime = formatTimestamp(
      totalTime * 60 * 1000 + timerStartAt.getTime() - new Date().getTime(),
    ).join(":");
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setTimer(null);
    if (isTaskOverSignal.value) {
      setTotalTime(null);
    }
  }

  function startTimer() {
    if (timer) {
      const timerInt = parseInt(timer);
      const isInt = `${timerInt}` === timer;
      if (isInt) {
        setTotalTime(timerInt);
        setTimer(null);
        setOpen(false);
        startTimerTask(timerInt);
      } else {
        setTimer("");
      }
    }
    if (timer === null) setTimer("");
  }

  function stopTimer() {
    setTotalTime(null);
    setTimer(null);
    setOpen(false);
    stopTimerTask();
  }

  // Update view every one second
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (open) {
      timer = setTimeout(() => {
        const now = new Date();
        setNow(now);
      }, 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [now, open]);

  return (
    <>
      <ButtonBaseWithHover onClick={handleOpen}>
        <TimerIcon fontSize="small" />
      </ButtonBaseWithHover>
      <Dialog
        open={open}
        onClose={handleClose}
        transitionDuration={{
          exit: 300,
        }}
      >
        <DialogTitle>
          <FormattedMessage defaultMessage="Timer" id="timer" />
        </DialogTitle>
        <DialogContent>
          {totalTime === null ? (
            <></>
          ) : (
            <>
              <Box>
                <FormattedMessage
                  defaultMessage="Total time is {totalTime} minutes."
                  id="timer_total_time"
                  values={{
                    totalTime,
                  }}
                />
              </Box>
              <Box>
                <FormattedMessage
                  defaultMessage="The remaining time is {remainingTime}."
                  id="timer_remaining_time"
                  values={{
                    remainingTime,
                  }}
                />
              </Box>
            </>
          )}
          <TextField
            value={timer ?? ""}
            error={timer === ""}
            placeholder={intl.formatMessage({
              defaultMessage: "Type total time in minutes",
              id: "timer_placeholder",
            })}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            onChange={(e) => {
              setTimer(e.target.value);
            }}
            helperText={intl.formatMessage({
              defaultMessage: "please type integer greater than 0",
              id: "timer_helpertext",
            })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={stopTimer}>
            <FormattedMessage defaultMessage="stop timer" id="stop_timer" />
          </Button>
          <Button variant="contained" onClick={startTimer}>
            <FormattedMessage defaultMessage="start timer" id="start_timer" />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
