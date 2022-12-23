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

const SettingsLanguage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingsLanguageView}>
      <View style={[styles.navigationBarView, styles.mr6]}>
        <Text style={styles.languageText}>Language</Text>
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
      <ScrollView
        style={[styles.scrollGroup1, styles.mt23, styles.ml5]}
        contentContainerStyle={styles.scrollGroup1Content}
      >
        <Text style={styles.englishBahasaIndonesiaEspText}>
          <Text style={styles.englishText}>English</Text>
          <Text style={styles.blankLineText}> </Text>
          <Text style={styles.bahasaIndonesiaText}>Bahasa Indonesia</Text>
          <Text style={styles.blankLineText1}> </Text>
          <Text style={styles.espaolText}>Español</Text>
          <Text style={styles.blankLineText2}> </Text>
          <Text style={styles.franaisText}>Français</Text>
          <Text style={styles.blankLineText3}> </Text>
          <Text style={styles.filipinoText}>Filipino</Text>
          <Text style={styles.blankLineText4}> </Text>
          <Text style={styles.italianoText}>Italiano</Text>
          <Text style={styles.blankLineText5}> </Text>
          <Text style={styles.polskiText}>Polski</Text>
          <Text style={styles.blankLineText6}> </Text>
          <Text style={styles.portugusText}>Português</Text>
          <Text style={styles.blankLineText7}> </Text>
          <Text style={styles.romnText}>Română</Text>
          <Text style={styles.blankLineText8}> </Text>
          <Text style={styles.svenskaText}>Svenska</Text>
          <Text style={styles.blankLineText9}> </Text>
          <Text style={styles.sloveninaText}>Slovenčina</Text>
          <Text style={styles.blankLineText10}> </Text>
          <Text style={styles.sloveninaText1}>Slovenščina</Text>
          <Text style={styles.blankLineText11}> </Text>
          <Text style={styles.tingVitText}>Tiếng Việt</Text>
          <Text style={styles.blankLineText12}> </Text>
          <Text style={styles.trkeText}>Türkçe</Text>
          <Text style={styles.blankLineText13}> </Text>
          <Text style={styles.latvieuValodaText}>latviešu valoda</Text>
          <Text style={styles.blankLineText14}> </Text>
          <Text style={styles.etinaText}>Čeština</Text>
          <Text style={styles.blankLineText15}> </Text>
          <Text style={styles.text}>Ελληνικά</Text>
          <Text style={styles.blankLineText16}> </Text>
          <Text style={styles.text1}>Русский</Text>
          <Text style={styles.blankLineText17}> </Text>
          <Text style={styles.text2}> Українська</Text>
          <Text style={styles.blankLineText18}> </Text>
          <Text style={styles.text3}>български</Text>
          <Text style={styles.blankLineText19}> </Text>
          <Text style={styles.text4}>العربية</Text>
          <Text style={styles.blankLineText20}> </Text>
          <Text style={styles.text5}>اردو</Text>
          <Text style={styles.blankLineText21}> </Text>
          <Text style={styles.text6}>বাংলা</Text>
          <Text style={styles.blankLineText22}> </Text>
          <Text style={styles.text7}>日本語</Text>
          <Text style={styles.blankLineText23}> </Text>
          <Text style={styles.text8}>简体中文</Text>
        </Text>
      </ScrollView>
      <View style={[styles.toolbarView, styles.mt15]}>
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
  scrollGroup1Content: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
  mr6: {
    marginRight: 6,
  },
  mt23: {
    marginTop: 23,
  },
  ml5: {
    marginLeft: 5,
  },
  mt15: {
    marginTop: 15,
  },
  languageText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -44.5,
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
  englishText: {
    margin: 0,
  },
  blankLineText: {
    margin: 0,
  },
  bahasaIndonesiaText: {
    margin: 0,
  },
  blankLineText1: {
    margin: 0,
  },
  espaolText: {
    margin: 0,
  },
  blankLineText2: {
    margin: 0,
  },
  franaisText: {
    margin: 0,
  },
  blankLineText3: {
    margin: 0,
  },
  filipinoText: {
    margin: 0,
  },
  blankLineText4: {
    margin: 0,
  },
  italianoText: {
    margin: 0,
  },
  blankLineText5: {
    margin: 0,
  },
  polskiText: {
    margin: 0,
  },
  blankLineText6: {
    margin: 0,
  },
  portugusText: {
    margin: 0,
  },
  blankLineText7: {
    margin: 0,
  },
  romnText: {
    margin: 0,
  },
  blankLineText8: {
    margin: 0,
  },
  svenskaText: {
    margin: 0,
  },
  blankLineText9: {
    margin: 0,
  },
  sloveninaText: {
    margin: 0,
  },
  blankLineText10: {
    margin: 0,
  },
  sloveninaText1: {
    margin: 0,
  },
  blankLineText11: {
    margin: 0,
  },
  tingVitText: {
    margin: 0,
  },
  blankLineText12: {
    margin: 0,
  },
  trkeText: {
    margin: 0,
  },
  blankLineText13: {
    margin: 0,
  },
  latvieuValodaText: {
    margin: 0,
  },
  blankLineText14: {
    margin: 0,
  },
  etinaText: {
    margin: 0,
  },
  blankLineText15: {
    margin: 0,
  },
  text: {
    margin: 0,
  },
  blankLineText16: {
    margin: 0,
  },
  text1: {
    margin: 0,
  },
  blankLineText17: {
    margin: 0,
  },
  text2: {
    margin: 0,
  },
  blankLineText18: {
    margin: 0,
  },
  text3: {
    margin: 0,
  },
  blankLineText19: {
    margin: 0,
  },
  text4: {
    margin: 0,
  },
  blankLineText20: {
    margin: 0,
  },
  text5: {
    margin: 0,
  },
  blankLineText21: {
    margin: 0,
  },
  text6: {
    margin: 0,
  },
  blankLineText22: {
    margin: 0,
  },
  text7: {
    margin: 0,
  },
  blankLineText23: {
    margin: 0,
  },
  text8: {
    margin: 0,
  },
  englishBahasaIndonesiaEspText: {
    width: "100.32%",
    position: "relative",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  scrollGroup1: {
    width: 308,
    height: 638,
    maxWidth: 308,
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
  settingsLanguageView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "center",
  },
});

export default SettingsLanguage;
