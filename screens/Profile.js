import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUser,
  selectUserName,
  selectUserDetails,
} from "../redux/slices/authSlice";
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
import * as ImagePicker from "expo-image-picker";

const Profile = ({ route }) => {
  const user = route.params;

  const navigation = useNavigation();

  const [User, setuser] = React.useState(
    user ? user : useSelector(selectUserDetails)
  );
  // const [User, setuser] = React.useState(false);

  const [image, setImage] = React.useState(null);
  const [image2, setImage2] = React.useState(null);
  const [image3, setImage3] = React.useState(null);

  const pickNewImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImage(result.assets[0].uri);
    let file = result.assets[0].uri;

    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("file", file);
    data.append("name", fileName);
    data.append("upload_preset", "ipo-uploads");

    const resultPic = await fetch(
      "https://api.cloudinary.com/v1_1/quitopia/image/upload",
      {
        method: "Post",
        body: data,
      }
    ).then((r) => r.json());

    const docRef = doc(firestore, "users", User.email);
    const dataPic = {
      gallary: resultPic.secure_url,
    };
    setDoc(docRef, dataPic, { merge: true })
      .then(() => {
        console.log("Document has been added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pickNewImage2 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImage2(result.assets[0].uri);
    let file = result.assets[0].uri;

    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("file", file);
    data.append("name", fileName);
    data.append("upload_preset", "ipo-uploads");

    const resultPic = await fetch(
      "https://api.cloudinary.com/v1_1/quitopia/image/upload",
      {
        method: "Post",
        body: data,
      }
    ).then((r) => r.json());

    const docRef = doc(firestore, "users", User.email);
    const dataPic = {
      gallary2: resultPic.secure_url,
    };
    setDoc(docRef, dataPic, { merge: true })
      .then(() => {
        console.log("Document has been added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pickNewImage3 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImage3(result.assets[0].uri);
    let file = result.assets[0].uri;

    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("file", file);
    data.append("name", fileName);
    data.append("upload_preset", "ipo-uploads");

    const resultPic = await fetch(
      "https://api.cloudinary.com/v1_1/quitopia/image/upload",
      {
        method: "Post",
        body: data,
      }
    ).then((r) => r.json());

    const docRef = doc(firestore, "users", User.email);
    const dataPic = {
      gallary3: resultPic.secure_url,
    };
    setDoc(docRef, dataPic, { merge: true })
      .then(() => {
        console.log("Document has been added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.profileView1}>
        <View style={[styles.navigationBarView, styles.ml120]}>
          <Text style={styles.profileText}>Profile</Text>
          <Pressable
            style={styles.component1Pressable}
            onPress={() => navigation.navigate("Settings")}
          >
            <View style={styles.rectangleView} />
            <Image
              style={styles.path104Icon}
              resizeMode="cover"
              source={"../assets/path-104@3x.png"}
            />
          </Pressable>
          <Pressable
            style={styles.iconMaterialNotificationsAcPressable}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={"../assets/icon-materialnotificationsactive13@3x.png"}
            />
          </Pressable>
        </View>
        <View style={[styles.heroView, styles.mt39, styles.mr1]}>
          <Image
            style={styles.profileIcon}
            resizeMode="cover"
            source={User.firstpic && User.avatar ? User.avatar : User.firstpic}
          />
          <View style={styles.nameView}>
            <Text style={styles.johnDoeText}>{User.firstpic && User.name}</Text>
          </View>
          <Text style={styles.sanFranciscoCA}>
            {User.firstpic && User.city}
          </Text>
          <Text style={styles.hiMyNameIsJohnImACre}>
            {User.biography ? User.biography : "welcome to my profile"}
          </Text>
          <Pressable
            style={styles.editPressable}
            onPress={() => navigation.navigate("ProfileEdit")}
          >
            <View style={styles.component1View}>
              <View style={styles.rectangleView1} />
              <Image
                style={styles.path110Icon}
                resizeMode="cover"
                source={"../assets/path-110@3x.png"}
              />
            </View>
          </Pressable>
          <Pressable
            style={styles.connectionsPressable}
            onPress={() => navigation.navigate("ProfileConnections")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={"../assets/connections@3x.png"}
            />
          </Pressable>
        </View>
        <View style={[styles.galleryView, styles.mt27, styles.mr1]}>
          <Text style={styles.galleryText}>Gallery</Text>
          <Pressable onPress={pickNewImage}>
            <Image
              style={[styles.rectangleIcon3, styles.adjusts]}
              resizeMode="cover"
              source={
                image
                  ? { uri: image }
                  : User.gallary
                  ? User.gallary
                  : "../assets/rectangle-26135@3x.png"
              }
            />
          </Pressable>
          <Pressable onPress={pickNewImage2}>
            <Image
              style={[styles.rectangleIcon1, styles.adjustsImage2]}
              resizeMode="cover"
              source={
                image2
                  ? { uri: image2 }
                  : User.gallary2
                  ? User.gallary2
                  : "../assets/rectangle-2625@3x.png"
              }
            />
          </Pressable>
          <Pressable onPress={pickNewImage3}>
            <Image
              style={[styles.rectangleIcon2, styles.adjustsImage3]}
              resizeMode="cover"
              source={
                image3
                  ? { uri: image3 }
                  : User.gallary3
                  ? User.gallary3
                  : "../assets/rectangle-9205@3x.png"
              }
            />
          </Pressable>
          <Pressable
            style={styles.pressable}
            onPress={() => navigation.navigate("ProfileEditGallery")}
          >
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={"../assets/@3x.png"}
            />
          </Pressable>
        </View>
        <View style={[styles.interestsView, styles.mt30, styles.mr1]}>
          <Text style={styles.interestsText}>Interests</Text>
          <Pressable>
            <Image
              style={[styles.rectangleIcon3, styles.adjusts]}
              resizeMode="cover"
              source={User && "../assets/" + User.interests[0] + ".png"}
            />
          </Pressable>
          <Image
            style={[styles.rectangleIcon4, styles.adjusts2]}
            resizeMode="cover"
            source={User && "../assets/" + User.interests[1] + ".png"}
          />
          <Image
            style={[styles.rectangleIcon5, styles.adjusts3]}
            resizeMode="cover"
            source={User && "../assets/" + User.interests[2] + ".png"}
          />
          <Text style={styles.loremIpsumDolorSitAmetCo}>
            {User.interests[0]}
          </Text>
          <Text style={styles.loremIpsumDolorSitAmetCo1}>
            {User.interests[1]}
          </Text>
          <Text style={styles.loremIpsumDolorSitAmetCo2}>
            {User.interests[2]}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml120: {
    marginLeft: 120,
  },
  mt39: {
    marginTop: 39,
  },
  adjusts: {
    marginTop: 43,
  },
  adjusts2: {
    marginBottom: -43,
  },
  adjustsImage2: {
    marginBottom: -130,
  },
  adjusts3: {
    marginBottom: -43,
  },
  adjustsImage3: {
    marginBottom: -130,
  },
  mr1: {
    marginRight: 1,
  },
  mt27: {
    marginTop: 27,
  },
  mt30: {
    marginTop: 30,
  },
  profileText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -90.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path104Icon: {
    position: "absolute",
    top: 0,
    right: 0.8,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  component1Pressable: {
    position: "absolute",
    bottom: 4,
    left: 165,
    width: 16,
    height: 16,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  iconMaterialNotificationsAcPressable: {
    position: "absolute",
    right: 34,
    bottom: 0,
    width: 20,
    height: 19.56,
  },
  navigationBarView: {
    position: "relative",
    width: 181,
    height: 25,
  },
  profileIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 56,
    height: 56,
    borderRadius: "50%",
  },
  johnDoeText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    marginBottom: 15,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  sanFranciscoCA: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 12,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  nameView: {
    position: "absolute",
    marginLeft: -82,
    top: 8,
    left: "50%",
    width: 102,
    height: 37,
  },
  hiMyNameIsJohnImACre: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 24,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 303,
    height: 98,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path110Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  component1View: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  editPressable: {
    position: "absolute",
    marginLeft: 4,
    top: 8,
    left: "50%",
    width: 16,
    height: 16,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  connectionsPressable: {
    position: "absolute",
    top: 11,
    right: 1,
    width: 34,
    height: 34,
  },
  heroView: {
    position: "relative",
    width: 302,
    height: 184,
  },
  galleryText: {
    position: "absolute",
    marginLeft: -28,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "center",
  },
  rectangleIcon: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 88,
    height: 88,
  },
  rectangleIcon1: {
    position: "absolute",
    marginLeft: -44,
    bottom: 0,
    left: "50%",
    width: 88,
    height: 88,
  },
  rectangleIcon2: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 88,
    height: 88,
  },
  icon2: {
    marginTop: -65.5,
    marginLeft: 131,
    width: "100%",
    height: "100%",
  },
  pressable: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 20,
    height: 20,
  },
  galleryView: {
    position: "relative",
    width: 302,
    height: 131,
  },
  interestsText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "center",
  },
  rectangleIcon3: {
    position: "absolute",
    marginTop: -76.5,
    top: "50%",
    left: 0,
    width: 88,
    height: 88,
  },
  rectangleIcon4: {
    position: "absolute",
    marginTop: -76.5,
    marginLeft: -44,
    top: "50%",
    left: "50%",
    width: 88,
    height: 88,
  },
  rectangleIcon5: {
    position: "absolute",
    marginTop: -76.5,
    top: "50%",
    right: 0,
    width: 88,
    height: 88,
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 12,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 89,
    height: 88,
    fontWeight: 600,
  },
  loremIpsumDolorSitAmetCo1: {
    position: "absolute",
    marginLeft: -44,
    bottom: 0,
    left: "50%",
    fontSize: 12,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 89,
    height: 88,
    fontWeight: 600,
  },
  loremIpsumDolorSitAmetCo2: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 12,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 89,
    height: 88,
    fontWeight: 600,
  },
  interestsView: {
    position: "relative",
    width: 302,
    height: 239,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#15abb5",
  },
  profileText1: {
    position: "absolute",
    marginTop: 13.75,
    top: "50%",
    left: 6.5,
    fontSize: 12,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  lineView: {
    position: "absolute",
    marginLeft: -27,
    top: -2,
    left: "50%",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 2,
    width: 52,
    height: 4,
  },
  union46Icon: {
    position: "absolute",
    top: 17.5,
    right: 14.92,
    bottom: 21,
    left: 14.92,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  profileView: {
    position: "absolute",
    marginTop: -35,
    top: "50%",
    right: 19.5,
    width: 50,
    height: 57.5,
  },
  feedText: {
    position: "absolute",
    marginTop: 4.5,
    top: "50%",
    left: 0,
    fontSize: 12,
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  feedIcon: {
    position: "absolute",
    top: 0,
    right: 2,
    bottom: 20.22,
    left: 2,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  feedPressable: {
    position: "absolute",
    marginTop: -16.5,
    top: "50%",
    left: 30,
    width: 28,
    height: 39,
  },
  searchText: {
    position: "absolute",
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path99Icon: {
    position: "absolute",
    top: -0.5,
    right: -0.61,
    bottom: -0.61,
    left: -0.5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchView: {
    position: "absolute",
    marginLeft: -8,
    top: 0,
    left: "50%",
    width: 16,
    height: 16,
  },
  searchPressable: {
    position: "absolute",
    marginLeft: 53.5,
    top: 20,
    left: "50%",
    width: 40,
    height: 38,
  },
  chatText: {
    position: "absolute",
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  iconMaterialChatBubble: {
    position: "absolute",
    top: -0.5,
    left: 4.5,
    width: 17,
    height: 17.71,
  },
  chatPressable: {
    position: "absolute",
    marginTop: -15.5,
    marginLeft: -87.5,
    top: "50%",
    left: "50%",
    width: 27,
    height: 38,
  },
  groupText: {
    position: "absolute",
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  iconMaterialGroup: {
    position: "absolute",
    top: -0.5,
    left: 4.5,
    width: 26.14,
    height: 17,
  },
  groupPressable: {
    position: "absolute",
    marginTop: -15.5,
    marginLeft: -18.5,
    top: "50%",
    left: "50%",
    width: 35,
    height: 38,
  },
  toolbarView: {
    position: "relative",
    width: 375,
    height: 71,
  },
  profileView1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 36,
    alignItems: "center",
  },
});

export default Profile;
