import Input from "./compenonts/input";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState([]);

  function onChange(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }
  return (
    <div className="App">
      <Input label={"first input"} value={text} onChange={onChange} />
      <Input label={"second input"} value={text} onChange={onChange} />
    </div>
  );
}

export default App;
