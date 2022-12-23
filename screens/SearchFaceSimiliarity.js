import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchFaceSimiliarity = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.searchFaceSimiliarityPressable}
      onPress={() => navigation.navigate("SearchResults")}
    >
      <View style={[styles.nameView, styles.mt43, styles.mr1]}>
        <Text style={styles.beatrizSilvaText}>Beatriz Silva</Text>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-261@3x.png")}
        />
        <Text style={styles.similarityText}>83% Similarity</Text>
      </View>
      <View style={[styles.nameView1, styles.mt35, styles.ml1]}>
        <Text style={styles.neliaCamposText}>Nelia Campos</Text>
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-2611@3x.png")}
        />
        <Text style={styles.similarityText1}>96% Similarity</Text>
      </View>
      <View style={[styles.nameView2, styles.mt35, styles.ml1]}>
        <Text style={styles.luziaBeltrandText}>Luzia Beltrand</Text>
        <Image
          style={styles.rectangleIcon2}
          resizeMode="cover"
          source={require("../assets/rectangle-2612@3x.png")}
        />
        <Text style={styles.similarityText2}>51% Similarity</Text>
      </View>
      <View style={[styles.nameView3, styles.mt35, styles.ml1]}>
        <Text style={styles.sofiaNabaisText}>Sofia Nabais</Text>
        <Image
          style={styles.rectangleIcon3}
          resizeMode="cover"
          source={require("../assets/rectangle-2613@3x.png")}
        />
        <Text style={styles.similarityText3}>28% Similarity</Text>
      </View>
      <View style={[styles.nameView4, styles.mt35, styles.ml1]}>
        <Text style={styles.conceioSousaText}>Conceição Sousa</Text>
        <Image
          style={styles.rectangleIcon4}
          resizeMode="cover"
          source={require("../assets/rectangle-2614@3x.png")}
        />
        <Text style={styles.similarityText4}>73% Similarity</Text>
      </View>
      <View style={[styles.toolbarView, styles.mt53]}>
        <View style={styles.rectangleView} />
        <Pressable
          style={styles.profilePressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileText}>Profile</Text>
          <Image
            style={styles.profileIcon}
            resizeMode="cover"
            source={require("../assets/profile@3x.png")}
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
            source={require("../assets/feed@3x.png")}
          />
        </Pressable>
        <Pressable
          style={styles.searchPressable}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.searchText}>Search</Text>
          <View style={styles.searchView}>
            <View style={styles.rectangleView1} />
            <Image
              style={styles.path99Icon}
              resizeMode="cover"
              source={require("../assets/path-99@3x.png")}
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
            source={require("../assets/icon-materialchatbubble@3x.png")}
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
            source={require("../assets/icon-materialgroup@3x.png")}
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml35: {
    marginLeft: 35,
  },
  mt43: {
    marginTop: 43,
  },
  mr1: {
    marginRight: 1,
  },
  mt35: {
    marginTop: 35,
  },
  ml1: {
    marginLeft: 1,
  },
  mt53: {
    marginTop: 53,
  },
  beatrizSilvaText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  similarityText: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 59,
  },
  nameView: {
    position: "relative",
    width: 302,
    height: 88,
  },
  neliaCamposText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  similarityText1: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 59,
  },
  nameView1: {
    position: "relative",
    width: 302,
    height: 88,
  },
  luziaBeltrandText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  similarityText2: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 59,
  },
  nameView2: {
    position: "relative",
    width: 302,
    height: 88,
  },
  sofiaNabaisText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  similarityText3: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 59,
  },
  nameView3: {
    position: "relative",
    width: 302,
    height: 88,
  },
  conceioSousaText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "center",
  },
  rectangleIcon4: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  similarityText4: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 59,
  },
  nameView4: {
    position: "relative",
    width: 302,
    height: 88,
  },
  rectangleView: {
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
  rectangleView1: {
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
  searchFaceSimiliarityPressable: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "center",
  },
});

export default SearchFaceSimiliarity;
