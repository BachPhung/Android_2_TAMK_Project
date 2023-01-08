import { weatherReducer } from "./WeatherReducer";
import { cityReducer } from "./CityReducer";

export const mainReducer = ({ weather, city }, action) => {
  return {
    city: cityReducer(city, action),
    weather: weatherReducer(weather, action),
  };
};
