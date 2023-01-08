export const weatherReducer = (state, action) => {
  switch (action.type) {
    case "WEATHER_FETCH_START": {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case "WEATHER_CURRENT_FETCH_SUCCESS": {
      return {
        ...state,
        loading: false,
        weatherCurrent: action.payload,
        error: false,
      };
    }
    case "WEATHER_HOURLY_FETCH_SUCCESS": {
      return {
        ...state,
        loading: false,
        weatherHourly: action.payload,
        error: false,
      };
    }
    case "WEATHER_DAILY_FETCH_SUCCESS": {
      return {
        ...state,
        loading: false,
        weatherDaily: action.payload,
        error: false,
      };
    }
    case "WEATHER_FETCH_FAILURE": {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
