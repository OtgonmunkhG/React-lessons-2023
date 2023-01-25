import { Button } from "@mui/material";

export default function TimerActionButton({
  timerIsRunning,
  handleChange,
  handleClick,
  onStartClick,
  onStopClick,
}) {
  return (
    <div>
      {timerIsRunning ? (
        <Button
          color={"error"}
          fullWidth={true}
          variant={"outlined"}
          onClick={(onStopClick, handleClick)}
        >
          Stop
        </Button>
      ) : (
        <Button
          color={"success"}
          fullWidth={true}
          variant={"outlined"}
          onClick={(onStartClick, handleChange)}
        >
          Start
        </Button>
      )}
    </div>
  );
}
