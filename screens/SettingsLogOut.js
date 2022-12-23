import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingsLogOut = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingsLogOutView}>
      <View style={[styles.rectangleView, styles.mr10]} />
      <View style={[styles.navigationBarView, styles.mt_772, styles.ml112]}>
        <Text style={styles.settingsText}>Settings</Text>
        <View style={styles.component2View}>
          <View style={styles.rectangleView1} />
          <Image
            style={styles.path104Icon}
            resizeMode="cover"
            source={require("../assets/path-104.png")}
          />
        </View>
        <Image
          style={styles.iconMaterialNotificationsAc}
          resizeMode="cover"
          source={require("../assets/icon-materialnotificationsactive.png")}
        />
      </View>
      <View style={[styles.notificationsView1, styles.mt35, styles.ml1]}>
        <Text style={styles.notificationsText}>Notifications</Text>
        <Text style={styles.onText}>On</Text>
        <View style={styles.notificationsView}>
          <View style={styles.rectangleView2} />
          <Image
            style={styles.path1Icon}
            resizeMode="cover"
            source={require("../assets/path-1.png")}
          />
        </View>
        <Image
          style={styles.iconMaterialNotificationsAc1}
          resizeMode="cover"
          source={require("../assets/icon-materialnotificationsactive10.png")}
        />
      </View>
      <View style={[styles.soundView, styles.mt26, styles.ml1]}>
        <Text style={styles.soundText}>Sound</Text>
        <Text style={styles.onText1}>{`On `}</Text>
        <Image
          style={styles.iconIonicIosVolumeHigh}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosvolumehigh.png")}
        />
      </View>
      <View style={[styles.languageView, styles.mt25, styles.ml1]}>
        <Text style={styles.languageText}>Language</Text>
        <Text style={styles.englishText}>English</Text>
        <Image
          style={styles.iconAwesomeLanguage}
          resizeMode="cover"
          source={require("../assets/icon-awesomelanguage.png")}
        />
      </View>
      <View style={[styles.popOverView, styles.mt_28]}>
        <View style={styles.rectangleView3} />
        <Text style={styles.areYouSureYouWantToLogO}>
          <Text style={styles.areYouSure}>Are you sure you want to</Text>
          <Text style={styles.logOutText}>log out?</Text>
        </Text>
        <View style={styles.buttonsView}>
          <Pressable
            style={styles.backPressable}
            onPress={() => navigation.navigate("Settings")}
          >
            <Text style={styles.backText}>Back</Text>
          </Pressable>
          <Pressable
            style={styles.yesPressable}
            onPress={() => navigation.navigate("FirstScreen1")}
          >
            <Text style={styles.yesText}>Yes</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.recentSearchesView, styles.mt_122, styles.ml1]}>
        <Text style={styles.recentSearchesText}>Recent searches</Text>
        <Image
          style={styles.iconAwesomeHistory}
          resizeMode="cover"
          source={require("../assets/icon-awesomehistory.png")}
        />
      </View>
      <View style={[styles.logOutView, styles.mt26, styles.ml1]}>
        <Text style={styles.logOutText1}>Log Out</Text>
        <Image
          style={styles.iconOpenAccountLogout}
          resizeMode="cover"
          source={require("../assets/icon-openaccountlogout.png")}
        />
      </View>
      <View style={[styles.deleteAccountView, styles.mt25, styles.ml1]}>
        <Text style={styles.deleteAccountText}>Delete Account</Text>
        <Image
          style={styles.iconAwesomeTrashAlt}
          resizeMode="cover"
          source={require("../assets/icon-awesometrashalt.png")}
        />
      </View>
      <View style={[styles.helpView1, styles.mt26, styles.ml1]}>
        <View style={styles.helpView}>
          <View style={styles.rectangleView4} />
          <Image
            style={styles.path146Icon}
            resizeMode="cover"
            source={require("../assets/path-146.png")}
          />
        </View>
        <Text style={styles.helpText}>Help</Text>
        <Text style={styles.questionsText}>Questions?</Text>
      </View>
      <View style={[styles.toolbarView, styles.mt32]}>
        <View style={styles.rectangleView5} />
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
            <View style={styles.rectangleView6} />
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
  mr10: {
    marginRight: 10,
  },
  mt_772: {
    marginTop: -772,
  },
  ml112: {
    marginLeft: 112,
  },
  mt35: {
    marginTop: 35,
  },
  ml1: {
    marginLeft: 1,
  },
  mt26: {
    marginTop: 26,
  },
  mt25: {
    marginTop: 25,
  },
  mt_28: {
    marginTop: -28,
  },
  mt_122: {
    marginTop: -122,
  },
  mt32: {
    marginTop: 32,
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#fff",
    width: 375,
    height: 812,
    opacity: 0.6,
  },
  settingsText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -94.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  rectangleView1: {
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
  component2View: {
    position: "absolute",
    bottom: 4,
    left: 173,
    width: 16,
    height: 16,
  },
  iconMaterialNotificationsAc: {
    position: "absolute",
    right: 34,
    bottom: 0,
    width: 20,
    height: 19.56,
  },
  navigationBarView: {
    position: "relative",
    width: 189,
    height: 25,
  },
  notificationsText: {
    position: "absolute",
    marginTop: -9.5,
    marginLeft: -99,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  onText: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    right: 16,
    fontSize: 13,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "right",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path1Icon: {
    position: "absolute",
    top: 0,
    right: 0.08,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  notificationsView: {
    position: "absolute",
    marginTop: -7.5,
    top: "50%",
    left: 24,
    width: 16,
    height: 16,
  },
  iconMaterialNotificationsAc1: {
    position: "absolute",
    right: 260,
    bottom: 22.44,
    width: 20,
    height: 19.56,
  },
  notificationsView1: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#15abb5",
    width: 302,
    height: 65,
  },
  soundText: {
    position: "absolute",
    marginTop: -10.5,
    marginLeft: -98,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  onText1: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    right: 16,
    fontSize: 13,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "right",
  },
  iconIonicIosVolumeHigh: {
    position: "absolute",
    marginTop: -12.25,
    top: "50%",
    left: 13.89,
    width: 26.93,
    height: 22.5,
  },
  soundView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#15abb5",
    width: 302,
    height: 65,
  },
  languageText: {
    position: "absolute",
    marginTop: -9.5,
    marginLeft: -99,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  englishText: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    right: 16,
    fontSize: 13,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "right",
  },
  iconAwesomeLanguage: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 15,
    width: 32,
    height: 16,
  },
  languageView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#15abb5",
    width: 302,
    height: 65,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
  },
  areYouSure: {
    margin: 0,
  },
  logOutText: {
    margin: 0,
  },
  areYouSureYouWantToLogO: {
    position: "absolute",
    marginTop: -53,
    top: "50%",
    left: 39,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  backText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -19,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  backPressable: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#d3d3d3",
    shadowColor: "rgba(38, 153, 251, 0.1)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 100,
  },
  yesText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -13,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
  },
  yesPressable: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    backgroundColor: "rgba(247, 13, 26, 0.76)",
    shadowColor: "rgba(38, 153, 251, 0.1)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 100,
  },
  buttonsView: {
    position: "absolute",
    right: 24,
    bottom: 21,
    left: 24,
    height: 40,
  },
  popOverView: {
    position: "relative",
    width: 295,
    height: 176,
  },
  recentSearchesText: {
    position: "absolute",
    marginTop: -9.5,
    marginLeft: -99,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  iconAwesomeHistory: {
    position: "absolute",
    marginTop: -9.5,
    top: "50%",
    left: 23.63,
    width: 19,
    height: 19,
  },
  recentSearchesView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#15abb5",
    width: 302,
    height: 65,
  },
  logOutText1: {
    position: "absolute",
    marginTop: -9.5,
    marginLeft: -99,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  iconOpenAccountLogout: {
    position: "absolute",
    marginTop: -6.5,
    top: "50%",
    left: 24,
    width: 16,
    height: 14,
  },
  logOutView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#15abb5",
    width: 302,
    height: 65,
  },
  deleteAccountText: {
    position: "absolute",
    marginTop: -9.5,
    marginLeft: -100,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  iconAwesomeTrashAlt: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 25,
    width: 14,
    height: 16,
  },
  deleteAccountView: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#15abb5",
    width: 302,
    height: 65,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path146Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  helpView: {
    position: "absolute",
    marginTop: -7.5,
    top: "50%",
    left: 24,
    width: 16,
    height: 16,
  },
  helpText: {
    position: "absolute",
    marginTop: -10.5,
    marginLeft: -99,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  questionsText: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    right: 17,
    fontSize: 13,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "right",
  },
  helpView1: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#15abb5",
    width: 302,
    height: 65,
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
  rectangleView6: {
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
  settingsLogOutView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default SettingsLogOut;
