import Box from "@mui/material/Box";

const welcomeCardStyles = {
  width: "min(90%, 32.5rem)",
  margin: "5rem auto 0",
  padding: "2rem 1.5rem",
  textAlign: "center",
  background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
  border: "0.0625rem solid #bfdbfe",
  borderRadius: "1.125rem",
  boxShadow: "0 0.625rem 1.875rem rgba(37, 99, 235, 0.12)",
  color: "#1e3a8a",
};

const contentStyles = {
  width: "min(92%, 61.25rem)",
  margin: "3rem auto 0",
  padding: { xs: "1.375rem", sm: "1.75rem" },
  borderRadius: "1.75rem",
  background:
    "radial-gradient(circle at top left, rgba(125, 211, 252, 0.5), transparent 28%), linear-gradient(145deg, #0f172a, #1e3a8a 58%, #0f766e)",
  boxShadow: "0 1.5rem 3.75rem rgba(15, 23, 42, 0.2)",
  color: "#f8fafc",
};

const heroStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: { xs: "flex-start", md: "center" },
  flexDirection: { xs: "column", md: "row" },
  gap: "1.5rem",
};

const statsGridStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(9.375rem, 1fr))",
  gap: "1rem",
  marginTop: "1.75rem",
};

const statCardStyles = {
  padding: "1.125rem",
  textAlign: "left",
  borderRadius: "1.125rem",
  background: "rgba(255, 255, 255, 0.12)",
  border: "0.0625rem solid rgba(255, 255, 255, 0.12)",
};

export default function Content({ weatherData }) {
  if (!weatherData) {
    return (
      <Box sx={welcomeCardStyles}>
        <h2 style={{ margin: "0 0 0.625rem", fontSize: "1.8rem" }}>
          Welcome to SkyCast
        </h2>
        <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.6, color: "#334155" }}>
          Search for a city to view the current weather, time, and conditions.
        </p>
      </Box>
    );
  }

  const { location, current } = weatherData;
  const iconUrl = `https:${current.condition.icon}`;

  return (
    <Box component="section" sx={contentStyles}>
      <Box sx={heroStyles}>
        <Box sx={{ textAlign: "left" }}>
          <p
            style={{
              margin: "0 0 0.625rem",
              fontSize: "0.95rem",
              letterSpacing: "0.08rem",
              textTransform: "uppercase",
              color: "#bfdbfe",
            }}
          >
            {location.region}, {location.country}
          </p>
          <h1 style={{ margin: 0, fontSize: "clamp(2.3rem, 4vw, 4rem)" }}>
            {location.name}
          </h1>
          <p style={{ margin: "0.75rem 0 1.25rem", color: "#dbeafe" }}>
            Local time: {location.localtime} ({location.tz_id})
          </p>
          <Box sx={{ display: "flex", alignItems: "flex-end", gap: "1rem" }}>
            <span style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 700, lineHeight: 1 }}>
              {current.temp_c}&deg;C
            </span>
            <span style={{ fontSize: "1.2rem", color: "#bfdbfe", paddingBottom: "0.625rem" }}>
              {current.temp_f}&deg;F
            </span>
          </Box>
          <p style={{ margin: "0.875rem 0 0", fontSize: "1.2rem", color: "#e0f2fe" }}>
            {current.condition.text}
          </p>
        </Box>

        <Box
          sx={{
            minWidth: "11.25rem",
            width: { xs: "100%", md: "auto" },
            boxSizing: "border-box",
            textAlign: "center",
            padding: "1.25rem",
            border: "0.0625rem solid rgba(255, 255, 255, 0.18)",
            borderRadius: "1.5rem",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(0.625rem)",
          }}
        >
          <img
            src={iconUrl}
            alt={current.condition.text}
            style={{ width: "5.5rem", height: "5.5rem" }}
          />
          <p style={{ margin: "0.5rem 0 0", color: "#e0f2fe" }}>
            Feels like {current.feelslike_c}&deg;C
          </p>
        </Box>
      </Box>

      <Box sx={statsGridStyles}>
        <Box component="article" sx={statCardStyles}>
          <span style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.92rem", color: "#bfdbfe" }}>
            Humidity
          </span>
          <strong style={{ fontSize: "1.1rem", color: "#fff" }}>{current.humidity}%</strong>
        </Box>
        <Box component="article" sx={statCardStyles}>
          <span style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.92rem", color: "#bfdbfe" }}>
            Wind
          </span>
          <strong style={{ fontSize: "1.1rem", color: "#fff" }}>
            {current.wind_kph} kph {current.wind_dir}
          </strong>
        </Box>
        <Box component="article" sx={statCardStyles}>
          <span style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.92rem", color: "#bfdbfe" }}>
            Cloud Cover
          </span>
          <strong style={{ fontSize: "1.1rem", color: "#fff" }}>{current.cloud}%</strong>
        </Box>
        <Box component="article" sx={statCardStyles}>
          <span style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.92rem", color: "#bfdbfe" }}>
            Visibility
          </span>
          <strong style={{ fontSize: "1.1rem", color: "#fff" }}>{current.vis_km} km</strong>
        </Box>
        <Box component="article" sx={statCardStyles}>
          <span style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.92rem", color: "#bfdbfe" }}>
            Pressure
          </span>
          <strong style={{ fontSize: "1.1rem", color: "#fff" }}>{current.pressure_mb} mb</strong>
        </Box>
        <Box component="article" sx={statCardStyles}>
          <span style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.92rem", color: "#bfdbfe" }}>
            Last Updated
          </span>
          <strong style={{ fontSize: "1.1rem", color: "#fff" }}>{current.last_updated}</strong>
        </Box>
      </Box>
    </Box>
  );
}
