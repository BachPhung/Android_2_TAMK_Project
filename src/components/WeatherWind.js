import { useEffect, useMemo, useState } from "react";
import { Text } from "react-native";
import { useStateValue } from "../context";
import { faCompass, faWind } from "@fortawesome/free-solid-svg-icons";
import { View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "../styles/styles";

export default function WeatherWind() {
  const [{ weather }] = useStateValue();
  const [windDeg, setWindDeg] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  useEffect(() => {
    if (!weather.weatherCurrent) return;
    const windInfo = weather.weatherCurrent.Wind;
    {
      setWindDeg(`${windInfo.Direction.Degrees} ${windInfo.Direction.English}`);
      setWindSpeed(
        `${windInfo.Speed.Metric.Value} ${windInfo.Speed.Metric.Unit}`
      );
    }
  }, [weather.weatherCurrent]);

  return (
    <View>
      <View style={styles.flexCenterView}>
        <View style={styles.weatherDayOverralIcon}>
          <FontAwesomeIcon icon={faWind} size={30} color="#FEFCF3" />
        </View>
        <Text
          style={{
            ...styles.weatherDayOverralText,
          }}
        >
          {windSpeed}
        </Text>
      </View>
      <View style={styles.flexCenterView}>
        <View style={styles.weatherDayOverralIcon}>
          <FontAwesomeIcon icon={faCompass} size={30} color="#FEFCF3" />
        </View>
        <Text style={styles.weatherDayOverralText}>{windDeg}</Text>
      </View>
    </View>
  );
}
