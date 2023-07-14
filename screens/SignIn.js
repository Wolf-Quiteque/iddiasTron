import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { setSignIn } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

import { collection, query, where, getDocs } from "firebase/firestore";

import { auth, firestore } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

  const getUser = async () => {
    try {
      // const q = query(
      //   collection(firestore, "users"),
      //   where("email", "in", [email])
      // );

      // const querySnapshot = await getDocs(q);
      // chartData = querySnapshot.docs.map((doc) => doc.data());
      // console.log(chartData[0]);

      dispatch(
        setSignIn({
          email: "marcioqui@gmaril.co",
          isLoggedIn: true,
          userName: "Marcio Quiteque",
          userDetails: "some people think",
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const Login = async () => {
    getUser();
    return false;

    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          if (user) {
            getUser();
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } catch (err) {
      console.log(err);
      alert("Please try again");
    }
  };

  return (
    <View style={styles.signInView}>
      <Image
        style={styles.heroIcon}
        resizeMode="cover"
        source={require("../assets/hero.png")}
      />
      <View style={[styles.accountSignupView, styles.mt25]}>
        <View style={styles.rectangleView} />
        <Text style={styles.signInText}>Sign In</Text>
        <Text style={styles.byContinuingYouAgreeToAc}>
          <Text
            style={styles.byContinuingYou}
          >{`By continuing, you agree to accept our `}</Text>
          <Text
            style={styles.privacyPolicy}
          >{`Privacy Policy & Terms of Service.`}</Text>
        </Text>
        <RNPTextInput
          style={styles.rectangleRNPTextInput}
          placeholder="Password"
          label="Password"
          mode="outlined"
          onChangeText={(text) => {
            setpassword(text);
          }}
          theme={{ colors: { background: "#fff" } }}
        />
        <RNPTextInput
          style={styles.rectangleRNPTextInput1}
          placeholder="E-mail"
          label="E-mail"
          mode="outlined"
          theme={{ colors: { background: "#fff" } }}
          onChangeText={(text) => {
            setemail(text);
          }}
        />
      </View>
      <Pressable
        style={[styles.continuePressable, styles.mt57, styles.mr1]}
        onPress={() => {
          Login();
        }}
      >
        <View style={styles.rectangleView1} />
        <Text style={styles.continueText}>Continue</Text>
      </Pressable>
      <Text style={[styles.dontHaveAnAccount, styles.mt47, styles.ml1]}>
        Don't have an account?
      </Text>
      <Pressable
        style={[styles.signUpPressable, styles.mt5, styles.ml1]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
        <Text style={styles.text} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt25: {
    marginTop: 25,
  },
  mt57: {
    marginTop: 57,
  },
  mr1: {
    marginRight: 1,
  },
  mt47: {
    marginTop: 47,
  },
  ml1: {
    marginLeft: 1,
  },
  mt5: {
    marginTop: 5,
  },
  heroIcon: {
    position: "relative",
    width: 301,
    height: 71,
  },
  rectangleView: {
    position: "absolute",
    height: "93.46%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "6.54%",
    left: "0%",
    backgroundColor: "#fff",
  },
  signInText: {
    position: "absolute",
    marginLeft: -41.5,
    top: 39,
    left: "50%",
    fontSize: 26,
    lineHeight: 30,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    width: 85,
  },
  byContinuingYou: {
    margin: 0,
  },
  privacyPolicy: {
    margin: 0,
  },
  byContinuingYouAgreeToAc: {
    position: "absolute",
    bottom: 0,
    left: 36,
    fontSize: 14,
    lineHeight: 20,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 269,
  },
  rectangleRNPTextInput: {
    position: "absolute",
    marginTop: 18.5,
    top: "50%",
    right: 35,
    left: 25,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput1: {
    position: "absolute",
    marginTop: -45.5,
    top: "50%",
    right: 35,
    left: 25,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  accountSignupView: {
    position: "relative",
    width: 339,
    height: 321,
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
  continueText: {
    position: "absolute",
    marginTop: -8,
    marginLeft: -38,
    top: "50%",
    left: "50%",
    fontSize: 18,
    lineHeight: 18,
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
  },
  dontHaveAnAccount: {
    position: "relative",
    fontSize: 20,
    lineHeight: 20,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 235,
  },
  signUpText: {
    // fontFamily: "Quicksand",
    color: "#000",
  },
  text: {
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#21ae9c",
  },
  signUpPressable: {
    position: "relative",
    fontSize: 20,
    lineHeight: 20,
    textAlign: "center",
    width: 235,
  },
  signInView: {
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

export default SignIn;
