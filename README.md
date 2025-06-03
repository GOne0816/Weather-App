<h1 align="center">🌦️ Weather App</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-blue?logo=react" alt="React Badge" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8?logo=tailwindcss" alt="Tailwind CSS Badge" />
  <img src="https://img.shields.io/badge/OpenWeatherMap-API-orange?logo=OpenWeatherMap" alt="OpenWeatherMap Badge" />
</p>

<p align="center">
  <b>A modern, responsive weather application built with React and Tailwind CSS.</b><br>
  Instantly search for any city and view the current weather conditions along with a 48-hour hourly forecast.
</p>

---

## ✨ Features

- **City Search:** Instantly fetch weather data for any city using the OpenWeatherMap API.
- **Current Weather:** Displays temperature, weather description, and a dynamic weather icon.
- **48-Hour Forecast:** Scrollable horizontal forecast showing time, temperature, and weather icons for the next 48 hours.
- **Smooth UI:** Interactive horizontal scroll with drag and mouse wheel support.
- **Responsive Design:** Looks great on desktop and mobile devices.

---

## 🖥️ Demo

[Live Demo](https://g-1weatherapp.vercel.app/)

---

## 🚀 Tech Stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Vite](https://vitejs.dev/)

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/gone0816/weather-app.git
```

### 2. Change into the project directory

```bash
cd "Web Page Practice/Weather App"
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up your API key

- Create a `.env` file in the root directory (if it doesn't exist).
- Add your OpenWeatherMap API key:

```
VITE_API_KEY=your_openweathermap_api_key
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 📁 Project Structure

```
src/
  ├── Components/
  │   ├── CurrentWeather.jsx
  │   ├── HorizontalScroll.jsx
  │   ├── HourlyWeatherItem.jsx
  │   ├── NoResultDiv.jsx
  │   └── SearchSection.jsx
  ├── App.jsx
  ├── constants.js
  ├── index.css
  ├── App.css
  └── main.jsx
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

<p align="center">
  <b>Made with ❤️ by <a href="https://github.com/gone0816">GOne0816</a></b>