import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.profileView1}>
        <View style={[styles.navigationBarView, styles.ml120]}>
          <Text style={styles.profileText}>Profile</Text>
          <Pressable
            style={styles.component1Pressable}
            onPress={() => navigation.navigate("Settings")}
          >
            <View style={styles.rectangleView} />
            <Image
              style={styles.path104Icon}
              resizeMode="cover"
              source={require("../assets/path-104@3x.png")}
            />
          </Pressable>
          <Pressable
            style={styles.iconMaterialNotificationsAcPressable}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon-materialnotificationsactive13@3x.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.heroView, styles.mt39, styles.mr1]}>
          <Image
            style={styles.profileIcon}
            resizeMode="cover"
            source={require("../assets/profile5@3x.png")}
          />
          <View style={styles.nameView}>
            <Text style={styles.johnDoeText}>John Doe</Text>
            <Text style={styles.sanFranciscoCA}>San Francisco, CA</Text>
          </View>
          <Text style={styles.hiMyNameIsJohnImACre}>
            Hi! My name is John, I’m a creative geek from San Francisco, CA. I
            enjoy creating eye candy solutions for web and mobile apps. Contact
            me at john@mail.com
          </Text>
          <Pressable
            style={styles.editPressable}
            onPress={() => navigation.navigate("ProfileEdit")}
          >
            <View style={styles.component1View}>
              <View style={styles.rectangleView1} />
              <Image
                style={styles.path110Icon}
                resizeMode="cover"
                source={require("../assets/path-110@3x.png")}
              />
            </View>
          </Pressable>
          <Pressable
            style={styles.connectionsPressable}
            onPress={() => navigation.navigate("ProfileConnections")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/connections@3x.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.galleryView, styles.mt27, styles.mr1]}>
          <Text style={styles.galleryText}>Gallery</Text>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-26135@3x.png")}
          />
          <Image
            style={styles.rectangleIcon1}
            resizeMode="cover"
            source={require("../assets/rectangle-2625@3x.png")}
          />
          <Image
            style={styles.rectangleIcon2}
            resizeMode="cover"
            source={require("../assets/rectangle-9205@3x.png")}
          />
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("ProfileEditGallery")}
          >
            <Image
              style={styles.icon2}
              resizeMode="cover"
              // source={require("../assets/@3x.png" )}
            />
          </Pressable>
        </View>
        <View style={[styles.interestsView, styles.mt30, styles.mr1]}>
          <Text style={styles.interestsText}>Interests</Text>
          <Image
            style={styles.rectangleIcon3}
            resizeMode="cover"
            source={require("../assets/rectangle-26136@3x.png")}
          />
          <Image
            style={styles.rectangleIcon4}
            resizeMode="cover"
            source={require("../assets/rectangle-2626@3x.png")}
          />
          <Image
            style={styles.rectangleIcon5}
            resizeMode="cover"
            source={require("../assets/rectangle-9206@3x.png")}
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
        <View style={[styles.toolbarView, styles.mt30]}>
          <View style={styles.rectangleView2} />
          <View style={styles.profileView}>
            <Text style={styles.profileText1}>Profile</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml120: {
    marginLeft: 120,
  },
  mt39: {
    marginTop: 39,
  },
  mr1: {
    marginRight: 1,
  },
  mt27: {
    marginTop: 27,
  },
  mt30: {
    marginTop: 30,
  },
  profileText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -90.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path104Icon: {
    position: "absolute",
    top: 0,
    right: 0.8,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  component1Pressable: {
    position: "absolute",
    bottom: 4,
    left: 165,
    width: 16,
    height: 16,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  iconMaterialNotificationsAcPressable: {
    position: "absolute",
    right: 34,
    bottom: 0,
    width: 20,
    height: 19.56,
  },
  navigationBarView: {
    position: "relative",
    width: 181,
    height: 25,
  },
  profileIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 56,
    height: 56,
  },
  johnDoeText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  sanFranciscoCA: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 12,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  nameView: {
    position: "absolute",
    marginLeft: -82,
    top: 8,
    left: "50%",
    width: 102,
    height: 37,
  },
  hiMyNameIsJohnImACre: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 24,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 303,
    height: 98,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path110Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  component1View: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  editPressable: {
    position: "absolute",
    marginLeft: 4,
    top: 8,
    left: "50%",
    width: 16,
    height: 16,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  connectionsPressable: {
    position: "absolute",
    top: 11,
    right: 1,
    width: 34,
    height: 34,
  },
  heroView: {
    position: "relative",
    width: 302,
    height: 184,
  },
  galleryText: {
    position: "absolute",
    marginLeft: -28,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#21ae9c",
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
  icon2: {
    marginTop: -65.5,
    marginLeft: 131,
    width: "100%",
    height: "100%",
  },
  pressable: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 20,
    height: 20,
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
    // fontFamily: "Quicksand",
    color: "#21ae9c",
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
    // fontFamily: "Quicksand",
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
    // fontFamily: "Quicksand",
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
    // fontFamily: "Quicksand",
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
  rectangleView2: {
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
    // fontFamily: "Quicksand",
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
    // fontFamily: "Quicksand",
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
    // fontFamily: "Quicksand",
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
    // fontFamily: "Quicksand",
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
    // fontFamily: "Quicksand",
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
  profileView1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 36,
    alignItems: "center",
  },
});

export default Profile;
