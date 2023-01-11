import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import {
  doc,
  setDoc
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import * as React from "react";
import { useDispatch } from "react-redux";
import { setSignIn } from "../redux/slices/authSlice";
import { firestore, storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useNavigation } from "@react-navigation/native";
import { set } from "firebase/database";
import Spinner from 'react-native-loading-spinner-overlay';

export default function FaceRecognition({ route }) {
  const dispatch = useDispatch();
  const user = route.params;
  const navigation = useNavigation();

  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [pressed, setpressed] = useState(false);


  async function addAvatar(avatar) {
    const docRef = doc(firestore, "users", user.email);
    const data = {
      firstpic: avatar,
    };
    setDoc(docRef, data, { merge: true })
      .then(() => {
        dispatch(
          setSignIn({
            email: user.email,
            isLoggedIn: true,
            userName: user.name,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });

      
  }

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  //save image to db
  const saveImage = async (file) => {


    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("file", file);
    data.append("name", fileName);
    data.append("upload_preset", "ipo-uploads");
   

    const result = await fetch(
      "https://api.cloudinary.com/v1_1/quitopia/image/upload",
      {
        method: "Post",
        body: data,
      }
    ).then((r) => r.json());

    addAvatar(result.secure_url);

  };

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);

    saveImage(newPhoto.uri);
    setpressed(true)
  };


  return (
    <>
    {pressed ? <>
      <Spinner
          //visibility of Overlay Loading Spinner
          visible={true}
          //Text with the Spinner
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        /></> :  <Camera style={styles.container} ref={cameraRef}>
        <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
        </View>
      </Camera>} 
        </> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
