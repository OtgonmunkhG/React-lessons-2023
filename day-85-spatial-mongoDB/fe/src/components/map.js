import { useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Polygon,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import { NeighborhoodContext } from "../context/neighborhoods.context";
import { RestaurantContext } from "../context/restaurants.context";

export default function Map() {
  const restaurants = useContext(RestaurantContext);
  console.log(restaurants);
  const neighborhoods = useContext(NeighborhoodContext);
  console.log(neighborhoods);
  const redOptions = { color: "red" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };
  return (
    <div>
      <h2>My map</h2>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurants &&
          restaurants.map((element, index) => {
            return (
              <Marker
                key={index}
                position={[element.address.coord[1], element.address.coord[0]]}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          })}
        {/* 
        {neighborhoods &&
          neighborhoods.map((element, index) => {
            return (
              <CircleMarker
                key={index}
                center={[
                  element.geometry.coordinates[0][0][1],
                  element.geometry.coordinates[0][0][0],
                ]}
                pathOptions={redOptions}
                radius={20}
              >
                <Popup>Popup in CircleMarker</Popup>
              </CircleMarker>
            );
          })} */}

        {neighborhoods &&
          neighborhoods.map((element, index) => {
            const polygon = [element.geometry.coordinates];
            return (
              <Polygon
                key={index}
                pathOptions={purpleOptions}
                positions={polygon}
              />
            );
          })}

        {neighborhoods.map((neighborhood, index) => {
          //   const polygon = [
          //     [51.515, -0.09],
          //     [51.52, -0.1],
          //     [51.52, -0.12],
          //   ];
          const polygon = [neighborhood.geometry.coordinates[0]];

          const revPolygon = polygon.map((subArr) => {
            const len = subArr.length;
            const reversedSubArr = [];

            for (let i = len - 1; i >= 0; i--) {
              reversedSubArr.push([subArr[i][1], subArr[i][0]]);
            }
            return reversedSubArr;
          });

          console.log(polygon);
          console.log(revPolygon);
          const purpleOptions = { color: "purple" };

          return (
            <div>
              <Polygon pathOptions={purpleOptions} positions={revPolygon} />
            </div>
          );
        })}
      </MapContainer>
    </div>
  );
}
