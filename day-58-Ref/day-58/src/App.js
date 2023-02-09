import "./App.css";
import { useContext, useState } from "react";
import List from "./components/List";
import { SizeContext } from "./context/sizeContex";
import StopWatch from "./components/StopWatch";
import InputFocus from "./components/InputFocus";
import VideoPlay from "./components/VideoPlayer";

function App() {
  // const [isLarge, setIsLarge, imageSize] = useContext(SizeContext);
  // function handleChange(e) {
  //   if (e.target.checked) {
  //     setIsLarge(true);
  //   } else {
  //     setIsLarge(false);
  //   }
  // }

  return (
    <div className="App">
      {/* <label>
        Use Large Images
        <input type="checkbox" checked={isLarge} onChange={handleChange} />
        <hr />
      </label>
      <List /> */}
      <VideoPlay />
      <InputFocus />
      <StopWatch />
    </div>
  );
}

export default App;
