import React, { useMemo } from "react";
import { Text, View } from "react-native";
import { useStateValue } from "../context";
import { styles } from "../styles/styles";
import { weatherDailyTransform } from "../util/helpers";

export const WeatherDescription = () => {
  const [{ weather }] = useStateValue();
  const weatherDailyTodayData = useMemo(() => {
    return (
      weather.weatherDaily && weatherDailyTransform(weather.weatherDaily[0])
    );
  }, [weather.weatherDaily]);
  const isNight = new Date().getHours() >= 12;
  return (
    <View
      style={{
        ...styles.flexBoxAlignCenter,
        marginTop: 20,
      }}
    >
      <View
        style={{
          ...styles.flexCenterView,
          borderRadius: 10,
          width: "98%",
          backgroundColor: "#3A4F7A",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {weatherDailyTodayData && (
          <>
            <View>
              <Text style={{ color: "white", fontSize: 20, padding: 8 }}>
                {isNight
                  ? weatherDailyTodayData.night.weather
                  : weatherDailyTodayData.day.weather}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  textAlign: "left",
                  padding: 8,
                }}
              >
                {isNight
                  ? weatherDailyTodayData.night.desciptionLong
                  : weatherDailyTodayData.day.desciptionLong}
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};
