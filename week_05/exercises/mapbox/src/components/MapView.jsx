import React from "react";
import Map from "react-map-gl";
import MapMaker from "./MapMaker";
import { countries } from "../data/countries";

export default function MapView() {
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {countries.map((country) => (
        <MapMaker
          key={country.id}
          longitude={country.longitude}
          latitude={country.latitude}
          isoCode={country.iso2Code}
        />
      ))}
    </Map>
  );
}
