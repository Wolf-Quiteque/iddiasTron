import * as React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
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

  const [interests, setinterests] = React.useState(false);

  var interestsArray = []

  async function addIntrest() {
    const docRef = doc(firestore, "users", user.email);
    const data = {
      interests: interests,
    };
    setDoc(docRef, data, { merge: true })
      .then(() => {
        navigation.navigate("FaceRecognition", {
          name: user.name,
          email: user.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }



 


  return (
    <View style={styles.interestsView}>
      <Text style={[styles.interestsText, styles.ml109]}>Interests</Text>{" "}
       <Pressable
        onPress={() => {
          interestsArray.push("Travel");
          console.log(interestsArray)
        }}
      > <ImageBackground
        style={[styles.green,styles.imageIcon, styles.mt36,]}
        resizeMode="cover"
        source={require("../assets/image@3x.png")}
      />
      <Text style={[styles.travelText, styles.mt_62, styles.ml43]}>
          Travel
        </Text>
        </Pressable>

      <Pressable
        onPress={() => {
          interestsArray.push("Music");
          console.log(interestsArray)
        }}
      > <ImageBackground
          style={[styles.green,styles.imageIcon1, styles.mt_100, styles.ml156]}
          resizeMode="cover"
          source={require("../assets/image1@3x.png")}
        /> 
        <Text style={[styles.musicText, styles.mt_25, styles.ml203]}>
          Music
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          interestsArray.push("Sports");
          console.log(interestsArray)
        }}
      > <ImageBackground
          style={[styles.green, styles.imageIcon2, styles.mt52]}
          resizeMode="cover"
          source={require("../assets/image2@3x.png")}
        /> 
        <Text style={[styles.musicText, styles.mt_25, styles.ml203]}>
          Sports
        </Text>
        </Pressable>
     
      
        <Pressable
          onPress={() => {
            interestsArray.push("Art");
            console.log(interestsArray)
          }}
        > <ImageBackground
          style={[styles.green, styles.imageIcon3, styles.mt_100, styles.ml156]}
          resizeMode="cover"
          source={require("../assets/image3@3x.png")}
        />
        <Text style={[styles.artText, styles.mt_25, styles.ml214]}>Art</Text>
        </Pressable>
    
        
       <Pressable
          onPress={() => {
            interestsArray.push("Food");
            console.log(interestsArray)
         }}
        > <ImageBackground
          style={[styles.green, styles.imageIcon4, styles.mt52]}
          resizeMode="cover"
          source={require("../assets/image4@3x.png")}
        />
        <Text style={[styles.foodText, styles.mt_62, styles.ml49]}>Food</Text>
        </Pressable>
      
      
        <Pressable
          onPress={() => {
            interestsArray.push("Technology");
            console.log(interestsArray)
          }}
        ><ImageBackground
          style={[styles.green, styles.imageIcon5, styles.mt_100, styles.ml156]}
          resizeMode="cover"
          source={require("../assets/image5@3x.png")}
        />
          <Text style={[styles.technologyText, styles.mt_25, styles.ml174]}>Technology</Text>
        </Pressable>
        
      
       <Pressable
          onPress={() => {
            interestsArray.push("Cinema");
            console.log(interestsArray)
          }}
        > <ImageBackground
            style={[styles.green, styles.imageIcon6, styles.mt52]}
            resizeMode="cover"
            source={require("../assets/image6@3x.png")}
        /> 
        <Text style={[styles.cinemaText, styles.mt_62, styles.ml37]}>Cinema</Text>
        </Pressable>
      
      
       <Pressable
          onPress={() => {
            interestsArray.push("Literature");
            console.log(interestsArray)
          }}
        > <ImageBackground
          style={[styles.green, styles.imageIcon7, styles.mt_100, styles.ml156]}
          resizeMode="cover"
          source={require("../assets/image7@3x.png")}
        />
        <Text style={[styles.literatureText, styles.mt_25, styles.ml181]}>Literature</Text>
        </Pressable>
        
     
         <Pressable
            onPress={() => {
            interestsArray.push("Fashion");
            console.log(interestsArray)
            }}
          > <ImageBackground
            style={[styles.green, styles.imageIcon8, styles.mt52, styles.ml1]}
            resizeMode="cover"
            source={require("../assets/image8@3x.png")}
          />
          <Text style={[styles.fashionText, styles.mt_62, styles.ml37]}>Fashion</Text>
          </Pressable>
            
        <Pressable
          onPress={() => {
          interestsArray.push("Design");
            console.log(interestsArray)
            }}
          > <ImageBackground
            style={[styles.green, styles.imageIcon9, styles.mt_100]}
            resizeMode="cover"
            source={require("../assets/image9@3x.png")}
          />
          <Text style={[styles.designText, styles.mt_25, styles.ml198]}>Design</Text>
          </Pressable>
    
        
      
      
      <Pressable
        style={[styles.continuePressable, styles.mt101]}
        onPress={() => navigation.navigate("FaceRecognition")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.continueText}>Continue</Text>
      </Pressable>
    </View>
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
    marginTop: 52,
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
    marginTop: 101,
  },
  interestsText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 87,
  },
  green: {
    border:"6px solid #21ae9c;"
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
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 62,
  },
  musicText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Quicksand",
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
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 65,
  },
  artText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Quicksand",
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
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 49,
  },
  technologyText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Quicksand",
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
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 73,
  },
  literatureText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Quicksand",
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
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 75,
  },
  designText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Quicksand",
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
  },
  continueText: {
    position: "absolute",
    marginTop: -11,
    marginLeft: -38,
    top: "50%",
    left: "50%",
    fontSize: 18,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "Quicksand",
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
    paddingLeft: 36,
    paddingTop: 39,
    paddingRight: 36,
    alignItems: "flex-start",
  },
});

export default Interests;
