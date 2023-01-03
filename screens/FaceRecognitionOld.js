import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytes } from "firebase/storage";
import { useDispatch } from "react-redux";
import { setSignIn } from "../redux/slices/authSlice";
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
const FaceRecognitionOld = ({ route }) => {
  const user = route.params;
  const navigation = useNavigation();
  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  async function addAvatar(avatar) {
    const docRef = doc(firestore, "users", user.email);
    const data = {
      avatar: avatar,
    };
    setDoc(docRef, data, { merge: true })
      .then(() => {
        console.log("Document has been added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const dispatch = useDispatch();

  async function uploadImageAsync(uri) {
    const storageRef = ref(storage, user.name + user.email + ".jpg");

    const mountainImagesRef = ref(storage, "profile/" + user.name + ".jpg");

    storageRef.name === mountainImagesRef.name; // true
    storageRef.fullPath === mountainImagesRef.fullPath;

    await uploadBytes(storageRef, uri).then((snapshot) => {
      console.log("Uploaded file!");
    });

    addAvatar(user.name + user.email + ".jpg");

    dispatch(
      setSignIn({
        email: user.email,
        isLoggedIn: true,
        userName: user.name,
      })
    );
  }

  return (
    <View style={styles.faceRecognitionView}>
      <ImageBackground
        style={[styles.faceIcon, styles.ml52]}
        resizeMode="cover"
        source={{ uri: image && image }}
      />
      <View style={[styles.subtraction1View, styles.mt_832]}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
      </View>
      {image ? (
        <Image />
      ) : (
        <Image
          style={[styles.rectangleIcon, styles.mt_812]}
          resizeMode="cover"
          source={require("../assets/rectangle-574@3x.png")}
        />
      )}

      <View style={[styles.rectangleView2, styles.mt_698, styles.mr2]} />
      <Text style={[styles.faceScanText, styles.mt143, styles.ml1]}>
        Upload picture
      </Text>

      {image ? (
        <Pressable
          style={[styles.continuePressable, styles.mt55, styles.ml1]}
          onPress={() => uploadImageAsync(Image)}
        >
          <View style={styles.rectangleView3} />
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>
      ) : (
        <Pressable
          style={[styles.continuePressable, styles.mt55, styles.ml1]}
          onPress={pickImage}
        >
          <View style={styles.rectangleView3} />
          <Text style={styles.continueText}>Upload</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ml52: {
    marginLeft: 52,
  },
  mt_832: {
    marginTop: -832,
  },
  mt_812: {
    marginTop: -812,
  },
  mt_698: {
    marginTop: -698,
  },
  mr2: {
    marginRight: 2,
  },
  mt143: {
    marginTop: 143,
  },
  ml1: {
    marginLeft: 1,
  },
  mt55: {
    marginTop: 55,
  },
  faceIcon: {
    position: "relative",
    width: 607.37,
    height: 851.9,
    transform: [
      {
        rotate: "355deg",
      },
    ],
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(249, 172, 25, 0.02)",
  },
  rectangleView1: {
    position: "absolute",
    top: 116,
    right: 35,
    left: 35,
    backgroundColor: "rgba(249, 172, 25, 0.02)",
    height: 385,
  },
  subtraction1View: {
    position: "relative",
    backgroundColor: "rgba(249, 172, 25, 0.02)",
    width: 375,
    height: 812,
  },
  rectangleIcon: {
    position: "relative",
    width: 375,
    height: 812,
  },
  rectangleView2: {
    position: "relative",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 307,
    height: 387,
  },
  faceScanText: {
    position: "relative",
    fontSize: 20,
    letterSpacing: -0.32,
    lineHeight: 18,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
    width: 97,
  },
  rectangleView3: {
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
  },
  faceRecognitionView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default FaceRecognition;
