import * as React from "react";
import { Text, StyleSheet, Pressable, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GroupFeed2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupFeed2View}>
      <View style={[styles.navigationBarView, styles.ml34]}>
        <Pressable
          style={styles.cancelPressable}
          onPress={() => navigation.navigate("GroupFeed1")}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
        <Pressable
          style={styles.sendPressable}
          onPress={() => navigation.navigate("GroupFeed1")}
        >
          <View style={styles.rectangleView} />
          <Text style={styles.sendText}>Send</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.profileIcon, styles.mt10, styles.ml34]}
        resizeMode="cover"
        source={require("../assets/profile22.png")}
      />
      <Text style={[styles.whatsNewText, styles.mt_28, styles.ml86]}>
        What's new?
      </Text>
      <Image
        style={[styles.maskGroup2, styles.mt22, styles.ml36]}
        resizeMode="cover"
        source={require("../assets/mask-group-2.png")}
      />
      <Image
        style={[styles.galleryIcon, styles.mt18, styles.ml4]}
        resizeMode="cover"
        source={require("../assets/gallery.png")}
      />
      <View style={[styles.keyboardUppercaseView, styles.mt5]}>
        <View style={styles.fillsGray} />
        <Image
          style={styles.emojiGlyphIcon}
          resizeMode="cover"
          source={require("../assets/emoji-glyph.png")}
        />
        <Image
          style={styles.dictationGlyphIcon}
          resizeMode="cover"
          source={require("../assets/dictation-glyph.png")}
        />
        <View style={styles.bottomRowView}>
          <View style={styles.labelView}>
            <Text style={styles.labelText}>Label</Text>
          </View>
          <View style={styles.spaceView}>
            <Text style={styles.spaceText}>
              <Text style={styles.spacText}>spac</Text>e
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>123</Text>
          </View>
        </View>
        <View style={styles.thirdRowView}>
          <View style={styles.deleteView}>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-2.png")}
            />
          </View>
          <View style={styles.mView}>
            <Text style={styles.mText}>M</Text>
          </View>
          <View style={styles.nView}>
            <Text style={styles.nText}>N</Text>
          </View>
          <View style={styles.bView}>
            <Text style={styles.bText}>B</Text>
          </View>
          <View style={styles.vView}>
            <Text style={styles.vText}>V</Text>
          </View>
          <View style={styles.cView}>
            <Text style={styles.cText}>C</Text>
          </View>
          <View style={styles.xView}>
            <Text style={styles.xText}>X</Text>
          </View>
          <View style={styles.zView}>
            <Text style={styles.zText}>Z</Text>
          </View>
          <View style={styles.shiftView}>
            <Image
              style={styles.path3Icon}
              resizeMode="cover"
              source={require("../assets/path-3.png")}
            />
          </View>
        </View>
        <View style={styles.secondRowView}>
          <View style={styles.lView}>
            <Text style={styles.lText}>L</Text>
          </View>
          <View style={styles.kView}>
            <Text style={styles.kText}>K</Text>
          </View>
          <View style={styles.jView}>
            <Text style={styles.jText}>J</Text>
          </View>
          <View style={styles.hView}>
            <Text style={styles.hText}>H</Text>
          </View>
          <View style={styles.gView}>
            <Text style={styles.gText}>G</Text>
          </View>
          <View style={styles.fView}>
            <Text style={styles.fText}>F</Text>
          </View>
          <View style={styles.dView}>
            <Text style={styles.dText}>D</Text>
          </View>
          <View style={styles.sView}>
            <Text style={styles.sText}>S</Text>
          </View>
          <View style={styles.aView}>
            <Text style={styles.aText}>A</Text>
          </View>
        </View>
        <View style={styles.topRowView}>
          <View style={styles.pView}>
            <View style={styles.keyView} />
            <Text style={styles.pText}>P</Text>
          </View>
          <View style={styles.oView}>
            <View style={styles.keyView1} />
            <Text style={styles.oText}>O</Text>
          </View>
          <View style={styles.iView}>
            <View style={styles.keyView2} />
            <Text style={styles.iText}>I</Text>
          </View>
          <View style={styles.uView}>
            <View style={styles.keyView3} />
            <Text style={styles.uText}>U</Text>
          </View>
          <View style={styles.yView}>
            <View style={styles.keyView4} />
            <Text style={styles.yText}>Y</Text>
          </View>
          <View style={styles.tView}>
            <View style={styles.keyView5} />
            <Text style={styles.tText}>T</Text>
          </View>
          <View style={styles.rView}>
            <View style={styles.keyView6} />
            <Text style={styles.rText}>R</Text>
          </View>
          <View style={styles.eView}>
            <View style={styles.keyView7} />
            <Text style={styles.eText}>E</Text>
          </View>
          <View style={styles.wView}>
            <View style={styles.keyView8} />
            <Text style={styles.wText}>W</Text>
          </View>
          <View style={styles.qView}>
            <View style={styles.keyView9} />
            <Text style={styles.qText}>Q</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml34: {
    marginLeft: 34,
  },
  mt10: {
    marginTop: 10,
  },
  mt_28: {
    marginTop: -28,
  },
  ml86: {
    marginLeft: 86,
  },
  mt22: {
    marginTop: 22,
  },
  ml36: {
    marginLeft: 36,
  },
  mt18: {
    marginTop: 18,
  },
  ml4: {
    marginLeft: 4,
  },
  mt5: {
    marginTop: 5,
  },
  cancelText: {
    marginTop: -12,
    marginLeft: -152,
    fontSize: 18,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  cancelPressable: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#15abb5",
  },
  sendText: {
    position: "absolute",
    marginLeft: -19,
    top: 3,
    left: "50%",
    fontSize: 16,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  sendPressable: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 60,
  },
  navigationBarView: {
    position: "relative",
    width: 304,
    height: 26,
  },
  profileIcon: {
    position: "relative",
    width: 36,
    height: 36,
  },
  whatsNewText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  maskGroup2: {
    position: "relative",
    width: 302,
    height: 302,
  },
  galleryIcon: {
    position: "relative",
    width: 368,
    height: 70,
  },
  fillsGray: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(210, 213, 219, 0.94)",
  },
  emojiGlyphIcon: {
    position: "absolute",
    bottom: 27,
    left: 25,
    width: 27,
    height: 27,
  },
  dictationGlyphIcon: {
    position: "absolute",
    right: 30,
    bottom: 28,
    width: 15,
    height: 25,
  },
  labelText: {
    position: "absolute",
    marginTop: -10.5,
    marginLeft: -20.25,
    top: "50%",
    left: "50%",
    fontSize: 16,
    letterSpacing: -0.32,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 41,
    height: 19,
  },
  labelView: {
    position: "absolute",
    height: "100%",
    width: "23.71%",
    top: "0%",
    right: 0,
    bottom: "0%",
    left: "76.29%",
    borderRadius: 5,
    backgroundColor: "#aaadb3",
    shadowColor: "rgba(4, 4, 15, 0.36)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  spacText: {
    letterSpacing: -0.32,
  },
  spaceText: {
    position: "absolute",
    marginTop: -10.5,
    marginLeft: -21.05,
    top: "50%",
    left: "50%",
    fontSize: 16,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 45,
    height: 19,
  },
  spaceView: {
    position: "absolute",
    height: "100%",
    width: "49.42%",
    top: "0%",
    right: "25.37%",
    bottom: "0%",
    left: "25.2%",
    borderRadius: 5,
    backgroundColor: "#fefefe",
    shadowColor: "rgba(4, 4, 15, 0.36)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  text: {
    position: "absolute",
    marginTop: -9.5,
    marginLeft: -14.03,
    top: "50%",
    left: "50%",
    fontSize: 16,
    letterSpacing: -0.32,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 28,
    height: 19,
  },
  view: {
    position: "absolute",
    height: "100%",
    width: "23.29%",
    top: "0%",
    right: "76.71%",
    bottom: "0%",
    left: 0,
    borderRadius: 5,
    backgroundColor: "#aaadb3",
    shadowColor: "rgba(4, 4, 15, 0.36)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  bottomRowView: {
    position: "absolute",
    height: "14.43%",
    width: "98.67%",
    top: "58.76%",
    right: "0.8%",
    bottom: "26.8%",
    left: "0.53%",
  },
  groupIcon: {
    position: "absolute",
    marginTop: -8.5,
    marginLeft: -11.38,
    top: "50%",
    left: "50%",
    width: 22.88,
    height: 17,
  },
  deleteView: {
    position: "absolute",
    height: "100%",
    width: "11.38%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "88.62%",
    borderRadius: 5,
    backgroundColor: "#aaadb3",
    shadowColor: "rgba(4, 4, 15, 0.36)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  mText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -10,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  mView: {
    position: "absolute",
    height: "100%",
    width: "8.54%",
    top: "0%",
    right: "15.18%",
    bottom: "0%",
    left: "76.29%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  nText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nView: {
    position: "absolute",
    height: "100%",
    width: "8.54%",
    top: "0%",
    right: "25.34%",
    bottom: "0%",
    left: "66.12%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  bText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -6.75,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  bView: {
    position: "absolute",
    height: "100%",
    width: "8.54%",
    top: "0%",
    right: "35.5%",
    bottom: "0%",
    left: "55.96%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  vText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -7,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  vView: {
    position: "absolute",
    height: "100%",
    width: "8.54%",
    top: "0%",
    right: "45.66%",
    bottom: "0%",
    left: "45.8%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  cText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  cView: {
    position: "absolute",
    height: "100%",
    width: "8.54%",
    top: "0%",
    right: "55.96%",
    bottom: "0%",
    left: "35.5%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  xText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -7.25,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  xView: {
    position: "absolute",
    height: "100%",
    width: "8.54%",
    top: "0%",
    right: "66.12%",
    bottom: "0%",
    left: "25.34%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  zText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -7.25,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  zView: {
    position: "absolute",
    height: "100%",
    width: "8.54%",
    top: "0%",
    right: "76.29%",
    bottom: "0%",
    left: "15.18%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  path3Icon: {
    position: "absolute",
    marginTop: -8,
    marginLeft: -9,
    top: "50%",
    left: "50%",
    width: 18,
    height: 16,
  },
  shiftView: {
    position: "absolute",
    height: "100%",
    width: "11.38%",
    top: "0%",
    right: "88.62%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  thirdRowView: {
    position: "absolute",
    marginTop: -27.5,
    width: "98.4%",
    top: "50%",
    right: "0.8%",
    left: "0.8%",
    height: 42,
  },
  lText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -6.25,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  lView: {
    position: "absolute",
    height: "100%",
    width: "9.49%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "90.51%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  kText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -6.75,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  kView: {
    position: "absolute",
    height: "100%",
    width: "9.49%",
    top: "0%",
    right: "11.3%",
    bottom: "0%",
    left: "79.22%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  jText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -6.5,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  jView: {
    position: "absolute",
    height: "100%",
    width: "9.49%",
    top: "0%",
    right: "22.59%",
    bottom: "0%",
    left: "67.92%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  hText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  hView: {
    position: "absolute",
    height: "100%",
    width: "9.49%",
    top: "0%",
    right: "33.89%",
    bottom: "0%",
    left: "56.63%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  gText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -7.75,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  gView: {
    position: "absolute",
    height: "100%",
    width: "9.49%",
    top: "0%",
    right: "45.18%",
    bottom: "0%",
    left: "45.33%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  fText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -6.25,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  fView: {
    position: "absolute",
    height: "100%",
    width: "9.49%",
    top: "0%",
    right: "56.63%",
    bottom: "0%",
    left: "33.89%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  dText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  dView: {
    position: "absolute",
    height: "100%",
    width: "9.49%",
    top: "0%",
    right: "67.92%",
    bottom: "0%",
    left: "22.59%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  sText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -7,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  sView: {
    position: "absolute",
    height: "100%",
    width: "9.49%",
    top: "0%",
    right: "79.22%",
    bottom: "0%",
    left: "11.3%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  aText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -7,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  aView: {
    position: "absolute",
    height: "100%",
    width: "9.49%",
    top: "0%",
    right: "90.51%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  secondRowView: {
    position: "absolute",
    height: "14.43%",
    width: "88.53%",
    top: "21.99%",
    right: "5.73%",
    bottom: "63.57%",
    left: "5.73%",
  },
  keyView: {
    position: "absolute",
    marginTop: -21,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 42,
  },
  pText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -7,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  pView: {
    position: "absolute",
    marginTop: -21,
    width: "8.54%",
    top: "50%",
    right: "0%",
    left: "91.46%",
    height: 42,
  },
  keyView1: {
    position: "absolute",
    marginTop: -21,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 42,
  },
  oText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  oView: {
    position: "absolute",
    marginTop: -21,
    width: "8.54%",
    top: "50%",
    right: "10.16%",
    left: "81.3%",
    height: 42,
  },
  keyView2: {
    position: "absolute",
    marginTop: -21,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 42,
  },
  iText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -3.25,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  iView: {
    position: "absolute",
    marginTop: -21,
    width: "8.54%",
    top: "50%",
    right: "20.33%",
    left: "71.14%",
    height: 42,
  },
  keyView3: {
    position: "absolute",
    marginTop: -21,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 42,
  },
  uText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -8.25,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  uView: {
    position: "absolute",
    marginTop: -21,
    width: "8.54%",
    top: "50%",
    right: "30.49%",
    left: "60.98%",
    height: 42,
  },
  keyView4: {
    position: "absolute",
    marginTop: -21,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 42,
  },
  yText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -6.75,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  yView: {
    position: "absolute",
    marginTop: -21,
    width: "8.54%",
    top: "50%",
    right: "40.65%",
    left: "50.81%",
    height: 42,
  },
  keyView5: {
    position: "absolute",
    marginTop: -21,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 42,
  },
  tText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -7.25,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  tView: {
    position: "absolute",
    marginTop: -21,
    width: "8.54%",
    top: "50%",
    right: "50.81%",
    left: "40.65%",
    height: 42,
  },
  keyView6: {
    position: "absolute",
    marginTop: -21,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 42,
  },
  rText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -7,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  rView: {
    position: "absolute",
    marginTop: -21,
    width: "8.54%",
    top: "50%",
    right: "60.98%",
    left: "30.49%",
    height: 42,
  },
  keyView7: {
    position: "absolute",
    marginTop: -21,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 42,
  },
  eText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -6,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  eView: {
    position: "absolute",
    marginTop: -21,
    width: "8.54%",
    top: "50%",
    right: "71.14%",
    left: "20.33%",
    height: 42,
  },
  keyView8: {
    position: "absolute",
    marginTop: -21,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 42,
  },
  wText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -11.25,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  wView: {
    position: "absolute",
    marginTop: -21,
    width: "8.54%",
    top: "50%",
    right: "81.3%",
    left: "10.16%",
    height: 42,
  },
  keyView9: {
    position: "absolute",
    marginTop: -21,
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.35)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 42,
  },
  qText: {
    position: "absolute",
    marginTop: -13.75,
    marginLeft: -8,
    top: "50%",
    left: "50%",
    fontSize: 23,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  qView: {
    position: "absolute",
    marginTop: -21,
    width: "8.54%",
    top: "50%",
    right: "91.46%",
    left: "0%",
    height: 42,
  },
  topRowView: {
    position: "absolute",
    height: "14.43%",
    width: "98.4%",
    top: "3.44%",
    right: "0.8%",
    bottom: "82.13%",
    left: "0.8%",
  },
  keyboardUppercaseView: {
    position: "relative",
    width: 375,
    height: 291,
  },
  groupFeed2View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "flex-start",
  },
});

export default GroupFeed2;
