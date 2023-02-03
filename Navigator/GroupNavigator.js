import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GroupFeed from "../screens/GroupFeed";
import GroupFeedEdit from "../screens/GroupFeedEdit";
import GroupCreationNaming from "../screens/GroupCreationNaming";
import GroupCreationMembers from "../screens/GroupCreationMembers";

const Stack = createStackNavigator();

const GroupNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GroupFeedEdit" component={GroupFeedEdit} />
      <Stack.Screen
        name="GroupCreationNaming"
        component={GroupCreationNaming}
      />
      <Stack.Screen
        name="GroupCreationMembers"
        component={GroupCreationMembers}
      />
    </Stack.Navigator>
  );
};

export { GroupNavigator };
