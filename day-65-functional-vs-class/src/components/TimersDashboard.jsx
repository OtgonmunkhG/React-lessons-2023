import React from "react";
import { newTimer } from "./Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import projects from "../data/data.js";

class TimersDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      timers: [],
    };
    const URL = "http://localhost:8080/timers";
    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
  }
  fetchTimersData() {
    const FETCHED_DATA = fetch(this.URL);
    const FETCHED_JSON = FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    this.setState({ timers: FETCHED_JSON.data });
  }

  componentDidMount = () => {
    setInterval(() => this.setState({ timers: projects }), 1000);
  };
  createTimer(timer) {
    const t = newTimer(timer);
    this.setState({ timers: this.state.timers.concat(t) });
  }
  handleCreateFormSubmit(timer) {
    this.createTimer(timer);
  }

  handleEditFormSubmit(attrs) {
    this.updateTimer(attrs);
  }

  handleTrashClick(timerId) {
    this.deleteTimer(timerId);
  }

  handleStartClick(timerId) {
    this.startTimer(timerId);
  }

  handleStopClick(timerId) {
    this.stopTimer(timerId);
  }

  startTimer(timerId) {
    const now = Date.now();
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          console.log(timer);
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }

  stopTimer(timerId) {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          timer.elapsed = timer.elapsed + lastElapsed;
          timer.runningSince = null;
        }
        return timer;
      }),
    });
  }

  updateTimer(attrs) {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          timer.title = attrs.title;
          timer.project = attrs.project;
        }
        return timer;
      }),
    });
  }

  deleteTimer(timerId) {
    this.setState({
      timers: this.statet.timers.filter((t) => t.id !== timerId),
    });
  }

  render() {
    return (
      <div>
        <h1>Timers</h1>
        {this.state.timers && (
          <div>
            <EditableTimerList
              timers={this.state.timers}
              onFormSubmit={this.handleEditFormSubmit}
              onTrashClick={this.handleTrashClick}
              onStartClick={this.handleStartClick}
              onStopClick={this.handleStopClick}
            />
            <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
          </div>
        )}
      </div>
    );
  }
}

export default TimersDashboard;
