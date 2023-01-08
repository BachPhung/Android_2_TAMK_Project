const cityFetchStart = () => ({
  type: "CITY_FETCH_START",
});
const cityFetchSuccess = () => ({
  type: "CITY_FETCH_SUCCESS",
});
const cityFailure = () => ({
  type: "CITY_FETCH_FAILURE",
});

const citySetLatLon = (location) => ({
  type: "SET_LAT_LON_CITY",
  payload: location,
});
const citySetName = (cityName) => ({
  type: "SET_NAME_CITY",
  payload: cityName,
});

const citySetLocationKey = (locationKey) => ({
  type: "SET_LOCATION_KEY",
  payload: locationKey,
});

export {
  cityFailure,
  cityFetchStart,
  cityFetchSuccess,
  citySetLatLon,
  citySetName,
  citySetLocationKey,
};
