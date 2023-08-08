import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Alert,
  Pressable,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { useDispatch } from "react-redux";
import { setSignIn } from "../redux/slices/authSlice";
import DatePicker from "react-native-modern-datepicker";

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
  const [email, setemail] = React.useState("");
  const [name, setname] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordConfirm, setpasswordConfirm] = React.useState("");
  const [profession, setprofession] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [city, setcity] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [birthdate, setbirthdate] = React.useState("");
  const [open, setOpen] = React.useState(false);

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
    try {
      const data = {
        email: email,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        phone: phone,
        city: city,
        password: password,
        birthdate: birthdate,
        profession: profession,
        country: country,
        createdAt: formatDate(new Date()),
      };

      const res = await fetch(
        "https://iddias-api-sehk.vercel.app/api/iddias/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const response = await res.json();

      if (!response) {
        Alert.alert(
          "User Exits",
          "email already exists, try again.",
          [
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            },
          ],
          { cancelable: false }
        );
        return false;
      }

      navigation.navigate("Interests", data);
    } catch (err) {
      console.log(err);
    }
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
      name: name.charAt(0).toUpperCase() + name.slice(1),
      phone: phone,
      city: city,
      birthdate: birthdate,
      profession: profession,
      country: country,
      createdAt: formatDate(new Date()),
    };
    setDoc(docRef, data)
      .then(() => {
        navigation.navigate("Interests", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    if (birthdate) {
      console.log(birthdate);
      setOpen(false);
    }
  }, [birthdate]);

  return (
    <View style={styles.signUpView}>
      <Image
        style={styles.heroIcon}
        resizeMode="cover"
        source={require("../assets/hero.png")}
      />
      <Text style={[styles.createAnAccount, styles.mt42, styles.ml1]}>
        Create an Account
      </Text>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
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
              <Text style={styles.privacyPolicy}>
                Privacy Policy & Terms of Service
              </Text>
            </Text>
            <RNPTextInput
              mode="outlined"
              style={[styles.email, styles.mt42]}
              label="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => setemail(text)}
            />
            <RNPTextInput
              mode="outlined"
              style={[styles.password, styles.mt22]}
              label="Password"
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setpassword(text)}
            />
            <Pressable
              style={[styles.dateOfBirth, styles.mt22]}
              onPress={() => setOpen(true)}
            >
              <RNPTextInput
                mode="outlined"
                style={[styles.name, styles.mt42, { marginTop: -1 }]}
                label="Date of Birth"
                keyboardType={birthdate || ""}
                autoCapitalize="none"
                value={birthdate || ""}
                disabled={true}
              />
            </Pressable>
            {open && (
              <DatePicker
                mode="datetime"
                onTimeChange={(time) => console.log(time)}
                onDateChange={(date) => setbirthdate(date)}
                maxDate={new Date()}
              />
            )}
            <RNPTextInput
              mode="outlined"
              style={[styles.name, styles.mt22]}
              label="Name"
              value={name}
              onChangeText={(text) => setname(text)}
            />
            <RNPTextInput
              mode="outlined"
              style={[styles.profession, styles.mt22]}
              label="Profession"
              value={profession}
              onChangeText={(text) => setprofession(text)}
            />
            <RNPTextInput
              mode="outlined"
              style={[styles.country, styles.mt22]}
              label="Country"
              value={country}
              onChangeText={(text) => setcountry(text)}
            />
            <RNPTextInput
              mode="outlined"
              style={[styles.city, styles.mt22]}
              label="City"
              value={city}
              onChangeText={(text) => setcity(text)}
            />
            <RNPTextInput
              mode="outlined"
              style={[styles.phone, styles.mt22]}
              label="Phone"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(text) => setphone(text)}
            />

            <Pressable
              style={[styles.signUpButton, styles.mt42]}
              onPress={Register}
            >
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </Pressable>

            <Pressable
              style={[styles.backPressable, styles.mt25, styles.ml19]}
              onPress={() => navigation.navigate("SignIn")}
            >
              <View style={styles.rectangleView2} />
              <Text style={styles.backText}>Back</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt35: {
    marginTop: 35,
  },

  signUpButton: {
    height: 50,
    borderRadius: 10,
    marginBottom: 80,
    backgroundColor: "#21ae9c",
    fontSize: 18,
    lineHeight: 18,
    fontWeight: "700",
    // fontFamily: "Quicksand",
  },
  signUpButtonText: {
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
  ml19: {
    marginLeft: 19,
  },
  mt25: {
    paddingTop: 15,
    marginTop: -25,
    paddingBottom: 5,
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
    // fontFamily: "Quicksand",
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
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
    width: 275,
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
    paddingBottom: 20,
    marginBottom: 60,
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
    // fontFamily: "Quicksand",
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
    backgroundColor: "#000000",
    marginTop: -50,
    marginBottom: 60,
    height: 42,
    fontSize: 18,
    lineHeight: 18,
    fontWeight: "700",
  },
  backText: {
    position: "absolute",
    marginTop: -60,
    marginLeft: -19.94,
    top: "50%",
    left: "50%",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
    width: 39,
  },
  backPressable: {
    width: "89.09%",
    position: "relative",
    height: 68,
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
