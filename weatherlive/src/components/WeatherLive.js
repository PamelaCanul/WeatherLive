import { useState, useEffect } from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherDisplay from "../components/WeatherDisplay";
import ErrorDisplay from "../components/ErrorDisplay";
import classNames from "classnames";

const WeatherLive = ({ initialWeather, initialForecast, initialError }) => {
  const [weather, setWeather] = useState(initialWeather);
  const [forecast, setForecast] = useState(initialForecast);
  const [error, setError] = useState(initialError);
  const [backgroundClass, setBackgroundClass] = useState("bg-white");
  const [colorClass, setColorClass] = useState("bg-white");

  const fetchWeather = async (city) => {
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );

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
      // other cases...
      default:
        return "bg-gradient-to-r from-white via-gray-100 to-white";
    }
  };

  const getColorClass = (description) => {
    switch (description.toLowerCase()) {
      case "clear sky":
        return "bg-blue-500";
      // other cases...
      default:
        return "bg-white";
    }
  };

  useEffect(() => {
    if (weather) {
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

export async function getServerSideProps(context) {
  let initialWeather = null;
  let initialForecast = null;
  let initialError = null;

  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );
    if (!weatherResponse.ok) {
      if (weatherResponse.status === 401) {
        throw new Error("Unauthorized: API key is invalid or missing");
      }
      if (weatherResponse.status === 404) {
        throw new Error("City not found");
      }
      throw new Error("An error occurred while fetching the weather data");
    }
    initialWeather = await weatherResponse.json();

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=New York&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );
    if (!forecastResponse.ok) {
      if (forecastResponse.status === 401) {
        throw new Error("API key is invalid or missing");
      }
      if (forecastResponse.status === 404) {
        throw new Error("Forecast not found");
      }
      throw new Error("An error occurred while fetching the forecast data");
    }
    initialForecast = await forecastResponse.json();
  } catch (err) {
    initialError = err.message;
  }

  return {
    props: {
      initialWeather,
      initialForecast,
      initialError,
    },
  };
}

export default WeatherLive;
