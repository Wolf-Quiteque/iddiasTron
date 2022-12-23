import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchPersonality = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.searchPersonalityPressable}
      onPress={() => navigation.navigate("SearchResults")}
    >
      <View style={[styles.navigationBarView, styles.ml54]}>
        <Text style={styles.searchPersonality}>Search - Personality</Text>
        <Pressable
          style={styles.iconMaterialNotificationsAcPressable}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon-materialnotificationsactive.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.nameView, styles.mt43, styles.mr1]}>
        <Text style={styles.ruiPatalimText}>Rui Patalim</Text>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-26115.png")}
        />
        <Text style={styles.similarityText}>43% Similarity</Text>
      </View>
      <View style={[styles.nameView1, styles.mt35, styles.ml1]}>
        <Text style={styles.neliaCamposText}>Nelia Campos</Text>
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-26116.png")}
        />
        <Text style={styles.similarityText1}>87% Similarity</Text>
      </View>
      <View style={[styles.nameView2, styles.mt35, styles.ml1]}>
        <Text style={styles.susanaCamaraText}>Susana Camara</Text>
        <Image
          style={styles.rectangleIcon2}
          resizeMode="cover"
          source={require("../assets/rectangle-26117.png")}
        />
        <Text style={styles.similarityText2}>51% Similarity</Text>
      </View>
      <View style={[styles.nameView3, styles.mt35, styles.ml1]}>
        <Text style={styles.jorgeSilvaText}>Jorge Silva</Text>
        <Image
          style={styles.rectangleIcon3}
          resizeMode="cover"
          source={require("../assets/rectangle-26118.png")}
        />
        <Text style={styles.similarityText3}>36% Similarity</Text>
      </View>
      <View style={[styles.nameView4, styles.mt35, styles.ml1]}>
        <Text style={styles.soniaFerreiraText}>Sonia Ferreira</Text>
        <Image
          style={styles.rectangleIcon4}
          resizeMode="cover"
          source={require("../assets/rectangle-26119.png")}
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
            <View style={styles.rectangleView1} />
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml54: {
    marginLeft: 54,
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
  searchPersonality: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -123.5,
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
    width: 247,
    height: 25,
  },
  ruiPatalimText: {
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
  susanaCamaraText: {
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
    fontSize: 14,
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
  jorgeSilvaText: {
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
    fontSize: 14,
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
  soniaFerreiraText: {
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
    fontSize: 14,
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
  searchPersonalityPressable: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "center",
  },
});

export default SearchPersonality;
