import axios from "axios";
const apiKey = "y1vsphmKjU1Qc5n19MrsysFaAsCA8AkN";

// retrieve location-key of a city by name
const locationKeyURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=[CITY_NAME]&details=true`;
// const locationKeyURL = `http://localhost:8080/geoLocationByName.json`;

//retrive location-key & name of a city by lat/long
// const locationKeyByLatLonURL = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=[LAT],[LON]`;
const locationKeyByLatLonURL = `http://localhost:8080/geoLocationByLatLon.json`;

// retrive weather hourly (12 hours)
const weatherHourlyURL = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/[LOCATION_KEY]?apikey=${apiKey}&details=true&metric=true`;
// const weatherHourlyURL = `http://localhost:8080/weatherHourly.json`;

// retrive weather daily (5 days)
const weatherDailyURL = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/[LOCATION_KEY]?apikey=${apiKey}&details=true&metric=true`;
// const weatherDailyURL = `http://localhost:8080/weatherDaily.json`;

// retrieve weather current
const weatherCurrentURL = `http://dataservice.accuweather.com/currentconditions/v1/[LOCATION_KEY]?apikey=${apiKey}&details=true`;
// const weatherCurrentURL = `http://localhost:8080/weatherCurrent.json`;

export const weatherIconURL = (iconId) =>
  `https://developer.accuweather.com/sites/default/files/${iconId}-s.png`;

const fetchWeatherDaily = async (locationKey) => {
  const url = weatherDailyURL.replace("[LOCATION_KEY]", locationKey);
  console.log("url: ", url);
  const weatherData = await (await axios.get(url)).data;
  return weatherData;
};

const fetchWeatherCurrent = async (locationKey) => {
  const url = weatherCurrentURL.replace("[LOCATION_KEY]", locationKey);
  const weatherData = await (await axios.get(url)).data;
  return weatherData;
};

const fetchWeatherHourly = async (locationKey) => {
  const url = weatherHourlyURL.replace("[LOCATION_KEY]", locationKey);
  const weatherData = await (await axios.get(url)).data;
  return weatherData;
};

const fetchLocationKeyByCityName = async (cityName) => {
  const url = locationKeyURL.replace("[CITY_NAME]", cityName);
  console.log("url: ", url);
  const locationData = await (await axios.get(url)).data;
  console.log("location", locationData);
  return locationData;
};

const fetchLocationKeyByLatLon = async (lat, lon) => {
  const url = locationKeyByLatLonURL
    .replace("[LAT]", lat)
    .replace("[LON]", lon);
  const weatherData = await (await axios.get(url)).data;
  return weatherData;
};

export {
  fetchWeatherDaily,
  fetchWeatherHourly,
  fetchWeatherCurrent,
  fetchLocationKeyByCityName,
  fetchLocationKeyByLatLon,
};
