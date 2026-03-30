import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";

const formStyles = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  flexWrap: "wrap",
};

const inputStyles = {
  height: "2.5rem",
  width: "12.5rem",
  padding: "0 0.875rem",
  border: "0.09375rem solid #1976d2",
  borderRadius: "0.375rem",
  outline: "none",
  color: "#1976d2",
  fontSize: "1rem",
};

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
    <Box>
      <Box component="form" onSubmit={handleSubmit} sx={formStyles}>
        <input
          type="text"
          id="city"
          placeholder="City Name,Country Name"
          required
          value={city}
          onChange={handleChange}
          style={inputStyles}
        />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </Box>
    </Box>
  );
}
