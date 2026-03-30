import "./Content.css";

export default function Content({ weatherData }) {
  if (!weatherData) {
    return (
      <div className="BeforeInput">
        <h2>Welcome to SkyCast</h2>
        <p>
          Search for a city to view the current weather, time, and conditions.
        </p>
      </div>
    );
  }

  const { location, current } = weatherData;
  const iconUrl = `https:${current.condition.icon}`;

  return (
    <section className="Content">
      <div className="WeatherHero">
        <div className="WeatherCopy">
          <p className="WeatherEyebrow">
            {location.region}, {location.country}
          </p>
          <h1>{location.name}</h1>
          <p className="WeatherDate">
            Local time: {location.localtime} ({location.tz_id})
          </p>
          <div className="TemperatureRow">
            <span className="TemperatureValue">{current.temp_c}&deg;C</span>
            <span className="TemperatureAlt">{current.temp_f}&deg;F</span>
          </div>
          <p className="WeatherCondition">{current.condition.text}</p>
        </div>

        <div className="WeatherIconCard">
          <img src={iconUrl} alt={current.condition.text} />
          <p>Feels like {current.feelslike_c}&deg;C</p>
        </div>
      </div>

      <div className="WeatherStats">
        <article className="StatCard">
          <span>Humidity</span>
          <strong>{current.humidity}%</strong>
        </article>
        <article className="StatCard">
          <span>Wind</span>
          <strong>
            {current.wind_kph} kph {current.wind_dir}
          </strong>
        </article>
        <article className="StatCard">
          <span>Cloud Cover</span>
          <strong>{current.cloud}%</strong>
        </article>
        <article className="StatCard">
          <span>Visibility</span>
          <strong>{current.vis_km} km</strong>
        </article>
        <article className="StatCard">
          <span>Pressure</span>
          <strong>{current.pressure_mb} mb</strong>
        </article>
        <article className="StatCard">
          <span>Last Updated</span>
          <strong>{current.last_updated}</strong>
        </article>
      </div>
    </section>
  );
}
