import { ImageBackground, View } from "react-native";
import { useEffect } from "react";
import { useStateValue } from "../context";
import {
  cityFailure,
  cityFetchSuccess,
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
  }, [route]);
  useEffect(() => {}, [city.locationKey]);
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
        dispatch(weatherFetchFailure());
      }
    })();
  }, [city.locationKey]);

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
