import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileConnections from "../screens/ProfileConnections";
import SearchResults1 from "../screens/SearchResults1";
import Chat1 from "../screens/Chat1";

import { auth } from "../firebase";

const Stack = createStackNavigator();

const FriendsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileConnections" component={ProfileConnections} />

      <Stack.Screen name="SearchResults1" component={SearchResults1} />
      <Stack.Screen name="Chat1" component={Chat1} />
    </Stack.Navigator>
  );
};

export { FriendsNavigation };
