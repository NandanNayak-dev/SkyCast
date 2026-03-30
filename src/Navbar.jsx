import Box from "@mui/material/Box";
import SearchBox from "./SearchBox.jsx";

const navbarStyles = {
  padding: "1.25rem 2rem",
  color: "#fff",
  background: "linear-gradient(90deg, #1d4ed8, #0f172a)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "1rem",
  gap: "1rem",
  flexWrap: "wrap",
};

const titleStyles = {
  margin: 0,
  fontSize: "2rem",
};

export default function Navbar({ setWeatherData }) {
  return (
    <Box component="header" sx={navbarStyles}>
      <h1 style={titleStyles}>SkyCast</h1>
      <SearchBox setWeatherData={setWeatherData} />
    </Box>
  );
}
