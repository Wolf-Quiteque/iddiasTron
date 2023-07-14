import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
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
  var members = [];

  const navigation = useNavigation();

  const [users, setUsers] = React.useState(null);
  const [user, setuser] = React.useState(useSelector(selectUserDetails));
  const [member, setmember] = React.useState([]);

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

  const select = async (i) => {
    members = member;
    members.push(users[i].email);
    const m = members;
    setmember(m);
  };

  const deselect = async (i) => {
    members.splice(i, 1);
    setmember(members);
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.groupCreationMembersView}>
      <View style={[styles.navigationBarView, styles.mr1]}>
        <Text style={styles.addMembersText}>Connections</Text>
      </View>
      <View style={[styles.inputView, styles.mt29]}>
        <View style={styles.component1View}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.path99Icon}
            resizeMode="cover"
            source={"../assets/path-99@3x.png"}
          />
        </View>
      </View>

      {users &&
        users.map((u, index) => (
          <Pressable onPress={() => navigation.navigate("SearchResults1", u)}>
            <View
              style={[styles.memberView, styles.mt21, styles.mr1]}
              key={index}
            >
              <Image
                style={styles.ellipseIcon}
                resizeMode="cover"
                source={u.avatar ? u.avatar : u.firstpic}
              />
              <Text style={styles.nliaMatosText}>{u.name}</Text>
            </View>
          </Pressable>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mr1: {
    marginRight: 1,
  },
  mt29: {
    marginTop: 29,
  },
  mt21: {
    marginTop: 21,
  },
  mt11: {
    marginTop: 11,
  },
  mt12: {
    marginTop: 12,
  },
  addMembersText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -64,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  nextText: {
    marginTop: -9.5,
    marginLeft: 115,
    fontSize: 16,
    fontFamily: "Quicksand",
    color: "#15abb5",
    textAlign: "left",
  },
  nextPressable: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  icon: {
    marginTop: -7.5,
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
    height: 34,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaMatosText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.74,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  iconAwesomeCheckCircle: {
    position: "absolute",
    marginTop: -10.44,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView: {
    position: "relative",
    width: 297.49,
    height: 60,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaBarrosoText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.74,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  iconAwesomeCheckCircle1: {
    position: "absolute",
    marginTop: -10.44,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView1: {
    position: "relative",
    width: 297.49,
    height: 60,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaCarneiroText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  ellipseIcon3: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView2: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaCardosoText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon5: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView3: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon6: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaPereiraText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon7: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView4: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon8: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaOliveiraText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon9: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView5: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon10: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaSilvaText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon11: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView6: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon12: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaVieiraText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon13: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView7: {
    position: "relative",
    width: 297,
    height: 60,
  },
  ellipseIcon14: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    maxHeight: "100%",
    width: 60,
  },
  nliaCerqueiraText: {
    position: "absolute",
    marginTop: -9,
    marginLeft: -74.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  ellipseIcon15: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  memberView8: {
    position: "relative",
    width: 297,
    height: 60,
  },
  groupCreationMembersView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingLeft: 35,
    paddingTop: 40,
    paddingRight: 37,
    alignItems: "flex-end",
  },
});

export default ProfileConnections;
