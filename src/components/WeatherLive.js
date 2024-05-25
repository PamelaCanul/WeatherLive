import { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";
import ErrorDisplay from "./ErrorDisplay";
import classNames from "classnames";

const WeatherLive = ({ initialWeather, initialForecast, initialError }) => {
  const [weather, setWeather] = useState(initialWeather || null);
  const [forecast, setForecast] = useState(initialForecast || null);
  const [error, setError] = useState(initialError || null);
  const [backgroundClass, setBackgroundClass] = useState("bg-white");
  const [colorClass, setColorClass] = useState("bg-black");

  // Effect to update background and color classes when weather data changes
  useEffect(() => {
    if (weather) {
      setBackgroundClass(getBackgroundClass(weather.weather[0].description));
      setColorClass(getColorClass(weather.weather[0].description));
    }
  }, [weather]);

  // Function to obtain weather and forecast data for a city
  const fetchWeather = async (city) => {
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );

      //Error handling specific to weather response
      if (!weatherResponse.ok) {
        if (weatherResponse.status === 401) {
          throw new Error("API key is invalid or missing");
        }
        if (weatherResponse.status === 404) {
          throw new Error("City not found");
        }
        throw new Error("An error occurred while fetching the weather data");
      }

      const weatherData = await weatherResponse.json();

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );

      //Handling errors specific to the forecast response
      if (!forecastResponse.ok) {
        if (forecastResponse.status === 401) {
          throw new Error("Unauthorized: API key is invalid or missing");
        }
        if (forecastResponse.status === 404) {
          throw new Error("Forecast not found");
        }
        throw new Error("An error occurred while fetching the forecast data");
      }

      const forecastData = await forecastResponse.json();

      // Update the state with the new data
      setWeather(weatherData);
      setForecast(forecastData);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
    }
  };

  // Function to get the background class based on the weather description
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

  // Function to get color class based on weather description
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
      {weather && forecast ? (
        <WeatherDisplay
          weather={weather}
          forecast={forecast}
          backgroundClass={colorClass}
        />
      ) : (
        <p>Loading initial data...</p>
      )}
    </div>
  );
};

export default WeatherLive;
