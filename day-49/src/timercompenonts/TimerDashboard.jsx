import { useEffect, useState } from "react";
import timerData from "../data/data";
import Timer from "./Timer";
import TimerForm from "./TimerForm";
export default function TimerDashboard() {
  console.log(timerData);
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    setTimers(timerData);
  }, [timers]);

  return (
    <div>
      <h1>Timers</h1>
      {timerData &&
        timers.map((data, ind) => {
          return (
            <Timer
              key={ind}
              project={data.project}
              title={data.title}
              elapsed={data.elapsed}
              runningSince={data.runningSince}
              //   runningTime={runningTime}
            />
          );
        })}
      <TimerForm title={"title"} project={"project"} />
    </div>
  );
}
