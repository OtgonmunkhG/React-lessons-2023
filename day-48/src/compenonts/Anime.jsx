import { useEffect } from "react";
import { useState } from "react";

export default function Anime() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("My anime compenonts");
    setCount(count + 1);
    console.log(count);
  }, []);
  function handleClick(e) {
    console.log("you clicked");
  }
  //   console.log("My compenont");
  return (
    <div>
      <h1>Day-48 Hello useEffect hook</h1>
      <button
        onClick={(e) => {
          handleClick(e);
          setCount(count + 1);
        }}
      >
        Anime click
      </button>
    </div>
  );
}
