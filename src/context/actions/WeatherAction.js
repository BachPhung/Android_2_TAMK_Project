const weatherFetchStart = () => ({
  type: "WEATHER_FETCH_START",
});
const weatherCurrentFetchSuccess = (weatherInfo) => ({
  type: "WEATHER_CURRENT_FETCH_SUCCESS",
  payload: weatherInfo,
});
const weatherDailyFetchSuccess = (weatherInfo) => ({
  type: "WEATHER_DAILY_FETCH_SUCCESS",
  payload: weatherInfo,
});
const weatherHourlyFetchSuccess = (weatherInfo) => ({
  type: "WEATHER_HOURLY_FETCH_SUCCESS",
  payload: weatherInfo,
});
const weatherFetchFailure = () => ({
  type: "WEATHER_FETCH_FAILURE",
});

export {
  weatherFetchFailure,
  weatherCurrentFetchSuccess,
  weatherDailyFetchSuccess,
  weatherHourlyFetchSuccess,
  weatherFetchStart,
};
