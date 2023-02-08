import { places } from "../data/data";
import Place from "./Place";
import { useContext } from "react";
import { SizeContext } from "../context/sizeContex";

export default function List() {
  const [isLarge, setIsLarge, imageSize] = useContext(SizeContext);
  return (
    <div>
      {places.map((place, index) => {
        return <Place key={index} place={place} imageSize={imageSize} />;
      })}
    </div>
  );
}
