import React, { useEffect, useState } from "react";
import Beer from "./Beer";
import SelectCountry from "./SelectCountry";
import {
  Alert,
  Card,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";

export default function Beers() {
  const [country, setCountry] = useState("italy");
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const countries = [
    {
      value: "italy",
      name: "Italy",
    },
    {
      value: "belgium",
      name: "Belgium",
    },
    {
      value: "ireland",
      name: "Ireland",
    },
  ];
  useEffect(() => {
    setIsLoading(true);
    setBeers([]);
    const url = `https://beers-list.p.rapidapi.com/beers/${country}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_BEER_KEY,
        "X-RapidAPI-Host": "beers-list.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
        console.log(data);
        setIsLoading(false);
      });
  }, [country]);

  return (
    <div>
      <SelectCountry
        countries={countries}
        setCountry={setCountry}
        country={country}
      />
      {isLoading && (
        <>
          <Alert severity="warning">Loading</Alert>
          <LinearProgress color="success" />
        </>
      )}
      {!isLoading && (
        <>
          <Alert severity="success">Everything is loaded</Alert>
          <Typography variant="h1">{country}</Typography>
          <Divider />
          {beers.map((beer, i) => (
            <Card variant="outlined" sx={{ maxWidth: 345 }}>
              <Beer beer={beer} key={`beer-${i}`} />
            </Card>
          ))}
        </>
      )}
    </div>
  );
}
