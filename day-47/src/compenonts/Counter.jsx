import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);

  let className = "counter";
  if (isActive) {
    className += "hover";
  }
  return (
    <div
      className={counter}
      onPointerEnter={() => {
        setIsActive(true);
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
