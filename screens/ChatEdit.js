import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChatEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatEditView}>
      <View style={[styles.navigationBarView, styles.mr147]}>
        <Text style={styles.chatText}>Chat</Text>
      </View>
      <Pressable
        style={[styles.pressable, styles.mt10, styles.mr21]}
        onPress={() => navigation.navigate("ChatNewChat")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/1.png")}
        />
      </Pressable>
      <Text style={[styles.editText, styles.mt_23]}>Edit</Text>
      <Pressable
        style={[
          styles.iconMaterialNotificationsAcPressable,
          styles.mt_23,
          styles.mr68,
        ]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon-materialnotificationsactive.png")}
        />
      </Pressable>
      <View style={[styles.inputView, styles.mt23]}>
        <View style={styles.component1View}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.path99Icon}
            resizeMode="cover"
            source={require("../assets/path-99.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.scrollGroup9, styles.mt12]}
        onPress={() => navigation.navigate("Chat")}
      >
        <View style={styles.personsView}>
          <View style={styles.nameView}>
            <Text style={styles.mikeFullerText}>Mike Fuller</Text>
            <Text style={styles.loremIpsumDolorSitAme}>
              Lorem ipsum dolor sit ame
            </Text>
            <Image
              style={styles.component1Icon}
              resizeMode="cover"
              source={require("../assets/component-5.png")}
            />
            <Image
              style={styles.iconAwesomeCheckCircle}
              resizeMode="cover"
              source={require("../assets/icon-awesomecheckcircle.png")}
            />
          </View>
          <View style={styles.nameView1}>
            <Text style={styles.johnDoeText}>John Doe</Text>
            <Text style={styles.loremIpsumDolorSitAme1}>
              Lorem ipsum dolor sit ame
            </Text>
            <Image
              style={styles.component2Icon}
              resizeMode="cover"
              source={require("../assets/component-6.png")}
            />
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-244.png")}
            />
          </View>
          <View style={styles.nameView2}>
            <Text style={styles.jasonCalebText}>Jason Caleb</Text>
            <Text style={styles.loremIpsumDolorSitAme2}>
              Lorem ipsum dolor sit ame
            </Text>
            <Image
              style={styles.component3Icon}
              resizeMode="cover"
              source={require("../assets/component-7.png")}
            />
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/ellipse-244.png")}
            />
          </View>
          <View style={styles.nameView3}>
            <Text style={styles.familyGroupText}>Family Group</Text>
            <Text style={styles.loremIpsumDolorSitAme3}>
              Lorem ipsum dolor sit ame
            </Text>
            <Image
              style={styles.component4Icon}
              resizeMode="cover"
              source={require("../assets/component-8.png")}
            />
            <Image
              style={styles.ellipseIcon2}
              resizeMode="cover"
              source={require("../assets/ellipse-244.png")}
            />
          </View>
          <View style={styles.nameView4}>
            <Text style={styles.neliaCamposText}>Nelia Campos</Text>
            <Text style={styles.loremIpsumDolorSitAme4}>
              Lorem ipsum dolor sit ame
            </Text>
            <Image
              style={styles.component5Icon}
              resizeMode="cover"
              source={require("../assets/component-9.png")}
            />
            <Image
              style={styles.ellipseIcon3}
              resizeMode="cover"
              source={require("../assets/ellipse-244.png")}
            />
          </View>
          <View style={styles.nameView5}>
            <Text style={styles.juliaMendesText}>Julia Mendes</Text>
            <Text style={styles.loremIpsumDolorSitAme5}>
              Lorem ipsum dolor sit ame
            </Text>
            <Image
              style={styles.component6Icon}
              resizeMode="cover"
              source={require("../assets/component-10.png")}
            />
            <Image
              style={styles.ellipseIcon4}
              resizeMode="cover"
              source={require("../assets/ellipse-244.png")}
            />
          </View>
          <View style={styles.nameView6}>
            <Text style={styles.ruiPatalimText}>Rui Patalim</Text>
            <Text style={styles.loremIpsumDolorSitAme6}>
              Lorem ipsum dolor sit ame
            </Text>
            <Image
              style={styles.component7Icon}
              resizeMode="cover"
              source={require("../assets/component-6.png")}
            />
            <Image
              style={styles.ellipseIcon5}
              resizeMode="cover"
              source={require("../assets/ellipse-244.png")}
            />
          </View>
          <View style={styles.nameView7}>
            <Text style={styles.soniaFerreiraText}>Sonia Ferreira</Text>
            <Text style={styles.loremIpsumDolorSitAme7}>
              Lorem ipsum dolor sit ame
            </Text>
            <Image
              style={styles.component8Icon}
              resizeMode="cover"
              source={require("../assets/component-12.png")}
            />
            <Image
              style={styles.ellipseIcon6}
              resizeMode="cover"
              source={require("../assets/ellipse-244.png")}
            />
          </View>
          <View style={styles.nameView8}>
            <Text style={styles.lciaMontesText}>Lúcia Montes</Text>
            <Text style={styles.loremIpsumDolorSitAme8}>
              Lorem ipsum dolor sit ame
            </Text>
            <Image
              style={styles.component9Icon}
              resizeMode="cover"
              source={require("../assets/component-91.png")}
            />
            <Image
              style={styles.ellipseIcon7}
              resizeMode="cover"
              source={require("../assets/ellipse-244.png")}
            />
          </View>
        </View>
      </Pressable>
      <Text style={[styles.archiveText, styles.mt20]}>Archive</Text>
      <Text style={[styles.archiveText1, styles.mt_19, styles.mr19]}>
        Delete
      </Text>
      <Text style={[styles.archiveText2, styles.mt_19, styles.mr130]}>
        Read All
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mr147: {
    marginRight: 147,
  },
  mt10: {
    marginTop: 10,
  },
  mr21: {
    marginRight: 21,
  },
  mt_23: {
    marginTop: -23,
  },
  mr68: {
    marginRight: 68,
  },
  mt23: {
    marginTop: 23,
  },
  mt12: {
    marginTop: 12,
  },
  mt20: {
    marginTop: 20,
  },
  mt_19: {
    marginTop: -19,
  },
  mr19: {
    marginRight: 19,
  },
  mr130: {
    marginRight: 130,
  },
  chatText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -22,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  navigationBarView: {
    position: "relative",
    width: 44,
    height: 25,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  pressable: {
    position: "relative",
    width: 24,
    height: 24,
  },
  editText: {
    position: "relative",
    fontSize: 18,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  icon1: {
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
    alignSelf: "flex-start",
  },
  mikeFullerText: {
    position: "absolute",
    marginLeft: -24.74,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component1Icon: {
    position: "absolute",
    marginLeft: -92.74,
    top: 2,
    bottom: 5,
    left: "50%",
    maxHeight: "100%",
    width: 40,
  },
  iconAwesomeCheckCircle: {
    position: "absolute",
    marginTop: -8.94,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0.49,
    height: 47,
  },
  johnDoeText: {
    position: "absolute",
    marginLeft: -24.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme1: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component2Icon: {
    position: "absolute",
    marginLeft: -92.5,
    top: 2,
    bottom: 5,
    left: "50%",
    maxHeight: "100%",
    width: 40,
  },
  ellipseIcon: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView1: {
    position: "absolute",
    top: 67,
    right: 0,
    left: 0,
    height: 47,
  },
  jasonCalebText: {
    position: "absolute",
    marginLeft: -24.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme2: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component3Icon: {
    position: "absolute",
    marginLeft: -92.5,
    top: 2,
    bottom: 5,
    left: "50%",
    maxHeight: "100%",
    width: 40,
  },
  ellipseIcon1: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView2: {
    position: "absolute",
    marginTop: -157.5,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  familyGroupText: {
    position: "absolute",
    marginLeft: -24.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme3: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component4Icon: {
    position: "absolute",
    marginLeft: -92.5,
    top: 2,
    bottom: 5,
    left: "50%",
    maxHeight: "100%",
    width: 40,
  },
  ellipseIcon2: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView3: {
    position: "absolute",
    marginTop: -90.5,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  neliaCamposText: {
    position: "absolute",
    marginLeft: -24.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme4: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component5Icon: {
    position: "absolute",
    marginLeft: -92.5,
    top: 2,
    bottom: 5,
    left: "50%",
    maxHeight: "100%",
    width: 40,
  },
  ellipseIcon3: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView4: {
    position: "absolute",
    marginTop: -23.5,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  juliaMendesText: {
    position: "absolute",
    marginLeft: -24.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme5: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component6Icon: {
    position: "absolute",
    marginLeft: -92.5,
    top: 2,
    bottom: 5,
    left: "50%",
    maxHeight: "100%",
    width: 40,
  },
  ellipseIcon4: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView5: {
    position: "absolute",
    marginTop: 43.5,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  ruiPatalimText: {
    position: "absolute",
    marginLeft: -24.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme6: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component7Icon: {
    position: "absolute",
    marginLeft: -92.5,
    top: 2,
    bottom: 5,
    left: "50%",
    maxHeight: "100%",
    width: 40,
  },
  ellipseIcon5: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView6: {
    position: "absolute",
    marginTop: 110.5,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  soniaFerreiraText: {
    position: "absolute",
    marginLeft: -24.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme7: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component8Icon: {
    position: "absolute",
    marginLeft: -92.5,
    top: 2,
    bottom: 5,
    left: "50%",
    maxHeight: "100%",
    width: 40,
  },
  ellipseIcon6: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView7: {
    position: "absolute",
    right: 0,
    bottom: 67,
    left: 0,
    height: 47,
  },
  lciaMontesText: {
    position: "absolute",
    marginLeft: -24.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme8: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component9Icon: {
    position: "absolute",
    marginLeft: -92.5,
    top: 2,
    bottom: 5,
    left: "50%",
    maxHeight: "100%",
    width: 40,
  },
  ellipseIcon7: {
    position: "absolute",
    marginTop: -8.5,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView8: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: 47,
  },
  personsView: {
    alignSelf: "stretch",
    position: "relative",
    height: 583,
  },
  scrollGroup9: {
    width: 321,
    height: 549,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 13,
    boxSizing: "border-box",
    alignItems: "flex-start",
  },
  archiveText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 80,
    height: 19,
    alignSelf: "flex-start",
  },
  archiveText1: {
    position: "relative",
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "right",
    width: 80,
    height: 19,
  },
  archiveText2: {
    position: "relative",
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 80,
    height: 19,
  },
  chatEditView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: 36,
    paddingTop: 40,
    paddingRight: 18,
    alignItems: "flex-end",
  },
});

export default ChatEdit;
