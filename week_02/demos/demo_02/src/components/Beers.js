import React, { useEffect, useState } from "react";
import Beer from "./Beer";
import SelectCountry from "./SelectCountry";
import styles from "./beers.module.css";

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
      {isLoading && <p>... Loading</p>}
      {!isLoading && (
        <>
          <h1 className="styles.error">{country}</h1>
          {beers.map((beer, i) => (
            <Beer beer={beer} key={`beer-${i}`} />
          ))}
        </>
      )}
    </div>
  );
}
