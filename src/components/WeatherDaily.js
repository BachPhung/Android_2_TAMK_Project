import { useMemo } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../styles/styles";
import * as Progress from "react-native-progress";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../context";
import { weatherDailyTransform } from "../util/helpers";
import { weatherIconURL } from "../constant";

export const WeatherDaily = () => {
  const [{ weather }] = useStateValue();
  const weatherDailyData = useMemo(() => {
    return (
      weather.weatherDaily &&
      weather.weatherDaily.map((item) => weatherDailyTransform(item))
    );
  }, [weather.weatherDaily]);
  const isNight = new Date().getHours() >= 12;

  return (
    <View style={styles.weatherDailyContainer}>
      {weatherDailyData &&
        weatherDailyData.map((item, idx) => (
          <View style={styles.weatherDailyBox} key={idx}>
            <Text style={{ flex: 1, marginLeft: 5 }}>
              {idx === 0 ? "Today" : item.dayTime}
            </Text>
            <Image
              style={{ ...styles.weatherIconItem, flex: 1 }}
              source={{
                uri: weatherIconURL(isNight ? item.night.icon : item.day.icon),
              }}
            />
            <View style={{ flex: 2 }}>
              <Text
                style={{ textAlign: "center" }}
              >{`L: ${item.temp.min}\u00B0 H: ${item.temp.max}\u00B0`}</Text>
            </View>
            <View style={{ flex: 2 }}>
              <View style={styles.flexBoxAlignCenter}>
                <FontAwesomeIcon icon={faCloud} size={20} color={"grey"} />
              </View>
              <Progress.Bar
                progress={isNight ? item.night.cloudCover : item.day.cloudCover}
                width={120}
              />
            </View>
          </View>
        ))}
    </View>
  );
};
