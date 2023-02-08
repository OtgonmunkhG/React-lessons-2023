import { useContext } from "react";
import { SizeContext } from "../context/sizeContex";
import PlaceImage from "./PlaceImage";

export default function Place({ place }) {
  const [isLarge, setIsLarge, imageSize] = useContext(SizeContext);

  return (
    <div>
      <PlaceImage place={place} imageSize={imageSize} />
      <p>
        <b />
        {place.name}
        {":" + place.description}
      </p>
    </div>
  );
}
