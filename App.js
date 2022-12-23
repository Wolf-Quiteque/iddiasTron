const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import * as Font from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";
import AppRoute from "./Navigator/Navigator";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  return (
    <>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <AppRoute />
          </NavigationContainer>
        </GestureHandlerRootView>
      </Provider>
    </>
  );
};
export default App;
