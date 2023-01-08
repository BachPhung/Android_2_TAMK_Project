import { StyleSheet } from "react-native";

const WIDTH_HOURLY_ITEM = 70;
const WITTH_HOURLY_SCROLL = WIDTH_HOURLY_ITEM * 13;

export const styles = StyleSheet.create({
  container: {},
  flexCenterView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    backgroundColor: "transparent",
  },
  weatherDayOverralText: {
    fontSize: 20,
    textAlign: "center",
    width: "50%",
    margin: 10,
    flex: 1.5,
    justifyContent: "center",
    backgroundColor: "transparent",
    color: "#FEFCF3",
  },
  weatherDayOverralIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    backgroundColor: "transparent",
  },
  weatherHourlyScroll: {
    width: WITTH_HOURLY_SCROLL,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
  weatherHourlyItem: {
    height: "100%",
    width: 70,
    backgroundColor: "#5BC0F8",
    marginLeft: 3,
    marginRight: 3,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
  },
  cityNameText: {
    fontSize: 35,
    marginBottom: 18,
  },
  weatherDailyContainer: {
    width: "100%",
    marginTop: 30,
  },
  weatherIconItem: {
    height: 30,
    width: 30,
  },
  weatherDailyBox: {
    height: 50,
    width: "100%",
    backgroundColor: "#5BC0F8",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  flexBoxAlignCenter: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
