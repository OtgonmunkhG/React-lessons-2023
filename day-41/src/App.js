
import { useState } from 'react';
import Exercises from './components/Exercises';
import './App.css';
import Counter from './components/Counter';
import List from './components/SpreadArray';
import UpdateArrays from './components/Update-arrays';
import UpdatingObjects from './components/Updating-object';

function App() {
  const [counter, setCounter] = useState(0)
  const [inputText, setInputText] = useState("")


  function handleClick() {
    console.log("hello");
  }

  function handleInput(event) {
    console.log(event.target.value);
    setInputText(event.target.value)

  }


  return (
    <div className="App">
      <div id="ex-1">
        <p>Hello day-41 state</p>
        <UpdatingObjects/> <br/>
        <button onClick={() => {
          handleClick()
          setCounter(counter + 1)
        }} >Click me {counter}
        </button>
      </div>
      <div id="ex-2">
        <p>{inputText}</p>
        <input value={inputText} onChange={(e) => { handleInput(e) }}></input>
        <Counter/>
        {/* <UpdateArrays/>
        <List/>
        <Exercises/> */}
       
      </div>
    </div>
  );
}

export default App;
