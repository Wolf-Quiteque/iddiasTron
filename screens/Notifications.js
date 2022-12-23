import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notificationsView}>
      <View style={[styles.navigationBarView, styles.mr35]}>
        <Text style={styles.notificationsText}>Notifications</Text>
        <Image
          style={styles.iconMaterialNotificationsAc}
          resizeMode="cover"
          source={require("../assets/icon-materialnotificationsactive13.png")}
        />
      </View>
      <ScrollView
        style={[styles.scrollGroup8, styles.mt19, styles.mr_23]}
        contentContainerStyle={styles.scrollGroup8Content}
      >
        <View style={styles.repeatGrid1}>
          <View style={styles.view}>
            <View style={styles.groupView5}>
              <View style={styles.searchView} />
              <View style={styles.searchView1} />
              <View style={styles.searchView2} />
              <View style={styles.searchView3} />
              <View style={styles.searchView4} />
              <View style={styles.groupView}>
                <Text style={styles.coffeeMugText}>IDDIAS</Text>
                <Text style={styles.beautifulAndDurabl}>
                  Luzia Beltrand is connected with you
                </Text>
              </View>
              <View style={styles.groupView1}>
                <Text style={styles.coffeeMugText1}>IDDIAS</Text>
                <Text style={styles.beautifulAndDurabl1}>
                  Nelia Campos is connected with you
                </Text>
              </View>
              <View style={styles.groupView2}>
                <Text style={styles.coffeeMugText2}>IDDIAS</Text>
                <Text style={styles.beautifulAndDurabl2}>
                  Sofia Nabais is connected with you
                </Text>
              </View>
              <View style={styles.groupView3}>
                <Text style={styles.coffeeMugText3}>Groups</Text>
                <Text style={styles.beautifulAndDurabl3}>
                  Same Names as a new post
                </Text>
              </View>
              <View style={styles.groupView4}>
                <Text style={styles.coffeeMugText4}>Groups</Text>
                <Text style={styles.beautifulAndDurabl4}>
                  Same Faces as a new post
                </Text>
              </View>
            </View>
            <View style={styles.groupView11}>
              <View style={styles.searchView5} />
              <View style={styles.searchView6} />
              <View style={styles.searchView7} />
              <View style={styles.searchView8} />
              <View style={styles.searchView9} />
              <View style={styles.groupView6}>
                <Text style={styles.coffeeMugText5}>IDDIAS</Text>
                <Text style={styles.beautifulAndDurabl5}>
                  Luzia Beltrand is connected with you
                </Text>
              </View>
              <View style={styles.groupView7}>
                <Text style={styles.coffeeMugText6}>IDDIAS</Text>
                <Text style={styles.beautifulAndDurabl6}>
                  Nelia Campos is connected with you
                </Text>
              </View>
              <View style={styles.groupView8}>
                <Text style={styles.coffeeMugText7}>IDDIAS</Text>
                <Text style={styles.beautifulAndDurabl7}>
                  Sofia Nabais is connected with you
                </Text>
              </View>
              <View style={styles.groupView9}>
                <Text style={styles.coffeeMugText8}>Groups</Text>
                <Text style={styles.beautifulAndDurabl8}>
                  Same Names as a new post
                </Text>
              </View>
              <View style={styles.groupView10}>
                <Text style={styles.coffeeMugText9}>Groups</Text>
                <Text style={styles.beautifulAndDurabl9}>
                  Same Faces as a new post
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.toolbarView, styles.mt17]}>
        <View style={styles.rectangleView} />
        <Pressable
          style={styles.profilePressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileText}>Profile</Text>
          <Image
            style={styles.profileIcon}
            resizeMode="cover"
            source={require("../assets/profile.png")}
          />
        </Pressable>
        <Pressable
          style={styles.feedPressable}
          onPress={() => navigation.navigate("NewsFeed")}
        >
          <Text style={styles.feedText}>Feed</Text>
          <Image
            style={styles.feedIcon}
            resizeMode="cover"
            source={require("../assets/feed19.png")}
          />
        </Pressable>
        <Pressable
          style={styles.searchPressable}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.searchText}>Search</Text>
          <View style={styles.searchView10}>
            <View style={styles.rectangleView1} />
            <Image
              style={styles.path99Icon}
              resizeMode="cover"
              source={require("../assets/path-996.png")}
            />
          </View>
        </Pressable>
        <Pressable
          style={styles.chatPressable}
          onPress={() => navigation.navigate("Chat")}
        >
          <Text style={styles.chatText}>Chat</Text>
          <Image
            style={styles.iconMaterialChatBubble}
            resizeMode="cover"
            source={require("../assets/icon-materialchatbubble.png")}
          />
        </Pressable>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("GroupFeed")}
        >
          <Text style={styles.groupText}>Group</Text>
          <Image
            style={styles.iconMaterialGroup}
            resizeMode="cover"
            source={require("../assets/icon-materialgroup.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollGroup8Content: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
  mr35: {
    marginRight: 35,
  },
  mt19: {
    marginTop: 19,
  },
  mr_23: {
    marginRight: -23,
  },
  mt17: {
    marginTop: 17,
  },
  notificationsText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -106.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  iconMaterialNotificationsAc: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 20,
    height: 19.56,
  },
  navigationBarView: {
    position: "relative",
    width: 213,
    height: 25,
  },
  searchView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "#bce0fd",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: 83,
  },
  searchView1: {
    position: "absolute",
    marginTop: -144.5,
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#bce0fd",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: 83,
  },
  searchView2: {
    position: "absolute",
    marginTop: 61.5,
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#bce0fd",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: 83,
  },
  searchView3: {
    position: "absolute",
    marginTop: -41.5,
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#bce0fd",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: 83,
  },
  searchView4: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#bce0fd",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: 83,
  },
  coffeeMugText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 59,
    height: 19,
  },
  beautifulAndDurabl: {
    position: "absolute",
    bottom: 0,
    left: 1,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 253,
    height: 28,
  },
  groupView: {
    position: "absolute",
    top: 20,
    right: 29,
    left: 20,
    height: 54,
  },
  coffeeMugText1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 59,
    height: 19,
  },
  beautifulAndDurabl1: {
    position: "absolute",
    bottom: 0,
    left: 1,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 265,
    height: 17,
  },
  groupView1: {
    position: "absolute",
    marginTop: -124.5,
    top: "50%",
    right: 17,
    left: 20,
    height: 43,
  },
  coffeeMugText2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 59,
    height: 19,
  },
  beautifulAndDurabl2: {
    position: "absolute",
    bottom: 0,
    left: 1,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 239,
    height: 17,
  },
  groupView2: {
    position: "absolute",
    marginTop: 81.5,
    top: "50%",
    right: 43,
    left: 20,
    height: 43,
  },
  coffeeMugText3: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 80,
    height: 19,
  },
  beautifulAndDurabl3: {
    position: "absolute",
    bottom: 0,
    left: 1,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 239,
    height: 17,
  },
  groupView3: {
    position: "absolute",
    marginTop: -21.5,
    top: "50%",
    right: 43,
    left: 20,
    height: 43,
  },
  coffeeMugText4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 80,
    height: 19,
  },
  beautifulAndDurabl4: {
    position: "absolute",
    bottom: 0,
    left: 1,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 239,
    height: 26,
  },
  groupView4: {
    position: "absolute",
    right: 43,
    bottom: 11,
    left: 20,
    height: 52,
  },
  groupView5: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 495,
  },
  searchView5: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "#bce0fd",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: 83,
  },
  searchView6: {
    position: "absolute",
    marginTop: -144.5,
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#bce0fd",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: 83,
  },
  searchView7: {
    position: "absolute",
    marginTop: 61.5,
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#bce0fd",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: 83,
  },
  searchView8: {
    position: "absolute",
    marginTop: -41.5,
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#bce0fd",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: 83,
  },
  searchView9: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#bce0fd",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    height: 83,
  },
  coffeeMugText5: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 59,
    height: 19,
  },
  beautifulAndDurabl5: {
    position: "absolute",
    bottom: 0,
    left: 1,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 253,
    height: 28,
  },
  groupView6: {
    position: "absolute",
    top: 20,
    right: 29,
    left: 20,
    height: 54,
  },
  coffeeMugText6: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 59,
    height: 19,
  },
  beautifulAndDurabl6: {
    position: "absolute",
    bottom: 0,
    left: 1,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 265,
    height: 17,
  },
  groupView7: {
    position: "absolute",
    marginTop: -124.5,
    top: "50%",
    right: 17,
    left: 20,
    height: 43,
  },
  coffeeMugText7: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 59,
    height: 19,
  },
  beautifulAndDurabl7: {
    position: "absolute",
    bottom: 0,
    left: 1,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 239,
    height: 17,
  },
  groupView8: {
    position: "absolute",
    marginTop: 81.5,
    top: "50%",
    right: 43,
    left: 20,
    height: 43,
  },
  coffeeMugText8: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 80,
    height: 19,
  },
  beautifulAndDurabl8: {
    position: "absolute",
    bottom: 0,
    left: 1,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 239,
    height: 17,
  },
  groupView9: {
    position: "absolute",
    marginTop: -21.5,
    top: "50%",
    right: 43,
    left: 20,
    height: 43,
  },
  coffeeMugText9: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 80,
    height: 19,
  },
  beautifulAndDurabl9: {
    position: "absolute",
    bottom: 0,
    left: 1,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
    width: 239,
    height: 26,
  },
  groupView10: {
    position: "absolute",
    right: 43,
    bottom: 11,
    left: 20,
    height: 52,
  },
  groupView11: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: 495,
  },
  view: {
    position: "absolute",
    top: 35,
    right: 60,
    bottom: 13,
    left: 60,
  },
  repeatGrid1: {
    alignSelf: "stretch",
    position: "relative",
    height: 1058,
  },
  scrollGroup8: {
    width: 422,
    height: 640,
    maxWidth: 422,
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
    marginTop: 4,
    top: "50%",
    left: 0,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#fff",
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
    top: -0.5,
    right: -0.61,
    bottom: -0.61,
    left: -0.5,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchView10: {
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
  notificationsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "flex-end",
  },
});

export default Notifications;
