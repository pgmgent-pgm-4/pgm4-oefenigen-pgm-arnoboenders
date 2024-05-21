import React, { useEffect, useState } from "react";
import { Marker } from "react-map-gl";
import { flags } from "../data/country-flags";

export default function MapMaker({ longitude, latitude, isoCode }) {
  const [currentFlagUrl, setCurrentFlagUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
  );
  useEffect(() => {
    const currentCountry = flags.filter((flag) => {
      return flag.code.toLowerCase() === isoCode.toLowerCase();
    });
    console.log(currentCountry);
    if (currentCountry.length > 0) {
      setCurrentFlagUrl(currentCountry[0].flag);
    }
  }, []);
  return (
    <Marker longitude={longitude} latitude={latitude} anchor="bottom">
      <img style={{ width: "50px" }} src={currentFlagUrl} alt="" />
    </Marker>
  );
}
