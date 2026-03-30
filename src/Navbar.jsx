import "./Navbar.css";
import SearchBox from "./SearchBox.jsx";
export default function Navbar({ setWeatherData }) {
  return (
    <header className="Navbar">
      <h1>SkyCast</h1>
      <SearchBox setWeatherData={setWeatherData} />
    </header>
  );
}
