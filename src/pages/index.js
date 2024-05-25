import WeatherLive from "../components/WeatherLive";

export default function Home({
  initialWeather,
  initialForecast,
  initialError,
}) {
  return (
    <div className="min-h-screen h-screen flex items-center justify-center overflow-auto">
      <WeatherLive
        initialWeather={initialWeather}
        initialForecast={initialForecast}
        initialError={initialError}
      />
    </div>
  );
}

// Function to get weather and forecast data to the server
export async function getServerSideProps() {
  const defaultCity = "Tokyo";
  let initialWeather = null;
  let initialForecast = null;
  let initialError = null;

  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );

    if (!weatherResponse.ok) {
      throw new Error("An error occurred while fetching the weather data");
    }
    initialWeather = await weatherResponse.json();

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${defaultCity}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );

    if (!forecastResponse.ok) {
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
