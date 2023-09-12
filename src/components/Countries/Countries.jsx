import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countries }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisited = (country) => {
    setVisitedCountries([...visitedCountries, country]);
    console.log(visitedCountries);
  };
  return (
    <>
      <h3>Total Countries: {countries.length}</h3>
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country?.cca3}>{country?.name?.common}</li>
          ))}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisited={handleVisited}
            key={country.cca3}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
