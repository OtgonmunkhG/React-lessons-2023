import { useRef, useState } from "react";

export default function VideoPlay() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  function handleClick(e) {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
  return (
    <div>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>

      <video
        width="250"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="http://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <br />
    </div>
  );
}
