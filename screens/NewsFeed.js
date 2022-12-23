import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewsFeed = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newsFeedView}>
      <View style={[styles.navigationBarView, styles.mr135]}>
        <Text style={styles.newsFeedText}>News Feed</Text>
      </View>
      <Pressable
        style={[
          styles.iconMaterialNotificationsAcPressable,
          styles.mt_20,
          styles.mr37,
        ]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon-materialnotificationsactive@3x.png")}
        />
      </Pressable>
      <View style={[styles.inputView, styles.mt12, styles.mr37]}>
        <View style={styles.component1View}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.path99Icon}
            resizeMode="cover"
            source={require("../assets/path-99@3x.png")}
          />
        </View>
      </View>
      <ScrollView
        style={[styles.scrollGroup2, styles.mt13, styles.mr40]}
        contentContainerStyle={styles.scrollGroup2Content}
      >
        <View style={styles.postsView}>
          <Text style={styles.loremIpsumDolorSitAmetCo}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor #incididunt ero labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco poriti
            laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <ImageBackground
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle216@3x.png")}
          />
          <View style={styles.likesCommentsView}>
            <View style={styles.likesView}>
              <Text style={styles.text}>609</Text>
              <View style={styles.componentView}>
                <Image
                  style={styles.heartIcon}
                  resizeMode="cover"
                  source={require("../assets/heart@3x.png")}
                />
                <View style={styles.rectangleView1} />
              </View>
            </View>
          </View>
          <View style={styles.titleView}>
            <Text style={styles.thingsAboutYourPersonality}>
              5 Things about your personality
            </Text>
            <Text style={styles.hAgoText}>1h ago</Text>
          </View>
        </View>
        <View style={[styles.postsView1, styles.mt20]}>
          <Text style={styles.loremIpsumDolorSitAmetCo1}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor #incididunt ero labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco poriti
            laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Image
            style={styles.rectangleIcon1}
            resizeMode="cover"
            source={require("../assets/rectangle-216@3x.png")}
          />
          <View style={styles.likesCommentsView1}>
            <View style={styles.likesView1}>
              <Text style={styles.text1}>721</Text>
              <View style={styles.componentView1}>
                <Image
                  style={styles.heartIcon1}
                  resizeMode="cover"
                  source={require("../assets/heart1@3x.png")}
                />
                <View style={styles.rectangleView2} />
              </View>
            </View>
          </View>
          <View style={styles.titleView1}>
            <Text style={styles.motivationalQuizText}>Motivational Quiz</Text>
            <Text style={styles.hAgoText1}>1h ago</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt20: {
    marginTop: 20,
  },
  scrollGroup2Content: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
  mr135: {
    marginRight: 135,
  },
  mt_20: {
    marginTop: -20,
  },
  mr37: {
    marginRight: 37,
  },
  mt12: {
    marginTop: 12,
  },
  mt13: {
    marginTop: 13,
  },
  mr40: {
    marginRight: 40,
  },
  mt24: {
    marginTop: 24,
  },
  newsFeedText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -52,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 105,
  },
  navigationBarView: {
    position: "relative",
    width: 104,
    height: 25,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  iconMaterialNotificationsAcPressable: {
    position: "relative",
    width: 20,
    height: 19.56,
  },
  rectangleView: {
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
  component1View: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 16,
    width: 16,
    height: 16,
  },
  inputView: {
    position: "relative",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 302,
    height: 48,
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    bottom: 32,
    left: 1,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 296,
    height: 74,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    right: 1,
    left: 0,
    height: 170,
  },
  text: {
    position: "absolute",
    top: 0,
    right: -1,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  heartIcon: {
    position: "absolute",
    top: 1,
    right: 0,
    bottom: 0.88,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  componentView: {
    position: "absolute",
    top: 1,
    bottom: 1,
    left: 0,
    width: 16,
  },
  likesView: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 48,
  },
  likesCommentsView: {
    position: "absolute",
    bottom: 0,
    left: 1,
    width: 48,
    height: 18,
  },
  thingsAboutYourPersonality: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 0,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 217,
  },
  hAgoText: {
    position: "absolute",
    marginTop: -9.5,
    top: "50%",
    right: -1,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "right",
    width: 45,
  },
  titleView: {
    position: "absolute",
    marginTop: 14.5,
    top: "50%",
    right: 0,
    left: 1,
    height: 19,
  },
  postsView: {
    width: "99.33%",
    position: "relative",
    height: 341,
    alignSelf: "flex-end",
  },
  loremIpsumDolorSitAmetCo1: {
    position: "absolute",
    bottom: 0,
    left: 3,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 296,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 3,
    maxWidth: "100%",
    overflow: "hidden",
    height: 170,
  },
  text1: {
    position: "absolute",
    top: 0,
    right: -1,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  heartIcon1: {
    position: "absolute",
    top: 1,
    right: 0,
    bottom: 0.88,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  componentView1: {
    position: "absolute",
    top: 1,
    bottom: 1,
    left: 0,
    width: 16,
  },
  likesView1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 45,
  },
  likesCommentsView1: {
    position: "absolute",
    bottom: 33,
    left: 3,
    width: 45,
    height: 18,
  },
  motivationalQuizText: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 0,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 118,
  },
  hAgoText1: {
    position: "absolute",
    marginTop: -9.5,
    top: "50%",
    right: -1,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "right",
    width: 45,
  },
  titleView1: {
    position: "absolute",
    marginTop: -1.5,
    top: "50%",
    right: 0,
    left: 0,
    height: 19,
  },
  postsView1: {
    alignSelf: "stretch",
    position: "relative",
    height: 373,
  },
  scrollGroup2: {
    width: 298,
    height: 579,
    maxWidth: 298,
  },
  rectangleView3: {
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
    width: 39,
  },
  profileIcon: {
    position: "absolute",
    marginTop: -19,
    marginLeft: -9,
    top: "50%",
    left: "50%",
    width: 17,
    height: 17,
  },
  profilePressable: {
    position: "absolute",
    marginTop: -15.5,
    top: "50%",
    right: 25,
    width: 38,
    height: 38,
  },
  feedText: {
    position: "absolute",
    marginTop: 13.75,
    top: "50%",
    left: 11,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 29,
  },
  feedIcon: {
    position: "absolute",
    marginTop: -11.25,
    top: "50%",
    left: 15,
    width: 20,
    height: 20,
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
  feedView: {
    position: "absolute",
    top: 0.5,
    left: 19,
    width: 50,
    height: 57.5,
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
    width: 41,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path99Icon1: {
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
    marginTop: -15.5,
    marginLeft: 53.5,
    top: "50%",
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
    width: 28,
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
    width: 37,
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
    width: 36,
    height: 38,
  },
  toolbarView: {
    position: "relative",
    width: 375,
    height: 71,
  },
  newsFeedView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "flex-end",
  },
});

export default NewsFeed;
