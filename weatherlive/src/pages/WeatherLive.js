import { useState } from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherDisplay from "../components/WeatherDisplay";
import ErrorDisplay from "../components/ErrorDisplay";

const WeatherLive = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    console.log("API Key:", process.env.REACT_APP_WEATHER_API_KEY); // Añadir esta línea para depuración
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  return (
    <div id="weatherlive-page">
      <h1>Weather Information</h1>
      <WeatherForm onFetchWeather={fetchWeather} />
      <ErrorDisplay error={error} />
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default WeatherLive;
