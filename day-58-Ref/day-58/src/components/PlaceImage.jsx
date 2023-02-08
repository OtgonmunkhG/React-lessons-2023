import { useContext } from "react";
import { SizeContext } from "../context/sizeContex";
import getImageUrl from "../utils";
export default function PlaceImage({ place }) {
  const [isLarge, setIsLarge, imageSize] = useContext(SizeContext);
  return (
    <div>
      <img
        src={getImageUrl(place)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
}
