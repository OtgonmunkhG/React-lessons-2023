import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import TimerActionButton from "./TimerActionButton";
import { useEffect, useState } from "react";
import { renderElapsedString } from "./Helpers";

export default function Timer({ title, project, elapsed, runningSince }) {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [timerIsPause, setTimerIsPause] = useState(true);

  const [timer, setTime] = renderElapsedString(elapsed, runningSince);

  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  useEffect(() => {
    let intervalId = null;
    if (timerIsRunning && timerIsPause === false) {
      intervalId = setInterval(() => {
        setNow((now) => now + 1000);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [timerIsRunning, timerIsPause]);

  const handleChange = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    setTimerIsPause(false);
  };
  const handleClick = () => {
    setTimerIsPause(!timerIsPause);
  };
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          maxWidth: 345,
          margin: "0 auto",
          marginBottom: 5,
        }}
      >
        <Typography sx={{ fontSize: 28 }} color="text.secondary">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.4 }} color="text.secondary">
          {project}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{secondsPassed}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{timer}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <DeleteIcon />
          <AutoFixHighIcon />
        </Box>
        <TimerActionButton
          timerIsRunning={timerIsRunning}
          timerIsPause={timerIsPause}
          onStartClick={() => {
            setTimerIsRunning((timerIsRunning = true));
          }}
          onStopClick={() => {
            setTimerIsRunning((timerIsRunning = false));
            handleClick = { handleClick };
            handleChange = { handleChange };
          }}
        />
      </Card>
    </Container>
  );
}
