import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { Button } from "@react-native-material/core";
import { useEffect, useRef, useState } from "react";
import { useFavCityState } from "../context";
import { cityAddFavourite } from "../context/actions/CityFavAction";

export default function AddFavouriteScreen() {
  const [input, setInput] = useState("");
  const [favCity, dispatch] = useFavCityState();
  const handleAdd = () => {
    dispatch(cityAddFavourite(input));
  };
  return (
    <View
      style={{
        ...styles.weatherDailyBox,
        height: "100%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Add favourite country to list</Text>
      <View style={{ width: "100%" }}>
        <TextInput
          style={{
            margin: 16,
            width: "90%",
            height: 30,
            backgroundColor: "white",
            fontSize: 20,
            textAlign: "center",
          }}
          onChangeText={setInput}
          value={input}
        />
      </View>
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}
