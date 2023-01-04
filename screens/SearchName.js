import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firestore, storage } from "../firebase";
import { TextInput as RNPTextInput } from "react-native-paper";
import {
  selectIsLoggedIn,
  selectUser,
  selectUserName,
} from "../redux/slices/authSlice";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";

const SearchName = () => {
  const Username = useSelector(selectUser);
  const email = useSelector(selectUserName);

  const navigation = useNavigation();
  const [users, setUsers] = React.useState(null);
  const [name, setname] = React.useState(Username);

  const getUsers = async () => {
    try {
      const q = query(
        collection(firestore, "users"),
        where("name", "in", [name]),
        where("email", "!=", email)
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
  }, [name]);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Pressable
        style={styles.searchNamePressable}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <View style={[styles.navigationBarView, styles.ml80]}>
          <Text style={styles.searchName}>Search - Name</Text>
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
        </View>
        <RNPTextInput
          style={[styles.inputRNPTextInput, styles.mt12, styles.mr1]}
          placeholder="Search"
          label="Search"
          mode="outlined"
          onChangeText={(text) => {
            setname(text);
          }}
          placeholderTextColor="#000"
          theme={{ colors: { text: "#000", background: "#fff" } }}
        />

        {users ? (
          users.map((u) => (
            <View style={[styles.nameView, styles.mt35, styles.mr1]}>
              <Text style={styles.neliaCardosoText}>{u.name}</Text>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={u.avatar ? u.avatar : u.firstpic}
              />
              <Text style={styles.loremIpsumDolorSitAmetCo}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </Text>
            </View>
          ))
        ) : (
          <Text>No Name similar to yours found!</Text>
        )}
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ml80: {
    marginLeft: 80,
  },
  mt12: {
    marginTop: 12,
  },
  mr1: {
    marginRight: 1,
  },
  mt35: {
    marginTop: 35,
  },
  ml1: {
    marginLeft: 1,
  },
  mt1: {
    marginTop: 1,
  },
  searchName: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -110.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  iconMaterialNotificationsAcPressable: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 20,
    height: 19.56,
  },
  navigationBarView: {
    position: "relative",
    width: 221,
    height: 25,
  },
  inputRNPTextInput: {
    position: "relative",
    borderRadius: 10,
    borderStyle: "solid",
    width: 302,
    height: 48,
  },
  neliaCardosoText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
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
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 59,
  },
  nameView: {
    position: "relative",
    width: 302,
    height: 88,
  },
  neliaCamposText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
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
  loremIpsumDolorSitAmetCo1: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 59,
  },
  nameView1: {
    position: "relative",
    width: 302,
    height: 88,
  },
  neliaFerreiraText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
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
  loremIpsumDolorSitAmetCo2: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 59,
  },
  nameView2: {
    position: "relative",
    width: 302,
    height: 88,
  },
  neliaMendesText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
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
  loremIpsumDolorSitAmetCo3: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 59,
  },
  nameView3: {
    position: "relative",
    width: 302,
    height: 88,
  },
  neliaSilvaText: {
    position: "absolute",
    marginLeft: -34,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
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
  loremIpsumDolorSitAmetCo4: {
    position: "absolute",
    top: 29,
    right: -1,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 186,
    height: 59,
  },
  nameView4: {
    position: "relative",
    width: 302,
    height: 88,
  },
  rectangleView: {
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
  profileIcon: {
    position: "absolute",
    marginTop: -19,
    marginLeft: -8.5,
    top: "50%",
    left: "50%",
    width: 17,
    height: 17,
  },
  profilePressable: {
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
    marginTop: 13.75,
    top: "50%",
    left: 4.5,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  rectangleView1: {
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
  searchView: {
    position: "absolute",
    marginLeft: -8.5,
    top: 19.5,
    left: "50%",
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
  searchPressable: {
    position: "absolute",
    marginLeft: 49,
    top: 0.5,
    left: "50%",
    width: 50,
    height: 57.5,
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
  searchNamePressable: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "center",
  },
});

export default SearchName;
