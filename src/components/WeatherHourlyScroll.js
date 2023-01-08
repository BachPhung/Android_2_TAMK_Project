import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { WeatherHourlyItem } from "./WeatherHourlyItem";
import { styles } from "../styles/styles";
import { useStateValue } from "../context";
import { weatherHourLyTransform } from "../util/helpers";

export const WeatherHourlyScroll = () => {
  const [{ weather }] = useStateValue();
  const [weatherHourly, setWeatherHourly] = useState([]);
  useEffect(() => {
    if (!weather.weatherHourly) return;
    const transformedData = weather.weatherHourly.map((item) =>
      weatherHourLyTransform(item)
    );
    setWeatherHourly([...transformedData]);
  }, [weather.weatherHourly]);
  return (
    <View style={{ height: 110, width: "100%", marginTop: 20 }}>
      <ScrollView horizontal={true}>
        <View style={styles.weatherHourlyScroll}>
          {weatherHourly &&
            weatherHourly.map((item, idx) => (
              <WeatherHourlyItem key={idx} props={item} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};
