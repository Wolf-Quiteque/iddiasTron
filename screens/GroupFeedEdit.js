import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GroupFeedEdit = () => {
  const navigation = useNavigation();

  const [select, setSelect] = React.useState(false);

  return (
    <View style={styles.groupFeedEditView}>
      <View style={[styles.navigationBarView, styles.mr121]}>
        <Text style={styles.groupText}>Group</Text>
      </View>
      <Pressable
        style={[styles.pressable, styles.mt10, styles.mr2]}
        onPress={() => navigation.navigate("GroupCreationMembers")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/1@3x.png")}
        />
      </Pressable>
      <Text style={[styles.editText, styles.mt_23]}>Edit</Text>
      <Pressable
        style={[
          styles.iconMaterialNotificationsAcPressable,
          styles.mt_23,
          styles.mr49,
        ]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon-materialnotificationsactive@3x.png")}
        />
      </Pressable>
      <View style={[styles.inputView, styles.mt17]}>
        <View style={styles.component3View}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.path99Icon}
            resizeMode="cover"
            source={require("../assets/path-99@3x.png")}
          />
        </View>
      </View>
      <View style={[styles.nameView, styles.mt13]}>
        <Text style={styles.sameFacesText}>Same Faces</Text>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-26146@3x.png")}
        />
        <Text style={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
        {select && (
          <Image
            style={styles.iconAwesomeCheckCircle}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle@3x.png")}
          />
        )}
      </View>
      <Pressable
        style={[styles.namePressable, styles.mt35]}
        onPress={() => navigation.navigate("GroupFeed")}
      >
        <Text style={styles.sameJobsText}>Same Jobs</Text>
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-26147@3x.png")}
        />
        <Text style={styles.loremIpsumDolorSitAmetCo1}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
        {select && (
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-244@3x.png")}
          />
        )}
      </Pressable>

      {/* <Text style={[styles.archiveText, styles.mt8]}>Archive</Text>
      <Text style={[styles.archiveText1, styles.mt_19]}>Delete</Text>
      <Text style={[styles.archiveText2, styles.mt_19, styles.mr111]}>
        Read All
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mr121: {
    marginRight: 121,
  },
  mt10: {
    marginTop: 10,
  },
  mr2: {
    marginRight: 2,
  },
  mt_23: {
    marginTop: -23,
  },
  mr49: {
    marginRight: 49,
  },
  mt17: {
    marginTop: 17,
  },
  mt13: {
    marginTop: 13,
  },
  mt35: {
    marginTop: 35,
  },
  mt8: {
    marginTop: 8,
  },
  mt_19: {
    marginTop: -19,
  },
  mr111: {
    marginRight: 111,
  },
  groupText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -29,
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
    width: 58,
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
  component3View: {
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
    height: 34,
  },
  sameFacesText: {
    position: "absolute",
    marginLeft: 2.76,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 35.51,
    maxHeight: "100%",
    width: 88,
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 148,
    height: 59,
  },
  iconAwesomeCheckCircle: {
    position: "absolute",
    marginTop: -10.44,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView: {
    position: "relative",
    width: 299.51,
    height: 88,
    alignSelf: "flex-start",
  },
  sameJobsText: {
    position: "absolute",
    marginLeft: 3,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 36,
    maxHeight: "100%",
    width: 88,
  },
  loremIpsumDolorSitAmetCo1: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 148,
    height: 59,
  },
  ellipseIcon: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  namePressable: {
    position: "relative",
    width: 300,
    height: 88,
    alignSelf: "flex-start",
  },
  sameNamesText: {
    position: "absolute",
    marginLeft: 3,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 36,
    maxHeight: "100%",
    width: 88,
  },
  loremIpsumDolorSitAmetCo2: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 148,
    height: 59,
  },
  ellipseIcon1: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView1: {
    position: "relative",
    width: 300,
    height: 88,
    alignSelf: "flex-start",
  },
  samePersonalityText: {
    position: "absolute",
    top: 0,
    right: 11,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 36,
    maxHeight: "100%",
    width: 88,
  },
  loremIpsumDolorSitAmetCo3: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 148,
    height: 59,
  },
  ellipseIcon2: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView2: {
    position: "relative",
    width: 300,
    height: 88,
    alignSelf: "flex-start",
  },
  sameInterestsText: {
    position: "absolute",
    top: 0,
    right: 30,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "center",
  },
  rectangleIcon4: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 36,
    maxHeight: "100%",
    width: 88,
  },
  loremIpsumDolorSitAmetCo4: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 148,
    height: 59,
  },
  ellipseIcon3: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: 0,
    width: 20,
    height: 20,
  },
  nameView3: {
    position: "relative",
    width: 300,
    height: 88,
    alignSelf: "flex-start",
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
  groupFeedEditView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: 36,
    paddingTop: 40,
    paddingRight: 37,
    alignItems: "flex-end",
  },
});

export default GroupFeedEdit;
