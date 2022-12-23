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

const ProfileHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileHistoryView}>
      <View style={[styles.navigationBarView, styles.mr11]}>
        <Text style={styles.settingsText}>Settings</Text>
        <Pressable
          style={styles.component1Pressable}
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
      <Text style={[styles.recentSearchesText, styles.mt40, styles.ml1]}>
        Recent searches
      </Text>
      <View style={[styles.lineView, styles.mr2]} />
      <ScrollView
        style={[styles.scrollGroup7, styles.mt31, styles.mr3]}
        contentContainerStyle={styles.scrollGroup7Content}
      >
        <View style={styles.personsView2}>
          <View style={styles.personsView}>
            <View style={styles.nameView}>
              <Text style={styles.beatrizSilvaText}>Beatriz Silva</Text>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../assets/rectangle-261.png")}
              />
              <Text style={styles.xText}>X</Text>
            </View>
            <View style={styles.nameView1}>
              <Text style={styles.neliaCamposText}>Nelia Campos</Text>
              <Image
                style={styles.rectangleIcon1}
                resizeMode="cover"
                source={require("../assets/rectangle-2611.png")}
              />
              <Text style={styles.xText1}>X</Text>
            </View>
            <View style={styles.nameView2}>
              <Text style={styles.luziaBeltrandText}>Luzia Beltrand</Text>
              <Image
                style={styles.rectangleIcon2}
                resizeMode="cover"
                source={require("../assets/rectangle-2612.png")}
              />
              <Text style={styles.xText2}>X</Text>
            </View>
            <View style={styles.nameView3}>
              <Text style={styles.sofiaNabaisText}>Sofia Nabais</Text>
              <Image
                style={styles.rectangleIcon3}
                resizeMode="cover"
                source={require("../assets/rectangle-2613.png")}
              />
              <Text style={styles.xText3}>X</Text>
            </View>
            <View style={styles.nameView4}>
              <Text style={styles.conceioSousaText}>Conceição Sousa</Text>
              <Image
                style={styles.rectangleIcon4}
                resizeMode="cover"
                source={require("../assets/rectangle-2614.png")}
              />
              <Text style={styles.xText4}>X</Text>
            </View>
          </View>
          <View style={styles.personsView1}>
            <View style={styles.nameView5}>
              <Text style={styles.beatrizSilvaText1}>Beatriz Silva</Text>
              <Image
                style={styles.rectangleIcon5}
                resizeMode="cover"
                source={require("../assets/rectangle-261.png")}
              />
              <Text style={styles.xText5}>X</Text>
            </View>
            <View style={styles.nameView6}>
              <Text style={styles.neliaCamposText1}>Nelia Campos</Text>
              <Image
                style={styles.rectangleIcon6}
                resizeMode="cover"
                source={require("../assets/rectangle-2611.png")}
              />
              <Text style={styles.xText6}>X</Text>
            </View>
            <View style={styles.nameView7}>
              <Text style={styles.luziaBeltrandText1}>Luzia Beltrand</Text>
              <Image
                style={styles.rectangleIcon7}
                resizeMode="cover"
                source={require("../assets/rectangle-2612.png")}
              />
              <Text style={styles.xText7}>X</Text>
            </View>
            <View style={styles.nameView8}>
              <Text style={styles.sofiaNabaisText1}>Sofia Nabais</Text>
              <Image
                style={styles.rectangleIcon8}
                resizeMode="cover"
                source={require("../assets/rectangle-2613.png")}
              />
              <Text style={styles.xText8}>X</Text>
            </View>
            <View style={styles.nameView9}>
              <Text style={styles.conceioSousaText1}>Conceição Sousa</Text>
              <Image
                style={styles.rectangleIcon9}
                resizeMode="cover"
                source={require("../assets/rectangle-2614.png")}
              />
              <Text style={styles.xText9}>X</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.toolbarView, styles.mt20]}>
        <View style={styles.rectangleView1} />
        <Pressable
          style={styles.profilePressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileText}>Profile</Text>
          <View style={styles.lineView1} />
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
  scrollGroup7Content: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
  mr11: {
    marginRight: 11,
  },
  mt40: {
    marginTop: 40,
  },
  ml1: {
    marginLeft: 1,
  },
  mr2: {
    marginRight: 2,
  },
  mt31: {
    marginTop: 31,
  },
  mr3: {
    marginRight: 3,
  },
  mt20: {
    marginTop: 20,
  },
  settingsText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -38,
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
  component1Pressable: {
    position: "absolute",
    bottom: 4,
    left: 286,
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
    marginTop: -5.5,
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
    width: 302,
    height: 25,
  },
  recentSearchesText: {
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#15abb5",
    textAlign: "left",
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#15abb5",
    borderTopWidth: 2,
    width: 162,
    height: 4,
  },
  beatrizSilvaText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -32.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
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
  xText: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nameView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 88,
  },
  neliaCamposText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -32,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
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
  xText1: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nameView1: {
    position: "absolute",
    marginTop: -160,
    top: "50%",
    right: 0,
    left: 1,
    height: 88,
  },
  luziaBeltrandText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -32,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
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
  xText2: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nameView2: {
    position: "absolute",
    marginTop: -44,
    top: "50%",
    right: 0,
    left: 1,
    height: 88,
  },
  sofiaNabaisText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -32,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
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
  xText3: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nameView3: {
    position: "absolute",
    marginTop: 73,
    top: "50%",
    right: 0,
    left: 1,
    height: 88,
  },
  conceioSousaText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -32,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
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
  xText4: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nameView4: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 1,
    height: 88,
  },
  personsView: {
    position: "absolute",
    top: 0,
    right: 1,
    left: 0,
    height: 554,
  },
  beatrizSilvaText1: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -32.5,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon5: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  xText5: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nameView5: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 88,
  },
  neliaCamposText1: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -32,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon6: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  xText6: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nameView6: {
    position: "absolute",
    marginTop: -160,
    top: "50%",
    right: 0,
    left: 1,
    height: 88,
  },
  luziaBeltrandText1: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -32,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon7: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  xText7: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nameView7: {
    position: "absolute",
    marginTop: -44,
    top: "50%",
    right: 0,
    left: 1,
    height: 88,
  },
  sofiaNabaisText1: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -32,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon8: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  xText8: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nameView8: {
    position: "absolute",
    marginTop: 73,
    top: "50%",
    right: 0,
    left: 1,
    height: 88,
  },
  conceioSousaText1: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -32,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  rectangleIcon9: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  xText9: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nameView9: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 1,
    height: 88,
  },
  personsView1: {
    position: "absolute",
    right: 1,
    bottom: 10,
    left: 0,
    height: 554,
  },
  personsView2: {
    alignSelf: "stretch",
    position: "relative",
    height: 1138,
  },
  scrollGroup7: {
    width: 300,
    height: 562,
    maxWidth: 300,
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
  lineView1: {
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
  profileHistoryView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 36,
    alignItems: "center",
  },
});

export default ProfileHistory;
