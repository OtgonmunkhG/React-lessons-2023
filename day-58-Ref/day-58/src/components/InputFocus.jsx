import { useRef } from "react";

export default function () {
  const inputUseRef = useRef(null);
  const handleFocus = () => {
    inputUseRef.current.focus();
  };
  const handleBlur = () => {
    inputUseRef.current.blur();
  };
  return (
    <div>
      <input type="text" ref={inputUseRef} />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleBlur}>Blur</button>
    </div>
  );
}
