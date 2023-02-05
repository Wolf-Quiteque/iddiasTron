import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUserName,
  selectUserDetails,
} from "../redux/slices/authSlice";
import { firestore, storage } from "../firebase";

import { collection, query, where, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { async } from "@firebase/util";

const Chat = ({ navigation, user }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const username = useSelector(selectUserName);

  const [users, setUsers] = React.useState(null);
  const [User, setUser] = React.useState(useSelector(selectUserDetails));

  function GetUsersAvatar(props) {
    getDownloadURL(ref(storage, props.avatar))
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();

        return url;
      })
      .catch((error) => {
        return "nopic";
      });
  }

  const getUsers = async () => {
    try {
      const q = query(
        collection(firestore, "users"),
        where("email", "!=", username)
      );

      const querySnapshot = await getDocs(q);
      chartData = querySnapshot.docs.map((doc) => doc.data());
      setUsers(chartData);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUsers();
    getUsersChat();
  }, []);

  return (
    <View style={styles.chatView1}>
      <View style={[styles.navigationBarView, styles.mr165]}>
        <Text style={styles.chatText}>Chat</Text>
      </View>
      <Pressable
        style={[styles.pressable, styles.mt10, styles.mr39]}
        onPress={() => navigation.navigate("ChatNewChat")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/1@3x.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.editPressable, styles.mt_23, styles.mr306]}
        onPress={() => navigation.navigate("ChatEdit")}
      >
        <Text style={styles.editText}>Edit</Text>
      </Pressable>
      <Pressable
        style={[
          styles.iconMaterialNotificationsAcPressable,
          styles.mt_23,
          styles.mr86,
        ]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon-materialnotificationsactive13@3x.png")}
        />
      </Pressable>
      <View style={[styles.inputView, styles.mt23, styles.mr37]}>
        <View style={styles.component1View}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.path99Icon}
            resizeMode="cover"
            source={require("../assets/path-99@3x.png")}
          />
        </View>
      </View>
      <ScrollView>
        <View style={[styles.personsPressable, styles.mt25, styles.mr86]}>
          {users &&
            users.map((u) => (
              <Pressable
                style={{ marginTop: 10 }}
                onPress={() => navigation.navigate("Chat1", u)}
              >
                {" "}
                <View style={styles.nameView}>
                  <View>
                    <Image
                      style={styles.profileIcon}
                      resizeMode="cover"
                      source={u.avatar ? u.avatar : u.firstpic}
                    />

                    <Text style={styles.mikeFullerText}>{u.name}</Text>
                    <Text style={styles.loremIpsumDolorSitAme}>
                      Lorem ipsum dolor sit ame{" "}
                    </Text>
                  </View>
                </View>
              </Pressable>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mr165: {
    marginRight: 165,
  },
  mt10: {
    marginTop: 10,
  },
  mr39: {
    marginRight: 39,
  },
  mt_23: {
    marginTop: -23,
  },
  mr306: {
    marginRight: 306,
  },
  mr86: {
    marginRight: 86,
  },
  mt23: {
    marginTop: 23,
  },
  mr37: {
    marginRight: 37,
  },
  mt25: {
    marginTop: 25,
  },
  mt33: {
    marginTop: 33,
  },
  chatText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -22,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  navigationBarView: {
    position: "relative",
    width: 44,
    height: 25,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  pressable: {
    position: "relative",
    width: 24,
    height: 24,
  },
  editText: {
    fontSize: 18,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  editPressable: {
    position: "relative",
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  iconMaterialNotificationsAcPressable: {
    position: "relative",
    width: 20,
    height: 19.56,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path99Icon: {
    position: "absolute",
    top: 0,
    right: 0.1,
    bottom: 0.1,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  component1View: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 16,
    width: 16,
    height: 16,
  },
  inputView: {
    position: "relative",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 302,
    height: 48,
  },
  mikeFullerText: {
    marginLeft: 50,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme: {
    marginLeft: 50,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component5Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView: {
    marginLeft: 10,
    height: 47,
  },
  johnDoeText: {
    position: "absolute",
    marginLeft: -58.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme1: {
    position: "absolute",
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component6Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView1: {
    position: "absolute",
    top: 67,
    right: 0,
    left: 0,
    height: 47,
  },
  jasonCalebText: {
    position: "absolute",
    marginLeft: -58.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme2: {
    position: "absolute",
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component7Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView2: {
    position: "absolute",
    marginTop: -124,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  profileIcon: {
    position: "absolute",
    top: 0,
    marginLeft: -14,
    marginTop: -7,
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  familyGroupText: {
    position: "absolute",
    marginLeft: -58.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme3: {
    position: "absolute",
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component8Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView3: {
    position: "absolute",
    marginTop: -57,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  neliaCamposText: {
    position: "absolute",
    marginLeft: -58.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme4: {
    position: "absolute",
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component9Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView4: {
    position: "absolute",
    marginTop: 10,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  juliaMendesText: {
    position: "absolute",
    marginLeft: -58.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme5: {
    position: "absolute",
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component10Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView5: {
    position: "absolute",
    marginTop: 77,
    top: "50%",
    right: 0,
    left: 0,
    height: 47,
  },
  ruiPatalimText: {
    position: "absolute",
    marginLeft: -58.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme6: {
    position: "absolute",
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component11Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView6: {
    position: "absolute",
    right: 0,
    bottom: 67,
    left: 0,
    height: 47,
  },
  soniaFerreiraText: {
    position: "absolute",
    marginLeft: -58.5,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  loremIpsumDolorSitAme7: {
    position: "absolute",
    bottom: 0,
    left: 68,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 22,
  },
  component12Icon: {
    position: "absolute",
    top: 2,
    bottom: 5,
    left: 0,
    maxHeight: "100%",
    width: 40,
  },
  nameView7: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: 47,
  },
  personsPressable: {
    position: "relative",
    width: 253,
    height: 516,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#15abb5",
  },
  profileText: {
    position: "absolute",
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  icon2: {
    marginTop: -19,
    marginLeft: -8.5,
    width: "100%",
    height: "100%",
  },
  profilePressable: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: 17,
    height: 17,
  },
  profilePressable1: {
    position: "absolute",
    marginTop: -15.5,
    top: "50%",
    right: 26,
    width: 37,
    height: 38,
  },
  feedText: {
    position: "absolute",
    marginTop: 4.5,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
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
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  path99Icon1: {
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
  chatText1: {
    position: "absolute",
    marginTop: 13.75,
    top: "50%",
    left: 11.5,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  iconMaterialChatBubble: {
    position: "absolute",
    top: 19.5,
    left: 16.5,
    width: 16,
    height: 16,
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
  chatView: {
    position: "absolute",
    marginTop: -35,
    marginLeft: -99,
    top: "50%",
    left: "50%",
    width: 50,
    height: 57.5,
  },
  groupText: {
    position: "absolute",
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
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
  chatView1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "flex-end",
  },
});

export default Chat;
