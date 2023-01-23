import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  debugger;
  let className = "counter";
  if (isActive) {
    console.log(isActive);
    className = "hover";
    console.log("hover");
  }
  return (
    <div
      className={className}
      onPointerEnter={() => {
        setIsActive((isActive = true));
      }}
      onPointerLeave={() => {
        setIsActive(false);
      }}
    >
      {counter} <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add One
      </button>
    </div>
  );
}
