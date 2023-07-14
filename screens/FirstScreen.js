import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FirstScreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.firstScreenPressable}
      onPress={() => navigation.navigate("SignIn")}
    >
      <View style={styles.heroView}>
        <View style={styles.photoView}>
          <Image
            style={styles.polygonIcon}
            resizeMode="cover"
            source={"../assets/polygon-5@3x.png"}
          />
          <Image
            style={styles.polygonIcon1}
            resizeMode="cover"
            source={"../assets/polygon-5@3x.png"}
          />
          <Image
            style={styles.iDDiasFinalIcon}
            resizeMode="cover"
            source={"../assets/iddiasfinal@3x.png"}
          />
        </View>
        <Image
          style={styles.iDDias1mobileappWhiteIcon}
          resizeMode="cover"
          source={"../assets/iddias1mobileappwhite@3x.png"}
        />
        <Image
          style={styles.iDDiasFinalWhiteIcon}
          resizeMode="cover"
          source={"../assets/iddiasfinal@3x.png"}
        />
        <Text style={styles.iDDIASText}>IDDIAS</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  polygonIcon: {
    position: "absolute",
    top: 29.73,
    right: -480.4,
    bottom: -234.2,
    left: -267.23,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  polygonIcon1: {
    position: "absolute",
    top: 139.8,
    right: -459.23,
    bottom: -344.27,
    left: -288.4,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  iDDiasFinalIcon: {
    position: "absolute",
    marginLeft: -71.5,
    bottom: 60,
    left: "50%",
    width: 143,
    height: 34,
    display: "none",
  },
  photoView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  iDDias1mobileappWhiteIcon: {
    position: "absolute",
    marginTop: -131,
    marginLeft: -83.5,
    top: "50%",
    left: "50%",
    width: 167,
    height: 188,
  },
  iDDiasFinalWhiteIcon: {
    position: "absolute",
    marginLeft: -83.5,
    bottom: 59,
    left: "50%",
    width: 143,
    height: 34,
    display: "none",
  },
  iDDIASText: {
    position: "absolute",
    marginLeft: -51.5,
    bottom: 55,
    left: "50%",
    fontSize: 32,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "right",
    width: 104,
  },
  heroView: {
    position: "relative",
    width: 375,
    height: 812,
  },
  firstScreenPressable: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default FirstScreen;
