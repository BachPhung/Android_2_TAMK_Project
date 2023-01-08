import React from "react";
import { Text, View } from "react-native";
import { useScrollState, useStateValue } from "../context";
import { styles } from "../styles/styles";

export const CityName = () => {
  const [{ city }] = useStateValue();
  const [{ position }] = useScrollState();

  return (
    <View
      style={{
        ...styles.flexBoxAlignCenter,
        zIndex: 10,
        width: "100%",
        backgroundColor: position <= 0 ? "transparent" : "white",
        borderBottomColor: position <= 0 ? "transparent" : "black",
        borderBottomWidth: 1,
        marginBottom: 10,
      }}
    >
      <Text style={styles.cityNameText}>{city.name}</Text>
    </View>
  );
};
