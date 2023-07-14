import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FirstScreen1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.firstScreen1Pressable}
      onPress={() => navigation.navigate("FirstScreen")}
    >
      <Image
        style={styles.heroIcon}
        resizeMode="cover"
        source={"../assets/hero2@3x.png"}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  heroIcon: {
    position: "relative",
    width: 375,
    height: 812,
  },
  firstScreen1Pressable: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default FirstScreen1;
