import { createContext, useContext, useReducer } from "react";
import { mainReducer } from "./reducers/mainReducer";
import "react-native-gesture-handler";
import { scrollReducer } from "./reducers/ScrollReducer";
import { favCityReducer } from "./reducers/FavCityReducer";

const INITIAL_STATE = {
  weather: {
    loading: false,
    weatherCurrent: null,
    weatherHourly: null,
    weatherDaily: null,
    error: false,
  },
  city: {
    lat: 0,
    lon: 0,
    name: "",
    locationKey: 0,
    loading: false,
  },
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => (
  <Context.Provider value={useReducer(mainReducer, INITIAL_STATE)}>
    {children}
  </Context.Provider>
);
export const useStateValue = () => useContext(Context);

const SCROLL_STATE = {
  position: 0,
};

export const ScrollContext = createContext(SCROLL_STATE);
export const ScrollContextProvider = ({ children }) => (
  <ScrollContext.Provider value={useReducer(scrollReducer, SCROLL_STATE)}>
    {children}
  </ScrollContext.Provider>
);

export const useScrollState = () => useContext(ScrollContext);

const INITIAL_FAV_CITY = [];
export const FavCityContext = createContext(INITIAL_FAV_CITY);
export const FavCityContextProvider = ({ children }) => (
  <FavCityContext.Provider value={useReducer(favCityReducer, INITIAL_FAV_CITY)}>
    {children}
  </FavCityContext.Provider>
);
export const useFavCityState = () => useContext(FavCityContext);
