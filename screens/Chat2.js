import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Chat2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat2View}>
      <View style={styles.navigationBarView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Text style={styles.familyGroupText}>Family Group</Text>
        <Pressable
          style={styles.backwardArrowPressable}
          onPress={() => navigation.navigate("Chat")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/backward-arrow.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.chatView, styles.mt44]}>
        <View style={styles.messageView}>
          <Image
            style={styles.path112Icon}
            resizeMode="cover"
            source={require("../assets/path-112.png")}
          />
          <Text style={styles.sedUtPerspiciatisOmnis}>
            Sed ut perspiciatis omnis.
          </Text>
        </View>
        <View style={styles.messageView1}>
          <Image
            style={styles.path113Icon}
            resizeMode="cover"
            source={require("../assets/path-113.png")}
          />
          <Text style={styles.excepteurSintOccaecatCupida}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt.
          </Text>
        </View>
        <View style={styles.messageView2}>
          <Image
            style={styles.path116Icon}
            resizeMode="cover"
            source={require("../assets/path-116.png")}
          />
          <Text style={styles.loremIpsumDolorSitAmetCo}>
            Lorem ipsum dolor sit amet, consectetur.
          </Text>
        </View>
        <Text style={styles.monday1040Am}>Monday, 10:40 am</Text>
        <View style={styles.inputView}>
          <Text style={styles.saySomethingText}>Say something…</Text>
          <Image
            style={styles.component1Icon}
            resizeMode="cover"
            source={require("../assets/component-18.png")}
          />
        </View>
        <Image
          style={styles.component1Icon1}
          resizeMode="cover"
          source={require("../assets/component-19.png")}
        />
        <Image
          style={styles.component2Icon}
          resizeMode="cover"
          source={require("../assets/component-21.png")}
        />
        <Image
          style={styles.component3Icon}
          resizeMode="cover"
          source={require("../assets/component-21.png")}
        />
        <View style={styles.messageView3}>
          <Image
            style={styles.path112Icon1}
            resizeMode="cover"
            source={require("../assets/path-112.png")}
          />
          <Text style={styles.sedUtPerspiciatisOmnis1}>
            Sed ut perspiciatis omnis.
          </Text>
        </View>
        <Image
          style={styles.component4Icon}
          resizeMode="cover"
          source={require("../assets/component-19.png")}
        />
      </View>
      <View style={styles.toolbarView}>
        <View style={styles.rectangleView2} />
        <Pressable
          style={styles.profilePressable1}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileText}>Profile</Text>
          <Pressable
            style={styles.profilePressable}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/profile.png")}
            />
          </Pressable>
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
            <View style={styles.rectangleView3} />
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
            source={require("../assets/icon-materialchatbubble20.png")}
          />
          <View style={styles.lineView} />
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
  mt44: {
    marginTop: 44,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 20,
  },
  rectangleView1: {
    position: "absolute",
    top: 20,
    right: 0,
    bottom: 0,
    left: 0,
  },
  familyGroupText: {
    position: "absolute",
    marginTop: -6,
    marginLeft: -63.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  icon: {
    marginTop: 2,
    width: "100%",
    height: "100%",
  },
  backwardArrowPressable: {
    position: "absolute",
    left: 35,
    top: "50%",
    width: 16,
    height: 16,
  },
  navigationBarView: {
    position: "relative",
    width: 375,
    height: 68,
  },
  path112Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  sedUtPerspiciatisOmnis: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 32.48,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 165,
    height: 16,
  },
  messageView: {
    position: "absolute",
    marginLeft: -97.98,
    top: 0,
    left: "50%",
    width: 218,
    height: 56,
  },
  path113Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  excepteurSintOccaecatCupida: {
    position: "absolute",
    top: 24,
    left: 24.12,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 191,
    height: 65,
  },
  messageView1: {
    position: "absolute",
    top: 76,
    left: 45.88,
    width: 248,
    height: 113,
  },
  path116Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    marginTop: -20.17,
    top: "50%",
    left: 24.12,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 191,
    height: 41,
  },
  messageView2: {
    position: "absolute",
    marginTop: 1.17,
    top: "50%",
    left: 46.88,
    width: 248,
    height: 89,
  },
  monday1040Am: {
    position: "absolute",
    marginTop: -65.5,
    marginLeft: -64.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  saySomethingText: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    left: 35,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  component1Icon: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 36,
    width: 16,
    height: 16,
  },
  inputView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#95989a",
    height: 56,
  },
  component1Icon1: {
    position: "absolute",
    top: 8,
    left: 37,
    width: 40,
    height: 40,
  },
  component2Icon: {
    position: "absolute",
    top: 82,
    right: 35,
    width: 40,
    height: 40,
  },
  component3Icon: {
    position: "absolute",
    marginTop: 5.5,
    top: "50%",
    right: 35,
    width: 40,
    height: 40,
  },
  path112Icon1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  sedUtPerspiciatisOmnis1: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 32.48,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 165,
    height: 16,
  },
  messageView3: {
    position: "absolute",
    marginTop: 133.5,
    marginLeft: -97.98,
    top: "50%",
    left: "50%",
    width: 218,
    height: 56,
  },
  component4Icon: {
    position: "absolute",
    marginTop: 141.5,
    top: "50%",
    left: 37,
    width: 40,
    height: 40,
  },
  chatView: {
    position: "relative",
    width: 375,
    height: 629,
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
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  icon1: {
    marginTop: -19,
    marginLeft: -8.5,
    width: "100%",
    height: "100%",
  },
  profilePressable: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 17,
    height: 17,
  },
  profilePressable1: {
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
    marginTop: 13.75,
    top: "50%",
    left: 11.5,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  iconMaterialChatBubble: {
    position: "absolute",
    top: 19.5,
    left: 16.5,
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
  chatPressable: {
    position: "absolute",
    marginTop: -35,
    marginLeft: -99,
    top: "50%",
    left: "50%",
    width: 50,
    height: 57.5,
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
  chat2View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default Chat2;
