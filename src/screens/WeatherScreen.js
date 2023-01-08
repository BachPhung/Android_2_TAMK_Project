import { ImageBackground, View } from "react-native";
import { useEffect } from "react";
import { useToast } from "react-native-toast-notifications";
import { useStateValue } from "../context";
import * as Location from "expo-location";
import {
  cityFailure,
  cityFetchSuccess,
  citySetLatLon,
  citySetLocationKey,
  citySetName,
} from "../context/actions/CityAction";
import {
  weatherCurrentFetchSuccess,
  weatherDailyFetchSuccess,
  weatherFetchFailure,
  weatherFetchStart,
  weatherHourlyFetchSuccess,
} from "../context/actions/WeatherAction";
import {
  fetchLocationKeyByLatLon,
  fetchWeatherCurrent,
  fetchWeatherDaily,
  fetchWeatherHourly,
} from "../constant";
import { VerticalScroll } from "../components/VerticalScroll";
import { styles } from "../styles/styles";
import { getBackgroundImg } from "../util/helpers";

export default function WeatherScreen() {
  const [{ city, weather }, dispatch] = useStateValue();
  const toast = useToast();
  const { locationKey } = city;

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          toast.show("Permission to access location was denied", {
            type: "warning",
          });
        } else {
          toast.show("Fetching data", { type: "normal" });
        }
        const location = await Location.getCurrentPositionAsync({});
        dispatch(citySetLatLon(location.coords));
      } catch (err) {
        console.log(err);
      }
    })();
  }, [toast]);

  useEffect(() => {
    (async () => {
      try {
        const cityData = await fetchLocationKeyByLatLon(city.lat, city.lon);
        console.log("cityData: ", cityData);
        dispatch(citySetName(cityData.EnglishName));
        dispatch(citySetLocationKey(cityData.Key));
        dispatch(cityFetchSuccess());
      } catch (err) {
        console.log(err);
        dispatch(cityFailure());
      }
    })();
  }, [city.lat, city.lon]);
  useEffect(() => {
    (async () => {
      try {
        dispatch(weatherFetchStart());
        const data = await Promise.all([
          fetchWeatherCurrent(locationKey),
          fetchWeatherHourly(locationKey),
          fetchWeatherDaily(locationKey),
        ]);
        dispatch(weatherCurrentFetchSuccess(data[0][0]));
        dispatch(weatherHourlyFetchSuccess(data[1]));
        dispatch(weatherDailyFetchSuccess(data[2].DailyForecasts));
      } catch (err) {
        console.log(err);
        dispatch(weatherFetchFailure());
      }
    })();
  }, [city.name]);

  return (
    <ImageBackground
      source={
        weather.weatherCurrent
          ? getBackgroundImg(weather.weatherCurrent.WeatherText ?? null)
          : undefined
      }
      resizeMode={"cover"}
    >
      <View style={styles.container}>
        <VerticalScroll />
      </View>
    </ImageBackground>
  );
}
