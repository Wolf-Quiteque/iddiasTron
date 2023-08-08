import * as React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  collection,
  addDoc,
  orderBy,
  query,
  getDoc,
  onSnapshot,
  getDocs,
  where,
  doc,
  setDoc,
} from "firebase/firestore";
import { firestore, storage } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const Interests = ({ route }) => {
  const user = route.params;
  const navigation = useNavigation();

  const [interests, setinterests] = React.useState(true);

  async function addInterest() {
    const data = {
      email: user.email,
      interests: interestsArray,
    };

    try {
      await fetch("https://iddias-api-sehk.vercel.app/api/iddias/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      navigation.navigate("FaceRecognition", {
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      console.log(error);
    }
  }

  var interestsArray = [];
  React.useEffect(() => {
    setInterval(() => {
      if (interestsArray.length == 3) {
        setinterests(false);
        addInterest();
      }
    }, 800);
  }, []);

  return (
    <ScrollView>
      <View style={styles.interestsView}>
        <Text style={[styles.interestsText, styles.ml109]}>Interests</Text>

        <ImageBackground
          style={[styles.imageIcon, styles.mt36]}
          resizeMode="cover"
          source={require("../assets/image.png")}
        />

        <ImageBackground
          style={[styles.imageIcon1, styles.mt_100, styles.ml156]}
          resizeMode="cover"
          source={require("../assets/image1.png")}
        />

        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              if (interests) {
                interestsArray.push("Travel");
              }
            }}
          >
            <Text style={[styles.travelText, styles.mt_62, styles.ml43]}>
              Travel
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              if (interests) {
                interestsArray.push("Music");
              }
            }}
          >
            <Text
              style={[
                styles.musicText,
                styles.mt_25,
                styles.ml203,
                styles.mt_margin,
              ]}
            >
              Music
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <ImageBackground
          style={[styles.imageIcon2, styles.mt52]}
          resizeMode="cover"
          source={require("../assets/image2.png")}
        />
        <ImageBackground
          style={[styles.imageIcon3, styles.mt_100, styles.ml156]}
          resizeMode="cover"
          source={require("../assets/image3.png")}
        />
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              if (interests) {
                interestsArray.push("Sports");
              }
            }}
          >
            <Text style={[styles.sportsText, styles.mt_62, styles.ml41]}>
              Sports
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              if (interests) {
                interestsArray.push("Art");
              }
            }}
          >
            <Text
              style={[
                styles.artText,
                styles.mt_25,
                styles.ml214,
                styles.mt_margin,
              ]}
            >
              Art
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <ImageBackground
          style={[styles.imageIcon4, styles.mt52]}
          resizeMode="cover"
          source={require("../assets/image4.png")}
        />
        <ImageBackground
          style={[styles.imageIcon5, styles.mt_100, styles.ml156]}
          resizeMode="cover"
          source={require("../assets/image5.png")}
        />

        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              if (interests) {
                interestsArray.push("Food");
              }
            }}
          >
            <Text style={[styles.foodText, styles.mt_62, styles.ml49]}>
              Food
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              if (interests) {
                interestsArray.push("Technology");
              }
            }}
          >
            <Text
              style={[
                styles.technologyText,
                styles.mt_25,
                styles.ml174,
                styles.mt_margin,
              ]}
            >
              Technology
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <ImageBackground
          style={[styles.imageIcon6, styles.mt52]}
          resizeMode="cover"
          source={require("../assets/image6.png")}
        />
        <ImageBackground
          style={[styles.imageIcon7, styles.mt_100, styles.ml156]}
          resizeMode="cover"
          source={require("../assets/image7.png")}
        />

        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              if (interests) {
                interestsArray.push("Cinema");
              }
            }}
          >
            <Text style={[styles.cinemaText, styles.mt_62, styles.ml37]}>
              Cinema
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              if (interests) {
                interestsArray.push("Literature");
              }
            }}
          >
            <Text
              style={[
                styles.literatureText,
                styles.mt_25,
                styles.ml181,
                styles.mt_margin,
              ]}
            >
              Literature
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <ImageBackground
          style={[styles.imageIcon8, styles.mt52, styles.ml]}
          resizeMode="cover"
          source={require("../assets/image8.png")}
        />
        <ImageBackground
          style={[styles.imageIcon9, styles.mt_100, styles.mt2]}
          resizeMode="cover"
          source={require("../assets/image9.png")}
        />
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              if (interests) {
                interestsArray.push("Fashion");
              }
            }}
          >
            <Text style={[styles.fashionText, styles.mt_62, styles.ml37]}>
              Fashion
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              if (interests) {
                interestsArray.push("Design");
              }
            }}
          >
            <Text
              style={[
                styles.designText,
                styles.mt_25,
                styles.ml198,
                styles.mt_margin,
              ]}
            >
              Design
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <Pressable
          style={[styles.continuePressable, styles.mt101]}
          onPress={() => addInterest()}
        >
          <View style={styles.rectangleView} />
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml109: {
    marginLeft: 109,
  },
  mt36: {
    marginTop: 36,
  },
  mt_100: {
    marginTop: -100,
  },
  ml156: {
    marginLeft: 156,
  },
  mt_62: {
    marginTop: -62,
  },
  ml43: {
    marginLeft: 43,
  },
  mt_25: {
    marginTop: -25,
  },
  ml203: {
    marginLeft: 203,
  },
  mt52: {
    marginTop: 42,
  },
  ml41: {
    marginLeft: 41,
  },
  ml214: {
    marginLeft: 214,
  },
  ml49: {
    marginLeft: 49,
  },
  ml174: {
    marginLeft: 174,
  },
  ml37: {
    marginLeft: 37,
  },
  ml181: {
    marginLeft: 181,
  },
  ml1: {
    marginLeft: 1,
  },
  ml198: {
    marginLeft: 198,
  },
  mt101: {
    marginTop: 50,
  },

  mt2: {
    marginRight: -10,
  },
  interestsText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 87,
  },
  imageIcon: {
    position: "relative",
    width: 146,
    height: 100,
  },
  imageIcon1: {
    position: "relative",
    width: 146,
    height: 100,
  },
  travelText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 62,
  },
  musicText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  imageIcon2: {
    position: "relative",
    width: 146,
    height: 100,
  },
  imageIcon3: {
    position: "relative",
    width: 146,
    height: 100,
  },
  sportsText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 65,
  },
  artText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 31,
  },
  imageIcon4: {
    position: "relative",
    width: 146,
    height: 100,
  },
  imageIcon5: {
    position: "relative",
    width: 146,
    height: 100,
  },
  foodText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 49,
  },
  technologyText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 111,
  },
  imageIcon6: {
    position: "relative",
    width: 146,
    height: 100,
  },
  imageIcon7: {
    position: "relative",
    width: 146,
    height: 100,
  },
  cinemaText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 73,
  },
  literatureText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 98,
  },
  imageIcon8: {
    position: "relative",
    width: 146,
    height: 100,
  },
  imageIcon9: {
    position: "relative",
    width: 146,
    height: 100,
    alignSelf: "flex-end",
  },
  fashionText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 75,
  },
  designText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 66,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#21ae9c",
    marginBottom: 5,
    width: 320,
  },
  continueText: {
    position: "absolute",
    marginTop: -10,
    marginLeft: -38,
    top: "50%",
    left: "50%",
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
    width: 79,
  },
  continuePressable: {
    position: "relative",
    width: 302,
    height: 48,
    alignSelf: "flex-end",
  },
  interestsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: 30,
    paddingTop: 39,
    paddingRight: 36,
    alignItems: "flex-start",
  },
  mt_margin: {
    marginTop: -60,
  },
});

export default Interests;
