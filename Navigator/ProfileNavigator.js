import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../screens/Chat";
import ChatNewChat from "../screens/ChatNewChat";
import Chat1 from "../screens/Chat1";
import { auth } from "../firebase";
import Profile from "../screens/Profile";
import ProfileEdit from "../screens/ProfileEdit";
import ProfileEditGallery from "../screens/ProfileEditGallery";
import Notifications from "../screens/Notifications";
import ProfileConnections from "../screens/ProfileConnections";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserProfile" component={Profile} />
      <Stack.Screen name="ProfileConnections" component={ProfileConnections} />

      <Stack.Screen name="Notifications" component={Notifications} />

      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="ProfileEditGallery" component={ProfileEditGallery} />
    </Stack.Navigator>
  );
};

export { ProfileNavigator };
