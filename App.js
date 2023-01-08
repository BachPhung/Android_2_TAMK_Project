import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { ToastProvider } from "react-native-toast-notifications";
import {
  ContextProvider,
  FavCityContextProvider,
  ScrollContextProvider,
} from "./src/context";
import { MyNavigator } from "./src/components/Navigator";

export default function App() {
  return (
    <ToastProvider>
      <ContextProvider>
        <ScrollContextProvider>
          <FavCityContextProvider>
            <NavigationContainer>
              <MyNavigator />
            </NavigationContainer>
          </FavCityContextProvider>
        </ScrollContextProvider>
      </ContextProvider>
    </ToastProvider>
  );
}
