import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import Navbar from "./Navbar.jsx";
import Content from "./Content.jsx";
function App() {
  let [weatherData, setWeatherData] = useState(null);

  return (
    <div style={{ fontFamily: '"Poppins", sans-serif' }}>
      <Navbar setWeatherData={setWeatherData} />
      <Content weatherData={weatherData} />
    </div>
  );
}

export default App;
