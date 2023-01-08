import { ImageBackground, View } from "react-native";
import { useEffect } from "react";
import { useToast } from "react-native-toast-notifications";
import { useStateValue } from "../context";
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
  fetchLocationKeyByCityName,
  fetchWeatherCurrent,
  fetchWeatherDaily,
  fetchWeatherHourly,
} from "../constant";
import { VerticalScroll } from "../components/VerticalScroll";
import { styles } from "../styles/styles";
import { getBackgroundImg } from "../util/helpers";

export default function FavouriteScreen({ route }) {
  const [{ city, weather }, dispatch] = useStateValue();
  const { locationKey } = city;

  useEffect(() => {
    console.log("props: ", route.params.cityProps);
    (async () => {
      try {
        const cityData = await fetchLocationKeyByCityName(
          route.params.cityProps.trim()
        );
        dispatch(citySetName(cityData[0].EnglishName));
        dispatch(citySetLocationKey(cityData[0].Key));
        dispatch(cityFetchSuccess());
      } catch (err) {
        console.log(err);
        dispatch(cityFailure());
      }
    })();
  }, []);
  useEffect(() => {
    console.log("Fav");
    console.log("Name: ", city.name);
    console.log("Key: ", city.locationKey);
  }, [city.name, city.locationKey]);
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
  }, [city.name, city.locationKey]);

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
