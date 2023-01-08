import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import WeatherTemp from "./WeatherTemp";
import WeatherWind from "./WeatherWind";
import { WeatherDescription } from "./WeatherDescription";
import { WeatherDaily } from "./WeatherDaily";
import { WeatherHourlyScroll } from "./WeatherHourlyScroll";
import { CityName } from "./CityName";
import { styles } from "../styles/styles";
import { Footer } from "./Footer";
import { useScrollState } from "../context";
import { scrollSetPosition } from "../context/actions/ScrollAction";

export const VerticalScroll = () => {
  const [_, dispatch] = useScrollState();
  return (
    <ScrollView
      horizontal={false}
      contentContainerStyle={{
        height: "144%",
      }}
      onScroll={(e) =>
        dispatch(scrollSetPosition(e.nativeEvent.contentOffset.y))
      }
      scrollEventThrottle={10}
      stickyHeaderIndices={[0]}
    >
      <CityName key={"cityName"} />
      <WeatherTemp key={"temp"} />
      <WeatherWind key={"wind"} />
      <WeatherDescription key={"description"} />
      <WeatherHourlyScroll key={"hourly"} />
      <WeatherDaily key={"daily"} />
      <Footer key={"footer"} />
    </ScrollView>
  );
};
