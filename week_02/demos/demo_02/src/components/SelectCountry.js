import { FormControl, MenuItem, InputLabel, Select } from "@mui/material";
import React from "react";

export default function SelectCountry({ countries, setCountry, country }) {
  const handlechange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Countries</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Countries"
        value={country}
        onChange={handlechange}
      >
        {countries.map((country, i) => (
          <MenuItem key={`country-${i}`} value={country.value}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
