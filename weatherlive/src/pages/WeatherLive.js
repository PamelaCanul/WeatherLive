import { useEffect, useState } from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherDisplay from "../components/WeatherDisplay";
import ErrorDisplay from "../components/ErrorDisplay";
import classNames from "classnames";

const WeatherLive = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState("bg-white");
  const [colorClass, setColorClass] = useState("bg-white");

  const fetchWeather = async (city) => {
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      if (!weatherResponse.ok) {
        throw new Error("City not found");
      }
      const weatherData = await weatherResponse.json();

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      if (!forecastResponse.ok) {
        throw new Error("Forecast not found");
      }
      const forecastData = await forecastResponse.json();

      setWeather(weatherData);
      setForecast(forecastData);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
    }
  };

  const getBackgroundClass = (description) => {
    switch (description.toLowerCase()) {
      case "clear sky":
        return "bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500";
      case "few clouds":
        return "bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500";
      case "scattered clouds":
        return "bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600";
      case "broken clouds":
        return "bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800";
      case "shower rain":
      case "rain":
        return "bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600";
      case "light rain":
        return "bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400";
      case "moderate rain":
        return "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700";
      case "heavy intensity rain":
        return "bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900";
      case "heavy thunderstorm":
        return "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900";
      case "overcast clouds":
        return "bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700";
      case "thunderstorm":
        return "bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900";
      case "snow":
        return "bg-gradient-to-r from-white via-gray-100 to-white";
      case "light snow":
        return "bg-gradient-to-r from-white via-gray-200 to-white";
      case "heavy snow":
        return "bg-gradient-to-r from-white via-gray-300 to-white";
      case "smoke":
        return "bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600";
      case "haze":
        return "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300";
      case "dust":
        return "bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600";
      case "fog":
        return "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400";
      case "mist":
        return "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300";
      default:
        return "bg-gradient-to-r from-white via-gray-100 to-white";
    }
  };

  const getColorClass = (description) => {
    switch (description.toLowerCase()) {
      case "clear sky":
        return "bg-blue-500";
      case "few clouds":
        return "bg-gray-400";
      case "scattered clouds":
        return "bg-gray-500";
      case "broken clouds":
        return "bg-gray-700";
      case "shower rain":
      case "rain":
        return "bg-blue-500";
      case "light rain":
        return "bg-blue-300";
      case "moderate rain":
        return "bg-blue-600";
      case "heavy intensity rain":
        return "bg-blue-800";
      case "heavy thunderstorm":
        return "bg-blue-900";
      case "overcast clouds":
        return "bg-gray-600";
      case "thunderstorm":
        return "bg-blue-800";
      case "snow":
        return "bg-gray-100";
      case "light snow":
        return "bg-gray-200";
      case "heavy snow":
        return "bg-gray-300";
      case "smoke":
        return "bg-gray-500";
      case "haze":
        return "bg-gray-200";
      case "dust":
        return "bg-gray-500";
      case "fog":
        return "bg-gray-300";
      case "mist":
        return "bg-gray-200";
      default:
        return "bg-white";
    }
  };

  useEffect(() => {
    if (weather) {
      console.log("Weather description:", weather.weather[0].description);
      setBackgroundClass(getBackgroundClass(weather.weather[0].description));
      setColorClass(getColorClass(weather.weather[0].description));
    }
  }, [weather]);

  return (
    <div
      id="weatherlive-page"
      className={classNames(
        "min-h-screen h-screen w-screen flex flex-col items-center justify-center p-4 transition-colors duration-500 overflow-auto font-serif",
        backgroundClass
      )}
    >
      <h1 className="text-4xl font-bold mb-6">WeatherLive</h1>
      <WeatherForm onFetchWeather={fetchWeather} buttonColor={colorClass} />
      <ErrorDisplay error={error} />
      <WeatherDisplay
        weather={weather}
        forecast={forecast}
        backgroundClass={colorClass}
      />
    </div>
  );
};

export default WeatherLive;
