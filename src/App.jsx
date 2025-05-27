import React, { useEffect, useRef, useState } from "react";
import HorizontalScroll from "./Components/HorizontalScroll";
import SearchSection from "./Components/SearchSection";
import CurrentWeather from "./Components/CurrentWeather";
import { weatherCode } from "./constants";
import NoResultDiv from "./Components/NoResultDiv";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, sethourlyForecast] = useState([]);
  const [hasNoResults, setHasNoResults] = useState(false);
  const searchInputRef = useRef(null);

  const filterHourlyForecast = (data) => {
    // Filter the hourly forecast data to include only the next 48 hours
    const currentTime = new Date().setMinutes(0, 0, 0); // Get the current time rounded to the nearest hour
    const next48Hours = currentTime + 48 * 60 * 60 * 1000; // Calculate the time 48 hours from now

    // Filter the data to include only items within the next 48 hours
    const next48HoursData = data.filter(({ time }) => {
      const foreCastTime = new Date(time).getTime();
      return foreCastTime > currentTime && foreCastTime <= next48Hours;
    });
    sethourlyForecast(next48HoursData);
  };
  // Function to fetch weather data from the OpenWeatherMap API
  // This function takes an API URL as an argument and fetches the weather data
  const getWeatherData = async (API_URL) => {
    setHasNoResults(false); // Reset the no results state
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("No results found");
      }
      const data = await response.json();
      // Extracting the necessary data from the API response
      // const temprature = Math.round(data.main.temp);
      // const description = data.weather[0].description;
      // const weatherIcon = Object.keys(weatherCode).find((icon) =>
      //   weatherCode[icon].includes(data.weather[0].id)
      // );
      const temprature = Math.round(data.list[0].main.temp);
      const description = data.list[0].weather[0].description;
      const weatherIcon = Object.keys(weatherCode).find((icon) =>
        weatherCode[icon].includes(data.list[0].weather[0].id)
      );

      setCurrentWeather(() => ({
        temprature,
        description,
        weatherIcon,
      }));
      // Call filterHourlyForecast with data.list
      filterHourlyForecast(
        data.list.map((item) => ({
          time: item.dt_txt, // or item.dt * 1000 if you want timestamp
          temp: item.main.temp,
          weather: item.weather,
        }))
      );
      searchInputRef.current.value = data.city.name; // Clear the search input after fetching data
      // Log the extracted data to the console
      console.log("Weather Icon:", weatherIcon);
      console.log("Temprature:", temprature, "°C");
      console.log("Description:", description);
      // Log the data to the console for debugging
      console.log(data);
    } catch {
      setHasNoResults(true);
    }
  };

  useEffect(() => {
    // Fetch weather data for a default city when the component mounts
    const defaultCity = "Bhopal"; // You can change this to any default city
    const API_KEY = import.meta.env.VITE_API_KEY; // Ensure you have your API key set in .env file
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${defaultCity}&appid=${API_KEY}&units=metric`;
    getWeatherData(API_URL);
  }, []);
  return (
    <div className="h-dvh w-full flex justify-center items-center bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200">
      <div className="w-96 max-sm:w-80 bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg shadow-lg flex flex-col gap-6 text-white">
        {/* Search Section */}
        <SearchSection
          getWeatherData={getWeatherData}
          searchInputRef={searchInputRef}
        />
        {hasNoResults ? (
          <NoResultDiv />
        ) : (
          <div className="">
            <CurrentWeather currentWeather={currentWeather} />
            {/* Hourly Forecast Section */}
            <HorizontalScroll hourlyForecast={hourlyForecast} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
