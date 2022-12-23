import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import SearchFaceSimiliarity from "../screens/SearchFaceSimiliarity";
// import SearchFaceSimiliarity1 from "../screens/SearchFaceSimiliarity1";
// import SearchName from "../screens/SearchName";
// import SearchProfession from "../screens/SearchProfession";
// import SearchPersonality from "../screens/SearchPersonality";
// import ProfileEdit from "../screens/ProfileEdit";
// import SearchResults1 from "../screens/SearchResults1";
// import ProfileConnected1 from "../screens/ProfileConnected1";
// import ProfileConnections from "../screens/ProfileConnections";
// import Settings1 from "../screens/Settings1";
// import Settings2 from "../screens/Settings2";
// import Settings from "../screens/Settings";
// import ProfileEditGallery from "../screens/ProfileEditGallery";
import Profile from "../screens/Profile";
// import SearchConnected from "../screens/SearchConnected";
// import SearchResults from "../screens/SearchResults";
// import SearchInterests from "../screens/SearchInterests";
// import Search from "../screens/Search";
// import NewsFeed from "../screens/NewsFeed";
// import FaceRecognition from "../screens/FaceRecognition";
// import Interests from "../screens/Interests";
// import SignUp from "../screens/SignUp";
// import SignIn from "../screens/SignIn";
// import FirstScreen from "../screens/FirstScreen";
// import FirstScreen1 from "../screens/FirstScreen1";
// import Notifications from "../screens/Notifications";
// import Chat from "../screens/Chat";
// import ChatEdit from "../screens/ChatEdit";
// import ChatNewChat from "../screens/ChatNewChat";
import Chat1 from "../screens/Chat1";
// import Chat2 from "../screens/Chat2";
// import ChatVdeoCall from "../screens/ChatVdeoCall";
// import GroupFeed from "../screens/GroupFeed";
// import GroupFeedEdit from "../screens/GroupFeedEdit";
// import GroupCreationMembers from "../screens/GroupCreationMembers";
// import GroupCreationNaming from "../screens/GroupCreationNaming";
// import GroupFeed1 from "../screens/GroupFeed1";
// import GroupFeed2 from "../screens/GroupFeed2";
// import ProfileHistory from "../screens/ProfileHistory";
// import SettingsHelp from "../screens/SettingsHelp";
// import SettingsLanguage from "../screens/SettingsLanguage";
// import Settings3 from "../screens/Settings3";
// import SettingsDeletedAccount from "../screens/SettingsDeletedAccount";
// import SettingsDeleteAccount from "../screens/SettingsDeleteAccount";
// import SettingsLogOut from "../screens/SettingsLogOut";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen
        name="SearchFaceSimiliarity"
        component={SearchFaceSimiliarity}
        options={(props) => ({
          headerShown: true,

          headerTitle: "Search - Face Similiarity",
        })}
      />
      <Stack.Screen
        name="SearchFaceSimiliarity1"
        component={SearchFaceSimiliarity1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchName"
        component={SearchName}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchProfession"
        component={SearchProfession}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchPersonality"
        component={SearchPersonality}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchResults1"
        component={SearchResults1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileConnected1"
        component={ProfileConnected1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileConnections"
        component={ProfileConnections}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings1"
        component={Settings1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings2"
        component={Settings2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileEditGallery"
        component={ProfileEditGallery}
        options={{ headerShown: false }}
    /> */}
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      {/* 
      <Stack.Screen
        name="SearchConnected"
        component={SearchConnected}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResults}
        options={(props) => ({
          headerShown: true,

          headerTitle: "Search - Results",
        })}
      />
      <Stack.Screen
        name="SearchInterests"
        component={SearchInterests}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FaceRecognition"
        component={FaceRecognition}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Interests"
        component={Interests}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FirstScreen1"
        component={FirstScreen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatEdit"
        component={ChatEdit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatNewChat"
        component={ChatNewChat}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Chat1"
        component={Chat1}
        options={{ headerShown: false }}
      />{" "}
      {/*
      <Stack.Screen
        name="Chat2"
        component={Chat2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatVdeoCall"
        component={ChatVdeoCall}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GroupFeed"
        component={GroupFeed}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GroupFeedEdit"
        component={GroupFeedEdit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GroupCreationMembers"
        component={GroupCreationMembers}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GroupCreationNaming"
        component={GroupCreationNaming}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GroupFeed1"
        component={GroupFeed1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GroupFeed2"
        component={GroupFeed2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileHistory"
        component={ProfileHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsHelp"
        component={SettingsHelp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsLanguage"
        component={SettingsLanguage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings3"
        component={Settings3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsDeletedAccount"
        component={SettingsDeletedAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsDeleteAccount"
        component={SettingsDeleteAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsLogOut"
        component={SettingsLogOut}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
