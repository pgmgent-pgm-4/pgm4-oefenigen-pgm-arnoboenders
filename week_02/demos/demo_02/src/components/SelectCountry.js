import React from "react";

export default function SelectCountry({ countries, setCountry, country }) {
  const handlechange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <select value={country} onChange={handlechange}>
      {countries.map((country, i) => (
        <option key={`country-${i}`} value={country.value}>
          {country.name}
        </option>
      ))}
    </select>
  );
}
