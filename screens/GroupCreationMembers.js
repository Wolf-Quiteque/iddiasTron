import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GroupCreationMembers = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupCreationMembersView}>
      <View style={[styles.navigationBarView, styles.mr1]}>
        <Text style={styles.addMembersText}>Add Members</Text>
        <Pressable
          style={styles.nextPressable}
          onPress={() => navigation.navigate("GroupCreationNaming")}
        >
          <Text style={styles.nextText}>Next</Text>
        </Pressable>
        <Pressable
          style={styles.backwardArrowPressable}
          onPress={() => navigation.navigate("GroupFeed")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/backward-arrow.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.inputView, styles.mt29]}>
        <View style={styles.component1View}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.path99Icon}
            resizeMode="cover"
            source={require("../assets/path-99.png")}
          />
        </View>
      </View>
      <View style={[styles.memberView, styles.mt21, styles.mr1]}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-236.png")}
        />
        <Text style={styles.nliaMatosText}>Nélia Matos</Text>
        <Image
          style={styles.iconAwesomeCheckCircle}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle.png")}
        />
      </View>
      <View style={[styles.memberView1, styles.mt11, styles.mr1]}>
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../assets/ellipse-237.png")}
        />
        <Text style={styles.nliaBarrosoText}>Nélia Barroso</Text>
        <Image
          style={styles.iconAwesomeCheckCircle1}
          resizeMode="cover"
          source={require("../assets/icon-awesomecheckcircle.png")}
        />
      </View>
      <View style={[styles.memberView2, styles.mt11, styles.mr1]}>
        <Image
          style={styles.ellipseIcon2}
          resizeMode="cover"
          source={require("../assets/ellipse-2361.png")}
        />
        <Text style={styles.nliaCarneiroText}>Nélia Carneiro</Text>
        <Image
          style={styles.ellipseIcon3}
          resizeMode="cover"
          source={require("../assets/ellipse-244.png")}
        />
      </View>
      <View style={[styles.memberView3, styles.mt11, styles.mr1]}>
        <Image
          style={styles.ellipseIcon4}
          resizeMode="cover"
          source={require("../assets/ellipse-2362.png")}
        />
        <Text style={styles.nliaCardosoText}>Nélia Cardoso</Text>
        <Image
          style={styles.ellipseIcon5}
          resizeMode="cover"
          source={require("../assets/ellipse-244.png")}
        />
      </View>
      <View style={[styles.memberView4, styles.mt12, styles.mr1]}>
        <Image
          style={styles.ellipseIcon6}
          resizeMode="cover"
          source={require("../assets/ellipse-2363.png")}
        />
        <Text style={styles.nliaPereiraText}>Nélia Pereira</Text>
        <Image
          style={styles.ellipseIcon7}
          resizeMode="cover"
          source={require("../assets/ellipse-244.png")}
        />
      </View>
      <View style={[styles.memberView5, styles.mt11, styles.mr1]}>
        <Image
          style={styles.ellipseIcon8}
          resizeMode="cover"
          source={require("../assets/ellipse-2364.png")}
        />
        <Text style={styles.nliaOliveiraText}>Nélia Oliveira</Text>
        <Image
          style={styles.ellipseIcon9}
          resizeMode="cover"
          source={require("../assets/ellipse-244.png")}
        />
      </View>
      <View style={[styles.memberView6, styles.mt11, styles.mr1]}>
        <Image
          style={styles.ellipseIcon10}
          resizeMode="cover"
          source={require("../assets/ellipse-2365.png")}
        />
        <Text style={styles.nliaSilvaText}>Nélia Silva</Text>
        <Image
          style={styles.ellipseIcon11}
          resizeMode="cover"
          source={require("../assets/ellipse-244.png")}
        />
      </View>
      <View style={[styles.memberView7, styles.mt11, styles.mr1]}>
        <Image
          style={styles.ellipseIcon12}
          resizeMode="cover"
          source={require("../assets/ellipse-2366.png")}
        />
        <Text style={styles.nliaVieiraText}>Nélia Vieira</Text>
        <Image
          style={styles.ellipseIcon13}
          resizeMode="cover"
          source={require("../assets/ellipse-244.png")}
        />
      </View>
      <View style={[styles.memberView8, styles.mt11]}>
        <Image
          style={styles.ellipseIcon14}
          resizeMode="cover"
          source={require("../assets/ellipse-2367.png")}
        />
        <Text style={styles.nliaCerqueiraText}>Nélia Cerqueira</Text>
        <Image
          style={styles.ellipseIcon15}
          resizeMode="cover"
          source={require("../assets/ellipse-244.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mr1: {
    marginRight: 1,
  },
  mt29: {
    marginTop: 29,
  },
  mt21: {
    marginTop: 21,
  },
  mt11: {
    marginTop: 11,
  },
  mt12: {
    marginTop: 12,
  },
  addMembersText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -64,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nextText: {
    marginTop: -9.5,
    marginLeft: 115,
    fontSize: 16,
    fontFamily: "Quicksand",
    color: "#15abb5",
    textAlign: "left",
  },
  nextPressable: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  icon: {
    marginTop: -7.5,
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
    height: 34,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaMatosText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.74,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  iconAwesomeCheckCircle: {
    position: "absolute",
    marginTop: -10.44,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView: {
    position: "relative",
    width: 297.49,
    height: 60,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaBarrosoText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.74,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  iconAwesomeCheckCircle1: {
    position: "absolute",
    marginTop: -10.44,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView1: {
    position: "relative",
    width: 297.49,
    height: 60,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaCarneiroText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  ellipseIcon3: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView2: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaCardosoText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon5: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView3: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon6: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaPereiraText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon7: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView4: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon8: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaOliveiraText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon9: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView5: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon10: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaSilvaText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon11: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView6: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon12: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaVieiraText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon13: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView7: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon14: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaCerqueiraText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon15: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView8: {
    position: "relative",
    width: 297,
    height: 60,
  },
  groupCreationMembersView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: 35,
    paddingTop: 40,
    paddingRight: 37,
    alignItems: "flex-end",
  },
});

export default GroupCreationMembers;
