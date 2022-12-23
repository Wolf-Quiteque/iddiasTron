import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import FaceRecognition from "../screens/FaceRecognition";
import Interests from "../screens/Interests";
import AI from "../screens/AI";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />

      <Stack.Screen name="FaceRecognition" component={FaceRecognition} />
      <Stack.Screen name="Interests" component={Interests} />
      <Stack.Screen name="AI" component={AI} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
