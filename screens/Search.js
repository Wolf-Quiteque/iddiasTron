import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchView2}>
      <View style={[styles.navigationBarView, styles.ml67]}>
        <Text style={styles.searchSimiliarityText}>Search Similiarity</Text>
        <Pressable
          style={styles.iconMaterialNotificationsAcPressable}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={"../assets/icon-materialnotificationsactive.png"}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.faceSimiliarityPressable, styles.mt25, styles.ml1]}
        onPress={() => navigation.navigate("SearchFaceSimiliarity")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.faceText}>Face</Text>
      </Pressable>
      <Pressable
        style={[styles.namePressable, styles.mt60, styles.ml1]}
        onPress={() => navigation.navigate("SearchName")}
      >
        <View style={styles.rectangleView1} />
        <Text style={styles.nameText}>Name</Text>
      </Pressable>
      <Pressable
        style={[styles.personalityPressable, styles.mt60, styles.ml1]}
        onPress={() => navigation.navigate("SearchPersonality")}
      >
        <View style={styles.rectangleView2} />
        <Text style={styles.personalityText}>Personality</Text>
      </Pressable>
      <Pressable
        style={[styles.interestsPressable, styles.mt60, styles.ml1]}
        onPress={() => navigation.navigate("SearchInterests")}
      >
        <View style={styles.rectangleView3} />
        <Text style={styles.interestsText}>Interests</Text>
      </Pressable>
      <Pressable
        style={[styles.professionPressable, styles.mt60, styles.ml1]}
        onPress={() => navigation.navigate("SearchProfession")}
      >
        <View style={styles.rectangleView4} />
        <Text style={styles.professionText}>Profession</Text>
      </Pressable>
      <View style={[styles.toolbarView, styles.mt61]}>
        <View style={styles.rectangleView5} />
        <Pressable
          style={styles.profilePressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileText}>Profile</Text>
          <Image
            style={styles.profileIcon}
            resizeMode="cover"
            source={"../assets/profile.png"}
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
            source={"../assets/feed.png"}
          />
        </Pressable>
        <View style={styles.searchView1}>
          <Text style={styles.searchText}>Search</Text>
          <View style={styles.searchView}>
            <View style={styles.rectangleView6} />
            <Image
              style={styles.path99Icon}
              resizeMode="cover"
              source={"../assets/path-99.png"}
            />
          </View>
          <View style={styles.lineView} />
        </View>
        <Pressable
          style={styles.chatPressable}
          onPress={() => navigation.navigate("Chat1")}
        >
          <Text style={styles.chatText}>Chat</Text>
          <Image
            style={styles.iconMaterialChatBubble}
            resizeMode="cover"
            source={"../assets/icon-materialchatbubble.png"}
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
            source={"../assets/icon-materialgroup.png"}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml67: {
    marginLeft: 67,
  },
  mt25: {
    marginTop: 25,
  },
  ml1: {
    marginLeft: 1,
  },
  mt60: {
    marginTop: 60,
  },
  mt61: {
    marginTop: 61,
  },
  searchSimiliarityText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -117,
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
    width: 234,
    height: 25,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#21ae9c",
  },
  faceText: {
    position: "absolute",
    marginTop: -14,
    marginLeft: -25,
    top: "50%",
    left: "50%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
  },
  faceSimiliarityPressable: {
    position: "relative",
    width: 302,
    height: 70,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#21ae9c",
  },
  nameText: {
    position: "absolute",
    marginTop: -14,
    marginLeft: -31,
    top: "50%",
    left: "50%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
  },
  namePressable: {
    position: "relative",
    width: 302,
    height: 70,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#21ae9c",
  },
  personalityText: {
    position: "absolute",
    marginTop: -14,
    marginLeft: -60,
    top: "50%",
    left: "50%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
  },
  personalityPressable: {
    position: "relative",
    width: 302,
    height: 70,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#21ae9c",
  },
  interestsText: {
    position: "absolute",
    marginTop: -14,
    marginLeft: -47,
    top: "50%",
    left: "50%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
  },
  interestsPressable: {
    position: "relative",
    width: 302,
    height: 70,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#21ae9c",
  },
  professionText: {
    position: "absolute",
    marginTop: -14,
    marginLeft: -55,
    top: "50%",
    left: "50%",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
  },
  professionPressable: {
    position: "relative",
    width: 302,
    height: 70,
  },
  rectangleView5: {
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
  rectangleView6: {
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
  searchView1: {
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
  searchView2: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "center",
  },
});

export default Search;
