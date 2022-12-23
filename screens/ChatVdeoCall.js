import * as React from "react";
import { Image, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChatVdeoCall = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatVdeoCallView}>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.rectangleIcon1, styles.mt_762, styles.ml42]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Pressable
        style={[styles.endCallPressable, styles.mt466, styles.ml158]}
        onPress={() => navigation.navigate("Chat1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/endcall.png")}
        />
      </Pressable>
      <Image
        style={[styles.cameraIcon, styles.mt_60, styles.ml68]}
        resizeMode="cover"
        source={require("../assets/camera.png")}
      />
      <Image
        style={[styles.videoIcon, styles.mt_60, styles.ml263]}
        resizeMode="cover"
        source={require("../assets/video.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt_762: {
    marginTop: -762,
  },
  ml42: {
    marginLeft: 42,
  },
  mt466: {
    marginTop: 466,
  },
  ml158: {
    marginLeft: 158,
  },
  mt_60: {
    marginTop: -60,
  },
  ml68: {
    marginLeft: 68,
  },
  ml263: {
    marginLeft: 263,
  },
  rectangleIcon: {
    position: "relative",
    width: 375,
    height: 812,
  },
  rectangleIcon1: {
    position: "relative",
    width: 103,
    height: 174,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  endCallPressable: {
    position: "relative",
    width: 75,
    height: 75,
  },
  cameraIcon: {
    position: "relative",
    width: 60,
    height: 60,
  },
  videoIcon: {
    position: "relative",
    width: 61,
    height: 60,
  },
  chatVdeoCallView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default ChatVdeoCall;
