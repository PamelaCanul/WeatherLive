import React from "react";
import classNames from "classnames";

const WeatherDisplay = ({ weather, forecast, backgroundClass }) => {
  // If there is no weather data, nothing is displayed
  if (!weather) return null;

  // Weather icon URL
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  // Function to get the local time based on the timezone
  const getLocalTime = (timezone) => {
    const date = new Date();
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + 1000 * timezone);
    return localTime;
  };

  const localTime = getLocalTime(weather.timezone);

  // Function to obtain the hourly forecast
  const getHourlyForecast = () => {
    if (!forecast) return null;

    return forecast.list.slice(0, 5).map((hour, index) => {
      const hourIconUrl = `http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`;
      return (
        <div key={index} className="text-center">
          <p>
            {new Date(hour.dt * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <img src={hourIconUrl} alt={hour.weather[0].description} />
          <p>{hour.main.temp}°C</p>
        </div>
      );
    });
  };

  return (
    <div
      id="weather-display"
      className={classNames(
        "rounded-lg shadow-md p-4 max-w-sm mx-auto text-center bg-opacity-50 font-sans",
        backgroundClass
      )}
    >
      <p className="text-2xl">{weather.name}</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <img
            src={iconUrl}
            alt={weather.weather[0].description}
            className="mx-auto mb-2 animate-bounceInOut sm:mb-0"
          />
        </div>
        <div className="sm:ml-4">
          <h1 className="text-4xl font-semibold mb-2">{weather.main.temp}°C</h1>
          <p className="text-xl">{weather.weather[0].description}</p>
          <p className="text-xl">
            {localTime.toLocaleDateString("en-US", {
              weekday: "long",
            })}
          </p>
          <p className="text-xl">
            {localTime.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-xl">
            {localTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Hourly Forecast</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {getHourlyForecast()}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
