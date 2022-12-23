import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { useDispatch } from "react-redux";
import { setSignIn } from "../redux/slices/authSlice";

import {
  collection,
  addDoc,
  orderBy,
  query,
  setDoc,
  onSnapshot,
  getDocs,
  where,
  doc,
} from "firebase/firestore";

const SignUp = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [email, setemail] = React.useState();
  const [name, setname] = React.useState();
  const [password, setpassword] = React.useState();
  const [passwordConfirm, setpasswordConfirm] = React.useState();
  const [profession, setprofession] = React.useState();
  const [country, setcountry] = React.useState();
  const [city, setcity] = React.useState();
  const [phone, setphone] = React.useState();
  const [birthdate, setbirthdate] = React.useState();

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join("-") +
      " " +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(":")
    );
  }

  const Register = async () => {
    var error = false;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        uploadData();
      })
      .catch((error) => {
        error = true;
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        alert("Usuario ja existe / Houve um erro");
      });
  };

  const uploadData = async () => {
    // const res = await setDoc(collection(firestore, "users", email), {
    //   email: email,
    //   name: name,
    //   phone: phone,
    //   city: city,
    //   profession: profession,
    //   country: country,
    //   createdAt: formatDate(new Date()),
    // }).then((dbRef) => {
    //   console.log(dbRef.id);
    // })

    const docRef = doc(firestore, "users", email);
    const data = {
      email: email,
      name: name,
      phone: phone,
      city: city,
      profession: profession,
      country: country,
      createdAt: formatDate(new Date()),
    };
    setDoc(docRef, data)
      .then(() => {
        navigation.navigate("FaceRecognition", { name: name, email: email });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.signUpView}>
      <Image
        style={styles.heroIcon}
        resizeMode="cover"
        source={require("../assets/hero@3x.png")}
      />
      <Text style={[styles.createAnAccount, styles.mt42, styles.ml1]}>
        Create an Account
      </Text>
      <ScrollView
        style={styles.scrollGroup5}
        contentContainerStyle={styles.scrollGroup5Content}
      >
        <View style={styles.accountSignupView}>
          <View style={styles.rectangleView} />
          <Text style={styles.byCreatingAnAccountYouAgr}>
            <Text style={styles.byCreatingAn}>
              By creating an account you agree to our
            </Text>
            <Text
              style={styles.privacyPolicy}
            >{`Privacy Policy & Terms of Service`}</Text>
          </Text>
          <RNPTextInput
            style={styles.rectangleRNPTextInput}
            placeholder="Full Name"
            label="Full Name"
            mode="outlined"
            onChangeText={(text) => {
              setname(text);
            }}
            theme={{ colors: { background: "#fff" } }}
          />
          {/* <RNPTextInput
            style={styles.rectangleRNPTextInput1}
            placeholder="Confirm Password"
            label="Confirm Password"
            mode="outlined"
            secureTextEntry="true"
            onChangeText={(text) => {
              setpasswordConfirm(text);
            }}
            theme={{ colors: { background: "#fff" } }}
          /> */}

          <RNPTextInput
            style={styles.rectangleRNPTextInput2}
            placeholder="Password"
            label="Password"
            mode="outlined"
            onChangeText={(text) => {
              setpassword(text);
            }}
            secureTextEntry="true"
            theme={{ colors: { background: "#fff" } }}
          />

          <RNPTextInput
            style={styles.rectangleRNPTextInput3}
            placeholder="E-mail"
            label="E-mail"
            mode="outlined"
            onChangeText={(text) => {
              setemail(text);
            }}
            theme={{ colors: { background: "#fff" } }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput4}
            placeholder="Enter your Profession"
            label="Enter your Profession"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            onChangeText={(text) => {
              setprofession(text);
            }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput5}
            placeholder="Country"
            label="Country"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            onChangeText={(text) => {
              setcountry(text);
            }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput6}
            placeholder="City"
            label="City"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            onChangeText={(text) => {
              setcity(text);
            }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput7}
            placeholder="Phone Number"
            label="Phone Number"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            onChangeText={(text) => {
              setphone(text);
            }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput8}
            placeholder="Date of Birth"
            label="Date of Birth"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            onChangeText={(text) => {
              setbirthdate(text);
            }}
          />
        </View>
        <Pressable
          style={[styles.continuePressable, styles.mt35, styles.ml19]}
          onPress={() => Register()}
        >
          <View style={styles.rectangleView1} />
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>
        <Pressable
          style={[styles.backPressable, styles.mt25, styles.ml19]}
          onPress={() => navigation.navigate("SighIn")}
        >
          <View style={styles.rectangleView2} />
          <Text style={styles.backText}>Back</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt35: {
    marginTop: 35,
  },
  ml19: {
    marginLeft: 19,
  },
  mt25: {
    marginTop: 25,
  },
  scrollGroup5Content: {
    alignItems: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 4,
  },
  mt42: {
    marginTop: 42,
  },
  ml1: {
    marginLeft: 1,
  },
  heroIcon: {
    position: "relative",
    width: 301,
    height: 71,
  },
  createAnAccount: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 179,
  },
  rectangleView: {
    position: "absolute",
    height: "88.49%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "11.51%",
    left: "0%",
    backgroundColor: "#fff",
  },
  byCreatingAn: {
    margin: 0,
  },
  privacyPolicy: {
    margin: 0,
  },
  byCreatingAnAccountYouAgr: {
    position: "absolute",
    bottom: 0,
    left: 33,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 275,
  },
  rectangleRNPTextInput: {
    position: "absolute",
    top: 9,
    right: 35,
    left: 25,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput1: {
    position: "absolute",
    right: 35,
    bottom: 64,
    left: 25,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput2: {
    position: "absolute",
    marginTop: 141,
    top: "50%",
    right: 35,
    left: 25,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput3: {
    position: "absolute",
    marginTop: 77,
    top: "50%",
    right: 35,
    left: 25,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput4: {
    position: "absolute",
    marginTop: 13,
    top: "50%",
    right: 35,
    left: 25,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput5: {
    position: "absolute",
    marginTop: -51,
    top: "50%",
    right: 35,
    left: 25,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput6: {
    position: "absolute",
    marginTop: -116,
    top: "50%",
    right: 35,
    left: 25,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput7: {
    position: "absolute",
    marginTop: -180,
    top: "50%",
    right: 35,
    left: 25,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput8: {
    position: "absolute",
    top: 73,
    right: 35,
    left: 25,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  accountSignupView: {
    alignSelf: "stretch",
    position: "relative",
    height: 634,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#21ae9c",
  },
  signUpText: {
    position: "absolute",
    marginTop: -11,
    marginLeft: -33,
    top: "50%",
    left: "50%",
    fontSize: 18,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
    width: 69,
  },
  continuePressable: {
    width: "89.09%",
    position: "relative",
    height: 48,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  backText: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -19.94,
    top: "50%",
    left: "50%",
    fontSize: 16,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
    width: 39,
  },
  backPressable: {
    width: "89.09%",
    position: "relative",
    height: 48,
  },
  scrollGroup5: {
    width: 339,
    height: 600,
    boxSizing: "border-box",
    maxWidth: 339,
  },
  signUpView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: 18,
    paddingTop: 55,
    paddingRight: 18,
    alignItems: "center",
  },
});

export default SignUp;
