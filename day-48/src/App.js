import Input from "./compenonts/Input";
import "./App.css";
import { useState } from "react";
import Anime from "./compenonts/Anime";
import Button from "./compenonts/Button";
import TopAnime from "./compenonts/TopAnime";
import Exercises from "./compenonts/Exercises";
import FindOdd from "./compenonts/FindOdd";

function App() {
  const [text, setText] = useState([]);

  function onChange(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }
  return (
    <div className="App">
      {/* <Input label={"first input"} value={text} onChange={onChange} />
      <Input label={"second input"} value={text} onChange={onChange} />
      <Anime />
      <Button />
      <TopAnime /> */}
      <Exercises />
      <FindOdd />
    </div>
  );
}

export default App;
