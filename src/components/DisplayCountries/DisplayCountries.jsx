import { useEffect, useState } from "react";
import Countries from "../Countries/Countries";
import Loader from "../Loader/Loader";

const DisplayCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      {countries.length ? (
        <Countries countries={countries}></Countries>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};

export default DisplayCountries;
