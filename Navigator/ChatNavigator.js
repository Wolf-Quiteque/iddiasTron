import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../screens/Chat";
import ChatNewChat from "../screens/ChatNewChat";
import Chat1 from "../screens/Chat1";
import { auth } from "../firebase";

const Stack = createStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Chat" component={Chat} />

      <Stack.Screen name="Chat1" component={Chat1} />
      <Stack.Screen name="ChatNewChat" component={ChatNewChat} />
    </Stack.Navigator>
  );
};

export { ChatNavigator };
