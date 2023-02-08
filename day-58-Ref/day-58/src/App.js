import "./App.css";
import { useContext, useState } from "react";
import List from "./components/List";
import { SizeContext } from "./context/sizeContex";

function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(SizeContext);
  function handleChange(e) {
    if (e.target.checked) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  }

  return (
    <div className="App">
      <label>
        Use Large Images
        <input type="checkbox" checked={isLarge} onChange={handleChange} />
        <hr />
      </label>
      <List />
    </div>
  );
}

export default App;
