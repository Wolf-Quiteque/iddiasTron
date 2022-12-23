import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchFaceSimiliarity1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchFaceSimiliarityView}>
      <ImageBackground
        style={[styles.faceIcon, styles.mr_142]}
        resizeMode="cover"
        source={require("../assets/face.png")}
      />
      <Pressable
        style={[styles.subtraction1Pressable, styles.mt_832]}
        onPress={() => navigation.navigate("SearchFaceSimiliarity")}
      >
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.mt_812]}
        resizeMode="cover"
        source={require("../assets/rectangle-574.png")}
      />
      <View style={[styles.rectangleView2, styles.mt_698, styles.mr35]} />
      <Text style={[styles.faceScanText, styles.mt143, styles.mr140]}>
        Face Scan
      </Text>
      <View style={[styles.toolbarView, styles.mt72]}>
        <View style={styles.component451}>
          <View style={styles.rectangleView3} />
        </View>
        <Pressable
          style={styles.profilePressable}
          onPress={() => navigation.navigate("SearchResults")}
        >
          <Text style={styles.profileText}>Profile</Text>
          <Image
            style={styles.profileIcon}
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
            <View style={styles.rectangleView4} />
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
  mr_142: {
    marginRight: -142,
  },
  mt_832: {
    marginTop: -832,
  },
  mt_812: {
    marginTop: -812,
  },
  mt_698: {
    marginTop: -698,
  },
  mr35: {
    marginRight: 35,
  },
  mt143: {
    marginTop: 143,
  },
  mr140: {
    marginRight: 140,
  },
  mt72: {
    marginTop: 72,
  },
  faceIcon: {
    position: "relative",
    width: 607.37,
    height: 851.9,
    transform: [
      {
        rotate: "355deg",
      },
    ],
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(249, 172, 25, 0.02)",
  },
  rectangleView1: {
    position: "absolute",
    top: 116,
    right: 35,
    left: 35,
    backgroundColor: "rgba(249, 172, 25, 0.02)",
    height: 385,
  },
  subtraction1Pressable: {
    position: "relative",
    backgroundColor: "rgba(249, 172, 25, 0.02)",
    width: 375,
    height: 812,
  },
  rectangleIcon: {
    position: "relative",
    width: 375,
    height: 812,
  },
  rectangleView2: {
    position: "relative",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 307,
    height: 387,
  },
  faceScanText: {
    position: "relative",
    fontSize: 20,
    letterSpacing: -0.32,
    lineHeight: 18,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#15abb5",
  },
  component451: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  profileText: {
    position: "absolute",
    top: "60.53%",
    left: "0%",
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  profileIcon: {
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
    top: "61.54%",
    left: "0%",
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  feedIcon: {
    position: "absolute",
    height: "48.16%",
    width: "85.71%",
    top: "0%",
    right: "7.14%",
    bottom: "51.84%",
    left: "7.14%",
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
    top: "73.91%",
    left: "9%",
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleView4: {
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
    height: "6.96%",
    width: "104%",
    top: "-3.48%",
    right: "0%",
    bottom: "96.52%",
    left: "-4%",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 2,
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
    top: "60.53%",
    left: "0%",
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  iconMaterialChatBubble: {
    position: "absolute",
    height: "46.6%",
    width: "62.96%",
    top: "-1.32%",
    right: "20.37%",
    bottom: "54.72%",
    left: "16.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    top: "60.53%",
    left: "0%",
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  iconMaterialGroup: {
    position: "absolute",
    height: "44.74%",
    width: "74.69%",
    top: "-1.32%",
    right: "12.45%",
    bottom: "56.58%",
    left: "12.86%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  searchFaceSimiliarityView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export default SearchFaceSimiliarity1;
