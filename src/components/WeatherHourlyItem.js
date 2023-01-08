import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Box, Flex } from "@react-native-material/core";
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../styles/styles";

export const WeatherHourlyItem = ({ props }) => {
  return (
    <View>
      <Box style={styles.weatherHourlyItem}>
        <Flex direction="column" justify="between" items="center" h={"100%"}>
          <Text>{props.time}</Text>
          <Image
            style={{
              height: 30,
              width: 30,
            }}
            source={{
              uri: `https://developer.accuweather.com/sites/default/files/${props.weatherIconId}-s.png`,
            }}
          />
          <Text>{props.weatherTemp + "\u00B0 C"}</Text>
        </Flex>
      </Box>
    </View>
  );
};
