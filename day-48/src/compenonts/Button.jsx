import { useEffect, useState } from "react";

export default function Button() {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      console.log("is playing");
    } else {
      console.log("isn't playing");
    }
  }, [isPlaying]);
  function handleClick() {
    console.log("you clicked me!");
    setIsPlaying(!isPlaying);
  }
  return <button onClick={handleClick}>click me</button>;
}
