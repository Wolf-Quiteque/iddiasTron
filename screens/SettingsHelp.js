import * as React from "react";
import { Text, StyleSheet, Pressable, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingsHelp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingsHelpView}>
      <View style={[styles.navigationBarView, styles.mr37]}>
        <Text style={styles.helpText}>Help</Text>
        <Pressable
          style={styles.component2Pressable}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={styles.rectangleView} />
          <Image
            style={styles.path104Icon}
            resizeMode="cover"
            source={require("../assets/path-104.png")}
          />
        </Pressable>
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
        <Pressable
          style={styles.backwardArrowPressable}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/backward-arrow.png")}
          />
        </Pressable>
      </View>
      <Text
        style={[styles.gettingStartedUsingIDDIAS, styles.mt39, styles.mr31]}
      >
        <Text style={styles.gettingStartedText}>Getting started</Text>
        <Text style={styles.blankLineText}> </Text>
        <Text style={styles.usingIDDIASText}>Using IDDIAS</Text>
        <Text style={styles.blankLineText1}> </Text>
        <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
        <Text style={styles.blankLineText2}> </Text>
        <Text style={styles.accountQuestionsText}>Account Questions</Text>
        <Text style={styles.blankLineText3}> </Text>
        <Text style={styles.troubleshootingText}>Troubleshooting</Text>
      </Text>
      <Image
        style={[styles.iconIonicIosArrowForward, styles.mt_202, styles.mr37]}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosarrowforward.png")}
      />
      <Image
        style={[styles.iconIonicIosArrowForward1, styles.mt32, styles.mr37]}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosarrowforward.png")}
      />
      <Image
        style={[styles.iconIonicIosArrowForward2, styles.mt33, styles.mr37]}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosarrowforward.png")}
      />
      <Image
        style={[styles.iconIonicIosArrowForward3, styles.mt32, styles.mr37]}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosarrowforward.png")}
      />
      <Image
        style={[styles.iconIonicIosArrowForward4, styles.mt33, styles.mr37]}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosarrowforward.png")}
      />
      <View style={[styles.toolbarView, styles.mt432]}>
        <View style={styles.rectangleView1} />
        <Pressable
          style={styles.profilePressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileText}>Profile</Text>
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
  mr37: {
    marginRight: 37,
  },
  mt39: {
    marginTop: 39,
  },
  mr31: {
    marginRight: 31,
  },
  mt_202: {
    marginTop: -202,
  },
  mt32: {
    marginTop: 32,
  },
  mt33: {
    marginTop: 33,
  },
  mt432: {
    marginTop: 432,
  },
  helpText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -18.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
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
  component2Pressable: {
    position: "absolute",
    bottom: 4,
    left: 291,
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
  icon1: {
    marginTop: -9.5,
    width: "100%",
    height: "100%",
  },
  backwardArrowPressable: {
    position: "absolute",
    left: 0,
    top: "50%",
    width: 16,
    height: 16,
  },
  navigationBarView: {
    position: "relative",
    width: 307,
    height: 25,
  },
  gettingStartedText: {
    margin: 0,
  },
  blankLineText: {
    margin: 0,
  },
  usingIDDIASText: {
    margin: 0,
  },
  blankLineText1: {
    margin: 0,
  },
  termsConditions: {
    margin: 0,
  },
  blankLineText2: {
    margin: 0,
  },
  accountQuestionsText: {
    margin: 0,
  },
  blankLineText3: {
    margin: 0,
  },
  troubleshootingText: {
    margin: 0,
  },
  gettingStartedUsingIDDIAS: {
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 309,
  },
  iconIonicIosArrowForward: {
    position: "relative",
    width: 8,
    height: 13.99,
  },
  iconIonicIosArrowForward1: {
    position: "relative",
    width: 8,
    height: 13.99,
  },
  iconIonicIosArrowForward2: {
    position: "relative",
    width: 8,
    height: 13.99,
  },
  iconIonicIosArrowForward3: {
    position: "relative",
    width: 8,
    height: 13.99,
  },
  iconIonicIosArrowForward4: {
    position: "relative",
    width: 8,
    height: 13.99,
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
  settingsHelpView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "flex-end",
  },
});

export default SettingsHelp;
