import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const GroupFeed1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupFeed1View}>
      <View style={[styles.navigationBarView, styles.mr35]}>
        <Text style={styles.sameNamesText}>Same Names</Text>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("GroupFeed2")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.iconMaterialNotificationsAcPressable}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon-materialnotificationsactive.png")}
          />
        </Pressable>
      </View>
      <ScrollView
        style={[styles.scrollGroup3, styles.mt28, styles.mr17]}
        contentContainerStyle={styles.scrollGroup3Content}
      >
        <View style={styles.postsView2}>
          <View style={styles.postsView}>
            <View style={styles.rectangleView} />
            <Text style={styles.excepteurSintOccaecatCupida}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim.
            </Text>
            <View style={styles.likesCommentsView}>
              <View style={styles.likesView}>
                <Text style={styles.text}>609</Text>
                <View style={styles.componentView}>
                  <Image
                    style={styles.heartIcon}
                    resizeMode="cover"
                    source={require("../assets/heart2.png")}
                  />
                  <View style={styles.rectangleView1} />
                </View>
              </View>
              <View style={styles.commentsView}>
                <Text style={styles.text1}>120</Text>
                <Image
                  style={styles.componentIcon}
                  resizeMode="cover"
                  source={require("../assets/component.png")}
                />
              </View>
            </View>
            <View style={styles.titleView}>
              <Text style={styles.nameSurnameText}>Name Surname</Text>
              <Text style={styles.hAgoText}>1h ago</Text>
              <Image
                style={styles.component17Icon}
                resizeMode="cover"
                source={require("../assets/component-171.png")}
              />
            </View>
            <Image
              style={styles.maskGroup1}
              resizeMode="cover"
              source={require("../assets/mask-group-1.png")}
            />
          </View>
          <View style={styles.postsView1}>
            <View style={styles.rectangleView2} />
            <Text style={styles.excepteurSintOccaecatCupida1}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim.
            </Text>
            <View style={styles.likesCommentsView1}>
              <View style={styles.likesView1}>
                <Text style={styles.text2}>609</Text>
                <View style={styles.componentView1}>
                  <Image
                    style={styles.heartIcon1}
                    resizeMode="cover"
                    source={require("../assets/heart3.png")}
                  />
                  <View style={styles.rectangleView3} />
                </View>
              </View>
              <View style={styles.commentsView1}>
                <Text style={styles.text3}>120</Text>
                <Image
                  style={styles.componentIcon1}
                  resizeMode="cover"
                  source={require("../assets/component.png")}
                />
              </View>
            </View>
            <View style={styles.titleView1}>
              <Text style={styles.nameSurnameText1}>Name Surname</Text>
              <Text style={styles.hAgoText1}>1h ago</Text>
              <Image
                style={styles.component18Icon}
                resizeMode="cover"
                source={require("../assets/component-181.png")}
              />
            </View>
            <Image
              style={styles.maskGroup11}
              resizeMode="cover"
              source={require("../assets/mask-group-1.png")}
            />
          </View>
        </View>
      </ScrollView>
      <View style={[styles.toolbarView, styles.mt23]}>
        <View style={styles.rectangleView4} />
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
            source={require("../assets/feed19.png")}
          />
        </Pressable>
        <Pressable
          style={styles.searchPressable}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.searchText}>Search</Text>
          <View style={styles.searchView}>
            <View style={styles.rectangleView5} />
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
            source={require("../assets/icon-materialgroup23.png")}
          />
          <View style={styles.lineView} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollGroup3Content: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
  mr35: {
    marginRight: 35,
  },
  mt28: {
    marginTop: 28,
  },
  mr17: {
    marginRight: 17,
  },
  mt23: {
    marginTop: 23,
  },
  sameNamesText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -107.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  icon: {
    marginTop: -11.5,
    marginLeft: 83.5,
    width: "100%",
    height: "100%",
  },
  pressable: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 24,
    height: 24,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  iconMaterialNotificationsAcPressable: {
    position: "absolute",
    right: 51,
    bottom: 2,
    width: 20,
    height: 19.56,
  },
  navigationBarView: {
    position: "relative",
    width: 215,
    height: 25,
  },
  rectangleView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 184,
  },
  excepteurSintOccaecatCupida: {
    position: "absolute",
    bottom: 48,
    left: 24,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 293,
    height: 56,
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
  componentIcon: {
    position: "absolute",
    top: 1,
    bottom: 1,
    left: 0,
    maxHeight: "100%",
    width: 16,
  },
  commentsView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 45,
  },
  likesCommentsView: {
    position: "absolute",
    bottom: 23,
    left: 24,
    width: 124,
    height: 18,
  },
  nameSurnameText: {
    position: "absolute",
    marginTop: -13,
    marginLeft: -98,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  hAgoText: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    right: -1,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  component17Icon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  titleView: {
    position: "absolute",
    marginTop: 32,
    top: "50%",
    right: 24,
    left: 24,
    height: 40,
  },
  maskGroup1: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 200,
  },
  postsView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 384,
  },
  rectangleView2: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    height: 184,
  },
  excepteurSintOccaecatCupida1: {
    position: "absolute",
    bottom: 48,
    left: 24,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 293,
    height: 56,
  },
  text2: {
    position: "absolute",
    top: 0,
    right: -1,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#2699fb",
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
  rectangleView3: {
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
    width: 48,
  },
  text3: {
    position: "absolute",
    top: 0,
    right: -1,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  componentIcon1: {
    position: "absolute",
    top: 1,
    bottom: 1,
    left: 0,
    maxHeight: "100%",
    width: 16,
  },
  commentsView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 45,
  },
  likesCommentsView1: {
    position: "absolute",
    bottom: 23,
    left: 24,
    width: 124,
    height: 18,
  },
  nameSurnameText1: {
    position: "absolute",
    marginTop: -13,
    marginLeft: -98,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  hAgoText1: {
    position: "absolute",
    marginTop: -13,
    top: "50%",
    right: -1,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  component18Icon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  titleView1: {
    position: "absolute",
    marginTop: 32,
    top: "50%",
    right: 24,
    left: 24,
    height: 40,
  },
  maskGroup11: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 200,
  },
  postsView1: {
    position: "absolute",
    right: 0,
    bottom: 5,
    left: 0,
    height: 384,
  },
  postsView2: {
    alignSelf: "stretch",
    position: "relative",
    height: 789,
  },
  scrollGroup3: {
    width: 340,
    height: 625,
    maxWidth: 340,
  },
  rectangleView4: {
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
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView5: {
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
    marginTop: 13.75,
    top: "50%",
    left: 7.5,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  iconMaterialGroup: {
    position: "absolute",
    top: 19.5,
    left: 12.5,
    width: 25.14,
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
  groupPressable: {
    position: "absolute",
    marginTop: -35,
    marginLeft: -26,
    top: "50%",
    left: "50%",
    width: 50,
    height: 57.5,
  },
  toolbarView: {
    position: "relative",
    width: 375,
    height: 71,
  },
  groupFeed1View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "flex-end",
  },
});

export default GroupFeed1;
