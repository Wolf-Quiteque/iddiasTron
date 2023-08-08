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
import { selectUserDetails } from "../redux/slices/authSlice";
import { useSelector } from "react-redux";
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
  updateDoc,
  FieldValue,
  setDoc,
} from "firebase/firestore";
import { firestore, storage } from "../firebase";
import { set } from "firebase/database";
import { setSignIn } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const SearchResults1 = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [friend, setfriend] = React.useState(false);
  const [request, setrequest] = React.useState(false);

  const [friends, setfriends] = React.useState(false);

  const [User, setUser] = React.useState(useSelector(selectUserDetails));
  const [user, setuser] = React.useState(route.params);

  const getUser = async () => {
    try {
      const res = await fetch(
        "https://iddias-api-sehk.vercel.app/api/iddias/finduser",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        }
      );
      const response = await res.json();

      setuser(response);
      verifyFriend();
    } catch (error) {
      console.log(error);
    }
  };

  const addFriend = async () => {
    try {
      const res = await fetch(
        "https://iddias-api-sehk.vercel.app/api/iddias/newfriendrequest",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({ id: user._id, email: User.email }),
        }
      );

      setrequest(true);

      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  function decline() {
    var list = user.friendrequest;
    list.forEach(myFunction);

    function myFunction(item, index) {
      if (item == User.email) {
        delete list[index];
      }
    }

    const docRef = doc(firestore, "users", user.email);
    if (!list[0]) {
      const dataPic = {
        friendrequest: 0,
      };
      setDoc(docRef, dataPic, { merge: true })
        .then(() => {
          console.log("Document has been added successfully");
          getUser();
        })
        .catch((error) => {
          console.log(error);
        });
      return false;
    }
    const dataPic = {
      friendrequest: list,
    };
    setDoc(docRef, dataPic, { merge: true })
      .then(() => {
        console.log("Document has been added successfully");
        getUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function accept() {
    try {
      const res = await fetch(
        "https://iddias-api-sehk.vercel.app/api/iddias/newfriend",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email, Useremail: User.email }),
        }
      );
      setfriends(true);

      const ress = await fetch(
        "https://iddias-api-sehk.vercel.app/api/iddias/finduser",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({ email: User.email }),
        }
      );
      const userDetails = await ress.json();
    } catch (error) {}
  }

  function verifyFriend() {
    if (User.email == user.email) {
      navigation.navigate("UserProfile");
    }
    if (User.friendrequest) {
      const value = User.friendrequest.includes(user.email);
      setfriend(value);
    }

    if (user.friendrequest) {
      const value = user.friendrequest.includes(User.email);
      setrequest(value);
    }

    if (user.friend) {
      const value = user.friend.includes(User.email);
      setfriends(value);
    }
  }

  React.useEffect(() => {
    verifyFriend();
  }, []);

  return (
    <ScrollView>
      <View style={styles.searchResults1View}>
        <View style={[styles.navigationBarView, styles.mr35]}>
          <Text style={styles.profileText}>Profile</Text>
          <Pressable
            style={styles.iconMaterialNotificationsAcPressable}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={"../assets/icon-materialnotificationsactive@3x.png"}
            />
          </Pressable>
        </View>
        <View style={[styles.heroView, styles.mt20, styles.mr37]}>
          <Image
            style={styles.profileIcon}
            resizeMode="cover"
            source={user && { uri: user.avatar ? user.avatar : user.firstpic }}
          />
          <View style={styles.nameView}>
            <Text style={styles.neliaCamposText}>{user && user.name}</Text>
            <Text style={styles.lisbonPTText}>
              {user && user.city}, {user && user.country}
            </Text>
          </View>
          <Text style={styles.hiMyNameIsNeliaCamposI}>
            {user && user.biography}
          </Text>
        </View>

        {friend ? (
          <View
            style={[
              { display: "flex", justifyContent: "space-between" },
              styles.mt_150,
              styles.mr43,
            ]}
          >
            <Pressable onPress={accept}>
              <Image
                style={[styles.acceptIcon, styles.mt_19]}
                resizeMode="cover"
                source={require("../assets/accept.png")}
              />
            </Pressable>

            <Pressable onPress={decline}>
              <Image
                style={[
                  styles.declineIcon,
                  styles.mt_22,
                  styles.mr44,
                  styles.iconLayout1,
                ]}
                resizeMode="cover"
                source={require("../assets/decline.png")}
              />
            </Pressable>
          </View>
        ) : (
          <>
            {request ? (
              <Pressable
                style={[styles.connectPressable, styles.mt_150, styles.mr43]}
                // onPress={() => navigation.navigate("ProfileConnected1")}
              >
                <View style={styles.rectangleView} />

                <Text style={styles.iDDPText}>Pending</Text>
              </Pressable>
            ) : (
              <>
                <Pressable
                  style={[styles.connectPressable, styles.mt_150, styles.mr43]}
                  // onPress={() => navigation.navigate("ProfileConnected1")}
                >
                  <View style={styles.rectangleView} />

                  {friends ? (
                    <>
                      <Text style={styles.iDDText}>IDID</Text>
                      <Pressable
                        onPress={() => {
                          navigation.navigate("Chat1", user);
                        }}
                      >
                        <Image
                          style={[
                            styles.iconAwesomeRocketchat,
                            styles.mt_27,
                            styles.mr120,
                          ]}
                          resizeMode="cover"
                          source={require("../assets/icon-awesomerocketchat.png")}
                        />
                      </Pressable>
                    </>
                  ) : (
                    <Pressable onPress={addFriend}>
                      <Text style={styles.iDText}>ID</Text>
                    </Pressable>
                  )}
                </Pressable>
              </>
            )}
          </>
        )}

        <Pressable
          onPress={() => {
            navigation.navigate("Chat1", user);
          }}
        >
          <Image
            style={[styles.iconAwesomeRocketchat, styles.mt_27, styles.mr120]}
            resizeMode="cover"
            source={"../assets/icon-awesomerocketchat.png"}
          />
        </Pressable>

        <View style={[styles.galleryView, styles.mt133, styles.mr37]}>
          <Text style={styles.galleryText}>Gallery</Text>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={
              user && user.gallary
                ? user.gallary
                : "../assets/rectangle-26135@3x.png"
            }
          />
          <Image
            style={styles.rectangleIcon1}
            resizeMode="cover"
            source={
              user && user.gallary2
                ? user.gallary2
                : "../assets/rectangle-26135@3x.png"
            }
          />
          <Image
            style={styles.rectangleIcon2}
            resizeMode="cover"
            source={
              user && user.gallary3
                ? user.gallary3
                : "../assets/rectangle-26135@3x.png"
            }
          />
        </View>
        <View style={[styles.interestsView, styles.mt30, styles.mr37]}>
          <Text style={styles.interestsText}>Interests</Text>

          {user && (
            <>
              <Text>{user.interests[1]} </Text>

              {/* <Image
              style={styles.rectangleIcon3}
              resizeMode="cover"
              source={user && require(`../assets/${user.interests[1]}.png`)}
            /> */}
              {/* <Image
              style={styles.rectangleIcon4}
              resizeMode="cover"
              source={user && require(`../assets/${user.interests[1]}.png`)}
            />
            <Image
              style={styles.rectangleIcon5}
              resizeMode="cover"
              source={user && require(`../assets/${user.interests[2]}.png`)}
            /> */}
            </>
          )}
          <Text style={styles.loremIpsumDolorSitAmetCo}>
            {user && user.interests[0]}
          </Text>
          <Text style={styles.loremIpsumDolorSitAmetCo1}>
            {user && user.interests[1]}
          </Text>
          <Text style={styles.loremIpsumDolorSitAmetCo2}>
            {user && user.interests[2]}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mr35: {
    marginRight: 35,
  },
  mt20: {
    marginTop: 20,
  },
  mr37: {
    marginRight: 37,
  },
  mt_150: {
    marginTop: -150,
  },
  mr43: {
    marginRight: 43,
  },
  mt_27: {
    marginTop: -27,
  },
  mr120: {
    marginLeft: -40,
    marginTop: 3,
  },
  mt133: {
    marginTop: 133,
  },
  mt30: {
    marginTop: 30,
  },
  mt83: {
    marginTop: 83,
  },
  profileText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -91.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    // fontFamily: "Quicksand",
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
    width: 183,
    height: 25,
  },
  profileIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 56,
    height: 56,
  },
  neliaCamposText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  acceptIcon: {
    width: 21,
    height: 20,
  },
  declineIcon: {
    width: 21,
    height: 20,
  },
  lisbonPTText: {
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
    width: 106,
    height: 37,
  },
  hiMyNameIsNeliaCamposI: {
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 14,
    lineHeight: 24,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 303,
    height: 75,
  },
  heroView: {
    position: "relative",
    width: 302,
    height: 163,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#2699fb",
  },
  iDDPText: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    marginLeft: -14,
    left: 23,
    fontSize: 14,
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  iDDText: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    left: 23,
    fontSize: 14,
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  iDText: {
    position: "absolute",
    marginTop: 8,
    top: "50%",
    left: 23,
    fontSize: 14,
    // fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
  },
  connectPressable: {
    position: "relative",
    width: 60,
    height: 30,
  },
  iconAwesomeRocketchat: {
    position: "relative",
    width: 27.76,
    height: 24.4,
  },
  galleryText: {
    position: "absolute",
    marginLeft: -28,
    top: 0,
    left: "50%",
    fontSize: 16,
    fontWeight: "700",
    // fontFamily: "Quicksand",
    color: "#15abb5",
    textAlign: "center",
  },
  mt_22: {
    marginTop: -20,
    marginLeft: -40,
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
    color: "#15abb5",
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
    fontSize: 10,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 89,
    height: 88,
  },
  loremIpsumDolorSitAmetCo1: {
    position: "absolute",
    marginLeft: -44,
    bottom: 0,
    left: "50%",
    fontSize: 10,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 89,
    height: 88,
  },
  loremIpsumDolorSitAmetCo2: {
    position: "absolute",
    right: -1,
    bottom: 0,
    fontSize: 10,
    // fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 89,
    height: 88,
  },
  interestsView: {
    position: "relative",
    width: 302,
    height: 239,
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
  searchResults1View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "flex-end",
  },
});

export default SearchResults1;
