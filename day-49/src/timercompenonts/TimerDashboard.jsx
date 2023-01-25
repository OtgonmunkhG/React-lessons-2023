import { useEffect, useState } from "react";
import timerData from "../data/data";
import EditableTimerList from "./EditableTimerList";
import TimerForm from "./TimerForm";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { newTimer } from "./Helpers";

export default function TimerDashboard() {
  const [timers, setTimers] = useState({ timers: [] });
  function handleCreateFormSubmit(timer) {
    createTimer(timer);
  }
  function createTimer(timer) {
    const t = newTimer(timer);
    setTimers({
      timer: timers.timers.concat(t),
    });
  }
  useEffect(() => {
    setInterval(() => setTimers({ timers: timerData }), 10000);
  }, []);

  function handleEditFormSubmit(timer) {
    updateTimer(timer);
  }
  function updateTimer(attributes) {
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === attributes.id) {
          timer.title = attributes.title;
          timer.project = attributes.project;
        }
        return timer;
      }),
    });
  }

  function handleStopClick(timerId) {
    stopTimer(timerId);
  }
  function stopTimer(timerId) {
    const now = Date.now();
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          timer.elapsed = timer.elapsed + lastElapsed;
          timer.runningSince = null;
        }
        return timer;
      }),
    });
  }
  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }
  function deleteTimer(timerId) {
    setTimers({
      timers: timers.timers.filter((t) => t.id != timerId),
    });
  }
  function handleStartClick(timerId) {
    startTimer(timerId);
  }
  function startTimer(timerId) {
    const now = Date.now();
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }
  return (
    <div>
      <h1>Timers</h1>

      {timers.timers && (
        <div>
          <EditableTimerList
            onTrashClick={handleTrashClick}
            timers={timers.timers}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
            onFormSubmit={handleEditFormSubmit}
          />
          <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        </div>
      )}
    </div>
  );
}
