import { useRef, useEffect } from "react";
import HourlyWeatherItem from "./HourlyWeatherItem";

const HorizontalScroll = ({ hourlyForecast = [] }) => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;

    // Scroll with wheel
    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Mouse Events for Dragging
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.scrollBehavior = "auto"; // Disable smooth while dragging
    scrollRef.current.classList.add("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const dx = e.pageX - startX.current;
    scrollRef.current.scrollLeft = scrollStart.current - dx;
  };

  const stopDragging = () => {
    isDragging.current = false;
    scrollRef.current.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      className="flex overflow-x-auto space-x-4 py-4 cursor-grab active:cursor-grabbing scroll-smooth select-none border-t-2 border-white/30 no-scrollbar"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Hourly Weather Forcast Section */}
      <div className="">
        <ul className="flex gap-4 overflow-x-auto list-none no-scrollbar ">
          {hourlyForecast.map((hourlyWeather) => (
            <HourlyWeatherItem
              key={hourlyWeather.dt || hourlyWeather.time}
              time={hourlyWeather.dt || hourlyWeather.time}
              temp={hourlyWeather.temp}
              weather={hourlyWeather.weather}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HorizontalScroll;
