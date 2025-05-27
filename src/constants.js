// Maps weather condition codes to categories.
// Each key represents a weather type, with an array of codes from the weather API.
export const weatherCode = {
  clear: [800], // Clear sky

  clouds: [
    801, // few clouds
    802, // scattered clouds
    803, // broken clouds
    804, // overcast clouds
  ],

  mist: [
    701, // mist
    711, // smoke
    721, // haze
    731, // dust
    741, // fog
    751, // sand
    761, // dust
    762, // volcanic ash
    771, // squalls
    781, // tornado
  ],

  rain: [
    500, // light rain
    501, // moderate rain
    520, // light intensity shower rain
    521, // shower rain
    522, // heavy intensity shower rain
  ],

  moderate_heavy_rain: [
    502, // heavy intensity rain
    503, // very heavy rain
    504, // extreme rain
    511, // freezing rain
  ],

  snow: [
    600, // light snow
    601, // snow
    602, // heavy snow
    611, // sleet
    612, // light shower sleet
    613, // shower sleet
    615, // light rain and snow
    616, // rain and snow
    620, // light shower snow
    621, // shower snow
    622, // heavy shower snow
  ],

  thunder: [
    200, // thunderstorm with light rain
    201, // thunderstorm with rain
    202, // thunderstorm with heavy rain
    210, // light thunderstorm
    211, // thunderstorm
    212, // heavy thunderstorm
    221, // ragged thunderstorm
  ],

  thunder_rain: [
    230, // thunderstorm with light drizzle
    231, // thunderstorm with drizzle
    232, // thunderstorm with heavy drizzle
  ],

  no_result: [], // fallback or undefined
};

