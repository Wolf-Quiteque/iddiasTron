import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileConnected1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileConnected1}>
      <View style={[styles.navigationBarView, styles.mr35]}>
        <Text style={styles.profileText}>Profile</Text>
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
      <View style={[styles.heroView, styles.mt20, styles.mr37]}>
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
        style={[styles.connectedPressable, styles.mt_150, styles.mr46]}
        onPress={() => navigation.navigate("SearchResults1")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.iDIDText}>IDID</Text>
      </Pressable>
      <Image
        style={[styles.iconAwesomeRocketchat, styles.mt_27, styles.mr120]}
        resizeMode="cover"
        source={require("../assets/icon-awesomerocketchat.png")}
      />
      <View style={[styles.galleryView, styles.mt133, styles.mr37]}>
        <Text style={styles.galleryText}>Gallery</Text>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-26120.png")}
        />
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-262.png")}
        />
        <Image
          style={styles.rectangleIcon2}
          resizeMode="cover"
          source={require("../assets/rectangle-920.png")}
        />
      </View>
      <View style={[styles.interestsView, styles.mt30, styles.mr37]}>
        <Text style={styles.interestsText}>Interests</Text>
        <Image
          style={styles.rectangleIcon3}
          resizeMode="cover"
          source={require("../assets/rectangle-26121.png")}
        />
        <Image
          style={styles.rectangleIcon4}
          resizeMode="cover"
          source={require("../assets/rectangle-2621.png")}
        />
        <Image
          style={styles.rectangleIcon5}
          resizeMode="cover"
          source={require("../assets/rectangle-9201.png")}
        />
        <Text style={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
        <Text
          style={styles.loremIpsumDolorSitAmetCo1}
        >{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor `}</Text>
        <Text style={styles.loremIpsumDolorSitAmetCo2}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </View>
      <View style={[styles.toolbarView, styles.mt83]}>
        <View style={styles.rectangleView1} />
        <Pressable
          style={styles.profilePressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileText1}>Profile</Text>
          <View style={styles.lineView} />
          <Image
            style={styles.union46Icon}
            resizeMode="cover"
            source={require("../assets/union-46.png")}
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
            source={require("../assets/feed5.png")}
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
              source={require("../assets/path-996.png")}
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
  mr46: {
    marginRight: 46,
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
    backgroundColor: "#0000ff",
  },
  iDIDText: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    left: 16,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  connectedPressable: {
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
    position: "absolute",
    top: 17.5,
    right: 14.92,
    bottom: 21,
    left: 14.92,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  rectangleView2: {
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
  profileConnected1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "flex-end",
  },
});

export default ProfileConnected1;
