import * as React from "react";
import { Text, StyleSheet, Pressable, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileEditGallery = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileEditGalleryView}>
      <View style={[styles.navigationBarView, styles.mr3]}>
        <Text style={styles.galleryText}>Gallery</Text>
        <Pressable
          style={styles.cancelPressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
        <Pressable
          style={styles.sendPressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.sendText}>Send</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.rectangleIcon, styles.mt45, styles.ml1]}
        resizeMode="cover"
        source={require("../assets/rectangle-5394@3x.png")}
      />

      <View style={[styles.galleryView, styles.mt43, styles.mr1]}>
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-26134@3x.png")}
        />
        <View style={styles.rectangleView} />
        <Image
          style={styles.rectangleIcon2}
          resizeMode="cover"
          source={require("../assets/rectangle-2624@3x.png")}
        />
        <Image
          style={styles.rectangleIcon3}
          resizeMode="cover"
          source={require("../assets/rectangle-9204@3x.png")}
        />
        <Image
          style={styles.rectangleIcon4}
          resizeMode="cover"
          source={require("../assets/rectangle-26135@3x.png")}
        />
        <Image
          style={styles.rectangleIcon5}
          resizeMode="cover"
          source={require("../assets/rectangle-2625@3x.png")}
        />
        <Image
          style={styles.rectangleIcon6}
          resizeMode="cover"
          source={require("../assets/rectangle-9205@3x.png")}
        />
        <Image
          style={styles.rectangleIcon7}
          resizeMode="cover"
          source={require("../assets/rectangle-26136@3x.png")}
        />
        <Image
          style={styles.rectangleIcon8}
          resizeMode="cover"
          source={require("../assets/rectangle-2626@3x.png")}
        />
        <Image
          style={styles.rectangleIcon9}
          resizeMode="cover"
          source={require("../assets/rectangle-9206@3x.png")}
        />
        <View style={styles.rectangleView1} />
        <Text style={styles.recentsText}>Recents</Text>
      </View>
      <View style={[styles.toolbarView, styles.mt43]}>
        <View style={styles.rectangleView2} />
        <View style={styles.profileView}>
          <Text style={styles.profileText}>Profile</Text>
          <View style={styles.lineView} />
          <Image
            style={styles.union46Icon}
            resizeMode="cover"
            source={require("../assets/union-46@3x.png")}
          />
        </View>
        <Pressable
          style={styles.feedPressable}
          onPress={() => navigation.navigate("NewsFeed")}
        >
          <Text style={styles.feedText}>Feed</Text>
          <Image
            style={styles.feedIcon}
            resizeMode="cover"
            source={require("../assets/feed5@3x.png")}
          />
        </Pressable>
        <Pressable
          style={styles.searchPressable}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.searchText}>Search</Text>
          <View style={styles.searchView}>
            <View style={styles.rectangleView3} />
            <Image
              style={styles.path99Icon}
              resizeMode="cover"
              source={require("../assets/path-996@3x.png")}
            />
          </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  mr3: {
    marginRight: 3,
  },
  mt45: {
    marginTop: 45,
  },
  ml1: {
    marginLeft: 1,
  },
  mt43: {
    marginTop: 43,
  },
  mr1: {
    marginRight: 1,
  },
  galleryText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -33,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  cancelText: {
    marginTop: -9.5,
    marginLeft: -151,
    fontSize: 16,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  cancelPressable: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  sendText: {
    marginLeft: 113,
    fontSize: 16,
    fontFamily: "Quicksand",
    color: "#15abb5",
    textAlign: "left",
  },
  sendPressable: {
    position: "absolute",
    left: "50%",
    top: 3,
  },
  navigationBarView: {
    position: "relative",
    width: 302,
    height: 25,
  },
  rectangleIcon: {
    position: "relative",
    width: 300,
    height: 150,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 55,
    left: 0,
    width: 88,
    height: 88,
  },
  rectangleView: {
    position: "absolute",
    top: 55,
    left: 0,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#707070",
    borderWidth: 1,
    width: 88,
    height: 88,
    opacity: 0.6,
  },
  rectangleIcon2: {
    position: "absolute",
    marginLeft: -44,
    top: 55,
    left: "50%",
    width: 88,
    height: 88,
  },
  rectangleIcon3: {
    position: "absolute",
    top: 55,
    right: 0,
    width: 88,
    height: 88,
  },
  rectangleIcon4: {
    position: "absolute",
    marginTop: -16.5,
    top: "50%",
    left: 0,
    width: 88,
    height: 88,
  },
  rectangleIcon5: {
    position: "absolute",
    marginTop: -16.5,
    marginLeft: -44,
    top: "50%",
    left: "50%",
    width: 88,
    height: 88,
  },
  rectangleIcon6: {
    position: "absolute",
    marginTop: -16.5,
    top: "50%",
    right: 0,
    width: 88,
    height: 88,
  },
  rectangleIcon7: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 88,
    height: 88,
  },
  rectangleIcon8: {
    position: "absolute",
    marginLeft: -44,
    bottom: 0,
    left: "50%",
    width: 88,
    height: 88,
  },
  rectangleIcon9: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 88,
    height: 88,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "#15abb5",
    height: 45,
  },
  recentsText: {
    position: "absolute",
    top: 13,
    left: 15,
    fontSize: 16,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  galleryView: {
    position: "relative",
    width: 302,
    height: 399,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#15abb5",
  },
  profileText: {
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
    position: "absolute",
    top: 17.5,
    right: 14.92,
    bottom: 21,
    left: 14.92,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  profileView: {
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
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path99Icon: {
    position: "absolute",
    top: -0.5,
    right: -0.61,
    bottom: -0.61,
    left: -0.5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  profileEditGalleryView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 36,
    alignItems: "center",
  },
});

export default ProfileEditGallery;
