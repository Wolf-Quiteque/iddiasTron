import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/Search";
import SearchName from "../screens/SearchName";
import SearchProfession from "../screens/SearchProfession";
import SearchInterests from "../screens/SearchInterests";
import SearchFaceSimiliarity from "../screens/SearchFaceSimiliarity";

import { auth } from "../firebase";

const Stack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchName" component={SearchName} />
      <Stack.Screen name="SearchProfession" component={SearchProfession} />
      <Stack.Screen name="SearchInterests" component={SearchInterests} />
      <Stack.Screen
        name="SearchFaceSimiliarity"
        component={SearchFaceSimiliarity}
      />
    </Stack.Navigator>
  );
};

export { SearchNavigator };
