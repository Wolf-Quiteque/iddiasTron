import React, { useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSignIn } from "../redux/slices/authSlice";

function FaceRecognition({ route }) {
  const dispatch = useDispatch();
  const user = route.params;
  const navigation = useNavigation();

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  // Request camera permissions
  const getCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(status === "granted");
  };

  // Take a picture and save it to state
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ quality: 1 });
      setPhotoUri(photo.uri);
    }
  };

  const takeanother = async () => {
    setPhotoUri(null);
  };

  // Send image to Cloudinary
  const sendImageToCloudinary = async () => {
    try {
      const data = new FormData();
      const fileName = Date.now() + ".jpg";
      data.append("file", { uri: photoUri, name: fileName, type: "image/jpg" });
      data.append("upload_preset", "ipo-uploads");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/quitopia/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      addAvatar(result.secure_url);

      // Handle the result as needed (e.g., store the URL in the database)
      navigation.goBack(); // Go back to the previous screen after successful upload
    } catch (error) {
      console.error("Error sending image to Cloudinary:", error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  async function addAvatar(avatar) {
    const data = {
      firstpic: avatar,
      email: user.email,
    };
    var userdata = user;
    userdata.firstpic = data.firstpic;

    await fetch("https://iddias-api-sehk.vercel.app/api/iddias/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    try {
      dispatch(
        setSignIn({
          email: user.email,
          isLoggedIn: true,
          userName: user.name,
          userDetails: userdata,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  // Request camera permissions on component mount
  React.useEffect(() => {
    getCameraPermission();
  }, []);

  if (hasCameraPermission === null) {
    return <View />;
  } else if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!photoUri ? (
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.front}
          ref={cameraRef}
        />
      ) : (
        <Image source={{ uri: photoUri }} style={styles.preview} />
      )}

      {photoUri ? (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={sendImageToCloudinary}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takeanother}>
            <Text style={styles.button}>Take another </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={takeanother}>
            <Text style={styles.button}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.buttonText}>Take a Picture</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  preview: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    bottom: 60,
    backgroundColor: "#21ae9c",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FaceRecognition;
