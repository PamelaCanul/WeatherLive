import React, { useState } from "react";
import classNames from "classnames";

const WeatherForm = ({ onFetchWeather, buttonColor }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchWeather(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="weather-form"
      className="flex flex-col items-center mb-4 w-full max-w-sm font-sans"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        required
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      />
      <button
        type="submit"
        className={classNames("text-white p-2 rounded w-full", buttonColor)}
      >
        Search
      </button>
    </form>
  );
};

export default WeatherForm;
