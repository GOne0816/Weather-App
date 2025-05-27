const SearchSection = ({ getWeatherData, searchInputRef }) => {
  const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your OpenWeatherMap API key
  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.querySelector("input[type='search']");
    const cityName = input.value.trim();
    // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
    if (cityName) {
      console.log(`Searching for weather in: ${cityName}`);
      // Here you can add the logic to fetch weather data for the city
      getWeatherData(API_URL);
      input.value = ""; // Clear the input after submission
    } else {
      console.error("City name cannot be empty");
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
          console.log(
            `Fetching weather for current location: ${latitude}, ${longitude}`
          );
          getWeatherData(API_URL);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  return (
    <div>
      <div className="flex items-center gap-3">
        <form
          action="#"
          className="relative h-14 w-full"
          onSubmit={handleSubmit}
        >
          <span className="material-symbols-rounded absolute z-10 flex justify-center items-center h-full px-2">
            search
          </span>
          <input
            ref={searchInputRef}
            type="search"
            placeholder="Enter a city name"
            className="h-full w-full bg-white/30 backdrop-blur-md border border-white/50 text-white placeholder-white/80 rounded-lg px-4 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-white/60 capitalize font-semibold trangition-all duration-100"
            required
          />
        </form>
        <button
          className="flex justify-center items-center active:bg-white/20 rounded-lg backdrop-blur-md border border-transparent active:border active:border-white/50 aspect-square w-14"
          onClick={handleLocationClick}
        >
          <span className="material-symbols-rounded">my_location</span>
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
