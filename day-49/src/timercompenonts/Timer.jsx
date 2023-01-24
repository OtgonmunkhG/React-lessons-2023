import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import TimerActionButton from "./TimerActionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";

export default function Timer({
  title,
  project,
  elapsed,
  runningSince,
  //   runningTime,
}) {
  const timer = renderElapsedString(elapsed, runningSince);
  //   const [timerIsRunning, setTimerIsRunning] = useState(false);

  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);

  let secondsPassed = 0;
  if (startTime != 0 && now != 0) {
    secondsPassed = (now - startTime) / 1000;
  }
  function handleClick() {
    setStartTime(Date.now());
    setNow(Date.now);
    setInterval(() => {
      setNow(Date.now());
    }, 10);
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
          <h1>{secondsPassed.toFixed(3)}</h1>
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
          //   isTimerRunning={timerIsRunning}
          onStartClick={handleClick}
        />
      </Card>
    </Container>
  );
}
