import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChatNewChat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatNewChatView}>
      <View style={[styles.navigationBarView, styles.mr107]}>
        <Text style={styles.newChatText}>New Chat</Text>
      </View>
      <Pressable
        style={[styles.pressable, styles.mt5_03]}
        onPress={() => navigation.navigate("Chat")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={"../assets/3@3x.png"}
        />
      </Pressable>
      <View style={[styles.inputView, styles.mt15_030000000000001]}>
        <View style={styles.component2View}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.path99Icon}
            resizeMode="cover"
            source={"../assets/path-99@3x.png"}
          />
        </View>
      </View>
      <View style={[styles.personsView, styles.mt25_03]}>
        <View style={styles.nameView}>
          <Text style={styles.mikeFullerText}>Mike Fuller</Text>
          <Text style={styles.loremIpsumDolorSitAme}>
            Lorem ipsum dolor sit ame
          </Text>
          <Image
            style={styles.component9Icon}
            resizeMode="cover"
            source={"../assets/component-5@3x.png"}
          />
        </View>
        <Pressable
          style={styles.namePressable}
          onPress={() => navigation.navigate("Chat1")}
        >
          <Text style={styles.johnDoeText}>John Doe</Text>
          <Text style={styles.loremIpsumDolorSitAme1}>
            Lorem ipsum dolor sit ame
          </Text>
          <Image
            style={styles.component10Icon}
            resizeMode="cover"
            source={"../assets/component-6@3x.png"}
          />
        </Pressable>
        <View style={styles.nameView1}>
          <Text style={styles.jasonCalebText}>Jason Caleb</Text>
          <Text style={styles.loremIpsumDolorSitAme2}>
            Lorem ipsum dolor sit ame
          </Text>
          <Image
            style={styles.component11Icon}
            resizeMode="cover"
            source={"../assets/component-7@3x.png"}
          />
        </View>
        <View style={styles.nameView2}>
          <Text style={styles.familyGroupText}>Family Group</Text>
          <Text style={styles.loremIpsumDolorSitAme3}>
            Lorem ipsum dolor sit ame
          </Text>
          <Image
            style={styles.component12Icon}
            resizeMode="cover"
            source={"../assets/component-8@3x.png"}
          />
        </View>
        <View style={styles.nameView3}>
          <Text style={styles.neliaCamposText}>Nelia Campos</Text>
          <Text style={styles.loremIpsumDolorSitAme4}>
            Lorem ipsum dolor sit ame
          </Text>
          <Image
            style={styles.component13Icon}
            resizeMode="cover"
            source={"../assets/component-9@3x.png"}
          />
        </View>
        <View style={styles.nameView4}>
          <Text style={styles.juliaMendesText}>Julia Mendes</Text>
          <Text style={styles.loremIpsumDolorSitAme5}>
            Lorem ipsum dolor sit ame
          </Text>
          <Image
            style={styles.component14Icon}
            resizeMode="cover"
            source={"../assets/component-10@3x.png"}
          />
        </View>
        <View style={styles.nameView5}>
          <Text style={styles.ruiPatalimText}>Rui Patalim</Text>
          <Text style={styles.loremIpsumDolorSitAme6}>
            Lorem ipsum dolor sit ame
          </Text>
          <Image
            style={styles.component15Icon}
            resizeMode="cover"
            source={"../assets/component-6@3x.png"}
          />
        </View>
        <View style={styles.nameView6}>
          <Text style={styles.soniaFerreiraText}>Sonia Ferreira</Text>
          <Text style={styles.loremIpsumDolorSitAme7}>
            Lorem ipsum dolor sit ame
          </Text>
          <Image
            style={styles.component16Icon}
            resizeMode="cover"
            source={"../assets/component-12@3x.png"}
          />
        </View>
        <View style={styles.nameView7}>
          <Text style={styles.lciaMontesText}>Lúcia Montes</Text>
          <Text style={styles.loremIpsumDolorSitAme8}>
            Lorem ipsum dolor sit ame
          </Text>
          <Image
            style={styles.component17Icon}
            resizeMode="cover"
            source={"../assets/component-91@3x.png"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mr107: {
    marginRight: 107,
  },
  mt5_03: {
    marginTop: 5.03,
  },
  mt15_030000000000001: {
    marginTop: 15.030000000000001,
  },
  mt25_03: {
    marginTop: 25.03,
  },
  newChatText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -46,
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
    width: 92,
    height: 25,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  pressable: {
    position: "relative",
    width: 33.94,
    height: 33.94,
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
  component2View: {
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
    marginLeft: -58.5,
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
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component9Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 47,
  },
  johnDoeText: {
    position: "absolute",
    marginLeft: -58.5,
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
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component10Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  namePressable: {
    position: "absolute",
    top: 67,
    right: 0,
    left: 0,
    height: 47,
  },
  jasonCalebText: {
    position: "absolute",
    marginLeft: -58.5,
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
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component11Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView1: {
    position: "absolute",
    marginTop: -157.5,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  familyGroupText: {
    position: "absolute",
    marginLeft: -58.5,
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
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component12Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView2: {
    position: "absolute",
    marginTop: -90.5,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  neliaCamposText: {
    position: "absolute",
    marginLeft: -58.5,
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
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component13Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView3: {
    position: "absolute",
    marginTop: -23.5,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  juliaMendesText: {
    position: "absolute",
    marginLeft: -58.5,
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
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component14Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView4: {
    position: "absolute",
    marginTop: 43.5,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  ruiPatalimText: {
    position: "absolute",
    marginLeft: -58.5,
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
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component15Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView5: {
    position: "absolute",
    marginTop: 110.5,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  soniaFerreiraText: {
    position: "absolute",
    marginLeft: -58.5,
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
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component16Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView6: {
    position: "absolute",
    right: 0,
    bottom: 67,
    left: 0,
    height: 47,
  },
  lciaMontesText: {
    position: "absolute",
    marginLeft: -58.5,
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
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component17Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView7: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: 47,
  },
  personsView: {
    position: "relative",
    width: 253,
    height: 583,
    alignSelf: "flex-start",
  },
  chatNewChatView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: 36,
    paddingTop: 40,
    paddingRight: 34,
    alignItems: "flex-end",
  },
});

export default ChatNewChat;
