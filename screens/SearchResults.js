import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  View,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";

const SearchResults = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchResultsView}>
      <View style={[styles.heroView, styles.mt20, styles.mr1]}>
        <Image
          style={styles.profileIcon}
          resizeMode="cover"
          source={require("../assets/profile6.png")}
        />
        <View style={styles.nameView}>
          <Text style={styles.neliaCamposText}>Nelia Campos</Text>
          <Text style={styles.lisbonPTText}>Lisbon, PT</Text>
        </View>
        <Text style={styles.hiMyNameIsNeliaCamposI}>
          Hi! My name is Nelia Campos, I love nature, camping, taking fotos and
          literature. I'm a lawyer by profession.
        </Text>
      </View>
      <Pressable
        style={[styles.connectPressable, styles.mt_150, styles.ml227]}
        onPress={() => navigation.navigate("SearchConnected")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.iDText}>ID</Text>
      </Pressable>
      <Pressable
        style={[
          styles.iconAwesomeRocketchatPressable,
          styles.mt_27,
          styles.ml108,
        ]}
        onPress={() => navigation.navigate("Chat1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon-awesomerocketchat2.png")}
        />
      </Pressable>
      <Text style={[styles.galleryText, styles.mt133, styles.mr1]}>
        Gallery
      </Text>
      <View style={[styles.galleryView, styles.mt23, styles.mr1]}>
        <Carousel />
      </View>
      <Text style={[styles.interestsText, styles.mt30, styles.mr1]}>
        Interests
      </Text>
      <View style={[styles.interestsView, styles.mt23, styles.mr1]}>
        <Carousel />
      </View>
      <View style={[styles.toolbarView, styles.mt83]}>
        <View style={styles.rectangleView1} />
        <Pressable
          style={styles.profilePressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileText}>Profile</Text>
          <Image
            style={styles.profileIcon1}
            resizeMode="cover"
            source={require("../assets/profile.png")}
          />
        </Pressable>
        <Pressable
          style={styles.feedPressable}
          onPress={() => navigation.navigate("NewsFeed")}
        >
          <Text style={styles.feedText}>Feed</Text>
          <Image
            style={styles.feedIcon}
            resizeMode="cover"
            source={require("../assets/feed.png")}
          />
        </Pressable>
        <Pressable
          style={styles.searchPressable}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.searchText}>Search</Text>
          <View style={styles.searchView}>
            <View style={styles.rectangleView2} />
            <Image
              style={styles.path99Icon}
              resizeMode="cover"
              source={require("../assets/path-99.png")}
            />
          </View>
          <View style={styles.lineView} />
        </Pressable>
        <Pressable
          style={styles.chatPressable}
          onPress={() => navigation.navigate("Chat")}
        >
          <Text style={styles.chatText}>Chat</Text>
          <Image
            style={styles.iconMaterialChatBubble}
            resizeMode="cover"
            source={require("../assets/icon-materialchatbubble.png")}
          />
        </Pressable>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("GroupFeed")}
        >
          <Text style={styles.groupText}>Group</Text>
          <Image
            style={styles.iconMaterialGroup}
            resizeMode="cover"
            source={require("../assets/icon-materialgroup.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml122: {
    marginLeft: 122,
  },
  mt20: {
    marginTop: 20,
  },
  mr1: {
    marginRight: 1,
  },
  mt_150: {
    marginTop: -150,
  },
  ml227: {
    marginLeft: 227,
  },
  mt_27: {
    marginTop: -27,
  },
  ml108: {
    marginLeft: 108,
  },
  mt133: {
    marginTop: 133,
  },
  mt23: {
    marginTop: 23,
  },
  mt30: {
    marginTop: 30,
  },
  mt83: {
    marginTop: 83,
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
  icon: {
    width: "100%",
    height: "100%",
  },
  iconAwesomeRocketchatPressable: {
    position: "relative",
    width: 27.76,
    height: 24.4,
  },
  galleryText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#15abb5",
    textAlign: "center",
  },
  galleryView: {
    position: "relative",
    width: 302,
    height: 88,
  },
  interestsText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#15abb5",
    textAlign: "center",
  },
  interestsView: {
    position: "relative",
    width: 302,
    height: 196,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#15abb5",
  },
  profileText: {
    position: "absolute",
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  profileIcon1: {
    position: "absolute",
    marginTop: -19,
    marginLeft: -8.5,
    top: "50%",
    left: "50%",
    width: 17,
    height: 17,
  },
  profilePressable: {
    position: "absolute",
    marginTop: -15.5,
    top: "50%",
    right: 26,
    width: 37,
    height: 38,
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
    position: "absolute",
    top: 0,
    right: 2,
    bottom: 20.22,
    left: 2,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    marginTop: 13.75,
    top: "50%",
    left: 4.5,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
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
    position: "absolute",
    top: 0,
    right: 0.1,
    bottom: 0.1,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchView: {
    position: "absolute",
    marginLeft: -8.5,
    top: 19.5,
    left: "50%",
    width: 16,
    height: 16,
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
  searchPressable: {
    position: "absolute",
    marginLeft: 49,
    top: 0.5,
    left: "50%",
    width: 50,
    height: 57.5,
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
    position: "absolute",
    top: -0.5,
    left: 4.5,
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
    position: "absolute",
    top: -0.5,
    left: 4.5,
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
  searchResultsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "center",
  },
});

export default SearchResults;
