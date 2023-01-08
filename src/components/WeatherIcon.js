import { Image, View } from "react-native";

export default function WeatherIcon({ code }) {
  const URL = `https://openweathermap.org/img/wn/${code}@2x.png`;
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Image source={URL} style={{ width: 90, height: 90 }} />
    </View>
  );
}
