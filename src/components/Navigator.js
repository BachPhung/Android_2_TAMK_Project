import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import WeatherScreen from "../screens/WeatherScreen";
import AddFavouriteScreen from "../screens/AddFavouriteScreen";
import { useFavCityState } from "../context";
import FavouriteScreen from "../screens/FavouriteScreen";
import { useEffect } from "react";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export const MyNavigator = () => {
  const [favCity] = useFavCityState();
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "white",
        drawerInactiveBackgroundColor: "grey",
        drawerActiveTintColor: "black",
        drawerInactiveTintColor: "white",
        inactiveTintColor: "grey",
        drawerStyle: {
          backgroundColor: "#5837D0",
          width: 200,
        },
      }}
    >
      <Drawer.Screen
        options={{
          drawerLabelStyle: {
            textAlign: "center",
            fontSize: 18,
            width: 170,
          },
          drawerItemStyle: {
            marginTop: 20,
            marginBottom: 30,
          },
        }}
        name="Current"
        component={WeatherScreen}
      />
      <Drawer.Screen
        options={{
          drawerLabelStyle: {
            textAlign: "center",
            fontSize: 18,
            width: 170,
          },
        }}
        name="Add favourite"
        component={AddFavouriteScreen}
      />
      {favCity.map((city) => (
        <Drawer.Screen
          options={{
            drawerLabelStyle: {
              textAlign: "center",
              fontSize: 18,
              width: 170,
            },
            drawerItemStyle: {
              marginTop: 20,
              marginBottom: 30,
            },
          }}
          name={city}
          key={city}
          // component={<FavouriteScreen cityProps={city} />}
          component={FavouriteScreen}
          initialParams={{ cityProps: city }}
        />
      ))}
    </Drawer.Navigator>
  );
};
