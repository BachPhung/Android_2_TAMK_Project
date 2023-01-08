import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEnvelope,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { Linking } from "react-native";
import { Pressable } from "@react-native-material/core";

export const Footer = () => {
  const handlePress = () => {
    Linking.openURL(
      "https://github.com/BachPhung/Android_2_TAMK_Project/issues"
    );
  };
  return (
    <>
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
            padding: 4,
          }}
        >
          <View
            style={{
              ...styles.flexBoxAlignCenter,
              flexDirection: "row",
              justifyContent: "center",
              height: 25,
              padding: 2,
            }}
          >
            <TouchableOpacity onPress={handlePress}>
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                style={styles.weatherIconItem}
                color="white"
                size={25}
              ></FontAwesomeIcon>
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 20, marginLeft: 8 }}>
              Report an issue
            </Text>
          </View>
          <View
            style={{
              ...styles.flexBoxAlignCenter,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                textAlign: "left",
                padding: 2,
              }}
            >
              If you encounter any issues or problems while using this app,
              please do not hesitate to inform us.
            </Text>
          </View>
        </View>
      </View>
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
            padding: 4,
          }}
        >
          <View
            style={{
              ...styles.flexBoxAlignCenter,
              flexDirection: "row",
              justifyContent: "center",
              height: 25,
              padding: 2,
            }}
          >
            <Pressable onPress={handlePress}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={styles.weatherIconItem}
                color="white"
                size={25}
              ></FontAwesomeIcon>
            </Pressable>
            <Text style={{ color: "white", fontSize: 20, marginLeft: 8 }}>
              Contact
            </Text>
          </View>
          <View
            style={{
              ...styles.flexBoxAlignCenter,
              marginTop: 10,
            }}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  textAlign: "left",
                  padding: 2,
                }}
              >
                Email: account@email.com
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  textAlign: "left",
                  padding: 2,
                }}
              >
                Tel: 0123456789
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
