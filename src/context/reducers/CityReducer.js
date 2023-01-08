export const cityReducer = (state, action) => {
  switch (action.type) {
    case "CITY_FETCH_START": {
      return {
        ...state,
        lat: 0,
        lon: 0,
        name: "",
        loading: true,
        error: false,
      };
    }
    case "CITY_FETCH_SUCCESS": {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case "CITY_FETCH_FAILURE": {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case "SET_LAT_LON_CITY": {
      return {
        ...state,
        lat: action.payload.latitude,
        lon: action.payload.longitude,
      };
    }
    case "SET_NAME_CITY": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "SET_LOCATION_KEY": {
      return {
        ...state,
        locationKey: action.payload,
      };
    }
    default:
      return state;
  }
};
