import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
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
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore, storage } from "../firebase";

const ProfileConnections = () => {
  const navigation = useNavigation();

  const [users, setUsers] = React.useState(null);
  const [user, setuser] = React.useState(useSelector(selectUserDetails));

  const getUsers = async () => {
    try {
      const q = query(
        collection(firestore, "users"),
        where("email", "in", user.friends)
      );

      const querySnapshot = await getDocs(q);
      const chartData = querySnapshot.docs.map((doc) => doc.data());

      setUsers(chartData);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.profileConnectionsView}>
      <View style={[styles.navigationBarView, styles.mr1]}>
        <Text style={styles.profileText}>Profile</Text>
        <Pressable
          style={styles.component1Pressable}
          onPress={() => navigation.navigate("UserProfile")}
        >
          <View style={styles.rectangleView} />
          <Image
            style={styles.path104Icon}
            resizeMode="cover"
            source={require("../assets/path-104@3x.png")}
          />
        </Pressable>
        <Pressable
          style={styles.iconMaterialNotificationsAcPressable}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon-materialnotificationsactive@3x.png")}
          />
        </Pressable>
        <Pressable
          style={styles.backwardArrowPressable}
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/backward-arrow@3x.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.connectionsText, styles.mt40, styles.ml1]}>
        Connections
      </Text>
      <View style={[styles.lineView, styles.mr2]} />
      <ScrollView
        style={[styles.scrollGroup6, styles.mt16, styles.ml12]}
        contentContainerStyle={styles.scrollGroup6Content}
      >
        <View style={styles.personsView2}>
          <View style={styles.personsView}>
            {users &&
              users.map((u) => (
                <Pressable
                  style={styles.namePressable}
                  onPress={() => navigation.navigate("ProfileConnected1")}
                >
                  <View style={styles.nameView}>
                    <Text style={styles.beatrizSilvaText}>{u.name}</Text>
                    <Image
                      style={styles.rectangleIcon}
                      resizeMode="cover"
                      source={u.avatar ? u.avatar : u.firstpic}
                    />
                  </View>{" "}
                </Pressable>
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollGroup6Content: {
    alignItems: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 15,
  },
  mr1: {
    marginRight: 1,
  },
  mt40: {
    marginTop: 40,
  },
  ml1: {
    marginLeft: 1,
  },
  mr2: {
    marginRight: 2,
  },
  mt16: {
    marginTop: 16,
  },
  ml12: {
    marginLeft: 12,
  },
  mt12: {
    marginTop: 12,
  },
  profileText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -30,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
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
    left: 286,
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
  icon1: {
    marginTop: -5.5,
    width: "100%",
    height: "100%",
  },
  backwardArrowPressable: {
    position: "absolute",
    left: 0,
    top: "50%",
    width: 16,
    height: 16,
  },
  navigationBarView: {
    position: "relative",
    width: 302,
    height: 25,
  },
  connectionsText: {
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#15abb5",
    textAlign: "left",
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#15abb5",
    borderTopWidth: 2,
    width: 122,
    height: 4,
  },
  beatrizSilvaText: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  nameView: {
    position: "absolute",
    top: 0,
    right: 36,
    left: 0,
    height: 88,
  },
  neliaCamposText: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  namePressable: {
    position: "absolute",
    marginTop: -160,
    top: "50%",
    right: 24,
    left: 1,
    height: 88,
  },
  luziaBeltrandText: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  nameView1: {
    position: "absolute",
    marginTop: -44,
    top: "50%",
    right: 19,
    left: 1,
    height: 88,
  },
  sofiaNabaisText: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  nameView2: {
    position: "absolute",
    marginTop: 73,
    top: "50%",
    right: 33,
    left: 1,
    height: 88,
  },
  conceioSousaText: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  rectangleIcon4: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  nameView3: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 1,
    height: 88,
  },
  personsView: {
    position: "absolute",
    top: 0,
    right: 11,
    left: 0,
    height: 554,
  },
  beatrizSilvaText1: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon5: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  nameView4: {
    position: "absolute",
    top: 0,
    right: 36,
    left: 0,
    height: 88,
  },
  neliaCamposText1: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon6: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  nameView5: {
    position: "absolute",
    marginTop: -160,
    top: "50%",
    right: 24,
    left: 1,
    height: 88,
  },
  luziaBeltrandText1: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon7: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  nameView6: {
    position: "absolute",
    marginTop: -44,
    top: "50%",
    right: 19,
    left: 1,
    height: 88,
  },
  sofiaNabaisText1: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleIcon8: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  nameView7: {
    position: "absolute",
    marginTop: 73,
    top: "50%",
    right: 33,
    left: 1,
    height: 88,
  },
  conceioSousaText1: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: -1,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  rectangleIcon9: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 88,
  },
  nameView8: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 1,
    height: 88,
  },
  personsView1: {
    position: "absolute",
    right: 11,
    bottom: 5,
    left: 0,
    height: 554,
  },
  personsView2: {
    alignSelf: "stretch",
    position: "relative",
    height: 1133,
  },
  scrollGroup6: {
    width: 259,
    height: 585,
    boxSizing: "border-box",
    maxWidth: 259,
  },
  rectangleView1: {
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
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  lineView1: {
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
  profilePressable: {
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
    fontFamily: "Quicksand",
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
  profileConnectionsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 36,
    alignItems: "center",
  },
});

export default ProfileConnections;
