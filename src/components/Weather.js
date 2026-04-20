import React, { useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const API_KEY = "180268e4a2ea858b23d666fc75567b24";

  const getWeather = async () => {
    if (!city) return;

     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const res = await fetch(url);
    const result = await res.json();
    setData(result);
  };

  return (
  <div className="container">
    <div className="weather-box">   {/* ⭐ ADD THIS */}

      {/* SEARCH FIRST */}
      <div className="search">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>🔍</button>
      </div>

      {/* WEATHER DATA BELOW */}
      {data && data.main && (
        <>
          <h2 className="city">{data.name}</h2>

          <h1 className="temp">{Math.round(data.main.temp)}°</h1>
          <p className="desc">{data.weather[0].main}</p>

          <p className="range">
            Feels like {Math.round(data.main.feels_like)}°C
          </p>

          <div className="card">
            <div>💧 Humidity<br />{data.main.humidity}%</div>
            <div>🌬️ Wind<br />{data.wind.speed} m/s</div>
            <div>📊 Pressure<br />{data.main.pressure} hPa</div>
          </div>
        </>
      )}

    </div>   {/* ⭐ CLOSE THIS */}
  </div>
);
};

export default Weather;