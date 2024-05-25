import React from "react";

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-display">
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
