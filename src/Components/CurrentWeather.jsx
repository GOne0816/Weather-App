const CurrentWeather = ({ currentWeather }) => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center gap-2 p-4 ">
        <img
          src={`/icons/${currentWeather.weatherIcon}.svg`}
          alt={`Weather icon for ${currentWeather.description}`}
          loading="lazy"
          className="size-36 aspect-square"
        />
        <h1 className="flex text-6xl font-bold">
          {currentWeather.temprature} <span className="text-3xl">°C</span>
        </h1>
        <p className="capitalize">{currentWeather.description}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
