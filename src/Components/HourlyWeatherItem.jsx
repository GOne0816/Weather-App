import { weatherCode } from "../constants";

const getIconName = (weatherId) => {
  for (const [icon, codes] of Object.entries(weatherCode)) {
    if (codes.includes(weatherId)) return icon;
  }
  return "no_result";
};

const HourlyWeatherItem = ({ time, temp, weather }) => {
  const date = new Date(time);
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  let iconName = "no_result";
  if (weather && weather[0]) {
    iconName = getIconName(weather[0].id);
  }

  return (
    <div>
      <li className="min-w-20 flex flex-col justify-center items-center p-2 rounded-lg bg-white/10 backdrop-blur-md text-white">
        <p className="text-sm">{formattedTime}</p>
        {weather && weather[0] && (
          <img
            src={`icons/${iconName}.svg`}
            alt={weather[0].description || ""}
            className="w-7 aspect-square"
          />
        )}
        <p className="">{Math.round(temp)} °C</p>
      </li>
    </div>
  );
};

export default HourlyWeatherItem;
