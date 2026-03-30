import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ setWeatherData }) {
  let [city, setCity] = useState("");

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };
  const API_URL = "https://api.weatherapi.com/v1/current.json";
  const API_KEY = "6f1e80c0040546a29e850706262903";

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}&aqi=no`);
    let jsonResponse = await response.json();
    setWeatherData(jsonResponse);
    console.log(jsonResponse);
  };
  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };
  return (
    <div className="SearchBox">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          id="city"
          placeholder="City Name,Country Name"
          required
          value={city}
          onChange={handleChange}
        />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
