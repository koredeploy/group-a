import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  const center = [6.5417, 3.3695];
  console.log(center);
  const zoom = 13;

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
