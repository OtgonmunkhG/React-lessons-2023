import { useRef, useState } from "react";

export default function VideoPlay() {
  const [isPlaying, setIsPlaying] = useState(false);
  const myRef = useRef(null);
  return (
    <div>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video src=""></video>
    </div>
  );
}
