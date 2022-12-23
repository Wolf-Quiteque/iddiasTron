import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
  ScrollView,
} from "react-native";
import NewsFeed from "../screens/NewsFeed";
import GroupFeed from "../screens/GroupFeed";
import Search from "../screens/Search";
import { ChatNavigator } from "./ChatNavigator";
import { SearchNavigator } from "./SearchNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
          backgroundColor: "#15abb5",
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "black",
        showLabel: false,
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="NewsFeed"
        component={NewsFeed}
        options={{
          tabBarLabel: "News Feed",
          tabBarIcon: () => (
            <Image
              style={styles.feedIcon}
              resizeMode="cover"
              source={require("../assets/feed5@3x.png")}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: () => (
            <Image
              style={styles.iconMaterialChatBubble}
              resizeMode="cover"
              source={require("../assets/icon-materialchatbubble@3x.png")}
            />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Group"
        component={GroupFeed}
        options={{
          tabBarLabel: "Group",
          tabBarIcon: () => (
            <Image
              style={styles.iconMaterialGroup}
              resizeMode="cover"
              source={require("../assets/icon-materialgroup@3x.png")}
            />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => (
            <Image
              style={styles.path99Icon}
              resizeMode="cover"
              source={require("../assets/path-996@3x.png")}
            />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Image
              style={styles.union46Icon}
              resizeMode="cover"
              source={require("../assets/union-46@3x.png")}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mr35: {
    marginRight: 35,
  },
  mt20: {
    marginTop: 20,
  },
  mr37: {
    marginRight: 37,
  },
  mt_150: {
    marginTop: -150,
  },
  mr43: {
    marginRight: 43,
  },
  mt_27: {
    marginTop: -27,
  },
  mr120: {
    marginRight: 120,
  },
  mt133: {
    marginTop: 133,
  },
  mt30: {
    marginTop: 30,
  },
  mt83: {
    marginTop: 83,
  },
  profileText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -91.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  iconMaterialNotificationsAcPressable: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 20,
    height: 19.56,
  },
  navigationBarView: {
    position: "relative",
    width: 183,
    height: 25,
  },
  profileIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 56,
    height: 56,
  },
  neliaCamposText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  lisbonPTText: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  nameView: {
    position: "absolute",
    marginLeft: -82,
    top: 8,
    left: "50%",
    width: 106,
    height: 37,
  },
  hiMyNameIsNeliaCamposI: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 303,
    height: 75,
  },
  heroView: {
    position: "relative",
    width: 302,
    height: 163,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#2699fb",
  },
  iDText: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    left: 23,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  connectPressable: {
    position: "relative",
    width: 60,
    height: 30,
  },
  iconAwesomeRocketchat: {
    position: "relative",
    width: 27.76,
    height: 24.4,
  },
  galleryText: {
    position: "absolute",
    marginLeft: -28,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#15abb5",
    textAlign: "center",
  },
  rectangleIcon: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 88,
    height: 88,
  },
  rectangleIcon1: {
    position: "absolute",
    marginLeft: -44,
    bottom: 0,
    left: "50%",
    width: 88,
    height: 88,
  },
  rectangleIcon2: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 88,
    height: 88,
  },
  galleryView: {
    position: "relative",
    width: 302,
    height: 131,
  },
  interestsText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#15abb5",
    textAlign: "center",
  },
  rectangleIcon3: {
    position: "absolute",
    marginTop: -76.5,
    top: "50%",
    left: 0,
    width: 88,
    height: 88,
  },
  rectangleIcon4: {
    position: "absolute",
    marginTop: -76.5,
    marginLeft: -44,
    top: "50%",
    left: "50%",
    width: 88,
    height: 88,
  },
  rectangleIcon5: {
    position: "absolute",
    marginTop: -76.5,
    top: "50%",
    right: 0,
    width: 88,
    height: 88,
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 10,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 89,
    height: 88,
  },
  loremIpsumDolorSitAmetCo1: {
    position: "absolute",
    marginLeft: -44,
    bottom: 0,
    left: "50%",
    fontSize: 10,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 89,
    height: 88,
  },
  loremIpsumDolorSitAmetCo2: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 10,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 89,
    height: 88,
  },
  interestsView: {
    position: "relative",
    width: 302,
    height: 239,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#15abb5",
  },
  profileText1: {
    position: "absolute",
    marginTop: 13.75,
    top: "50%",
    left: 6.5,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    marginLeft: -27,
    top: -2,
    left: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 2,
    width: 52,
    height: 4,
  },
  union46Icon: {
    width: 17,
    height: 17.71,
  },
  profilePressable: {
    position: "absolute",
    marginTop: -35,
    top: "50%",
    right: 19.5,
    width: 50,
    height: 57.5,
  },
  feedText: {
    position: "absolute",
    marginTop: 4.5,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  feedIcon: {
    width: 17,
    height: 17.71,
  },
  feedPressable: {
    position: "absolute",
    marginTop: -16.5,
    top: "50%",
    left: 30,
    width: 28,
    height: 39,
  },
  searchText: {
    position: "absolute",
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path99Icon: {
    width: 17,
    height: 17.71,
  },
  searchView: {
    position: "absolute",
    marginLeft: -8,
    top: 0,
    left: "50%",
    width: 16,
    height: 16,
  },
  searchPressable: {
    position: "absolute",
    marginLeft: 53.5,
    top: 20,
    left: "50%",
    width: 40,
    height: 38,
  },
  chatText: {
    position: "absolute",
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  iconMaterialChatBubble: {
    width: 17,
    height: 17.71,
  },
  chatPressable: {
    position: "absolute",
    marginTop: -15.5,
    marginLeft: -87.5,
    top: "50%",
    left: "50%",
    width: 27,
    height: 38,
  },
  groupText: {
    position: "absolute",
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  iconMaterialGroup: {
    width: 26.14,
    height: 17,
  },
  groupPressable: {
    position: "absolute",
    marginTop: -15.5,
    marginLeft: -18.5,
    top: "50%",
    left: "50%",
    width: 35,
    height: 38,
  },
  toolbarView: {
    position: "relative",
    width: 375,
    height: 71,
  },
  searchResults1View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "flex-end",
  },
});

export default BottomTabNavigator;
