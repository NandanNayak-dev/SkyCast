import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import Navbar from "./Navbar.jsx";
import Content from "./Content.jsx";
function App() {
  let [weatherData, setWeatherData] = useState(null);

  return (
    <>
      <Navbar setWeatherData={setWeatherData} />
      <Content weatherData={weatherData} />
    </>
  );
}

export default App;
