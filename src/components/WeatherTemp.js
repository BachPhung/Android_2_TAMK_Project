// import { useMemo } from "react";
import { Text, View } from "react-native";
import { useStateValue } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTemperatureThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import { styles } from "../styles/styles";
import { useMemo } from "react";
export default function WeatherTemp() {
  const [{ weather }] = useStateValue();

  const weatherCurrentTemp = useMemo(() => {
    const { weatherCurrent } = weather;
    if (!weatherCurrent) return null;
    const currentTempInfo = weatherCurrent.Temperature.Metric;
    return currentTempInfo.Value;
  }, [weather.weatherCurrent]);

  return (
    <View style={styles.flexCenterView}>
      {weatherCurrentTemp && (
        <>
          <View style={styles.weatherDayOverralIcon}>
            <FontAwesomeIcon
              icon={faTemperatureThreeQuarters}
              size={30}
              color="#FEFCF3"
            />
          </View>
          <Text
            style={{
              ...styles.weatherDayOverralText,
            }}
          >
            {weatherCurrentTemp + "\u00B0 C"}
          </Text>
        </>
      )}
    </View>
  );
}
