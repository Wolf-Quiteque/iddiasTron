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
import { TextInput as RNPTextInput } from "react-native-paper";

const ProfileEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileEditView}>
      <View style={[styles.navigationBarView, styles.ml157]}>
        <Text style={styles.profileText}>Profile</Text>
        <Pressable
          style={styles.component1Pressable}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={styles.rectangleView} />
          <Image
            style={styles.path104Icon}
            resizeMode="cover"
            source={require("../assets/path-104.png")}
          />
        </Pressable>
        <Pressable
          style={styles.iconMaterialNotificationsAcPressable}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon-materialnotificationsactive.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.heroView, styles.mt39, styles.ml36]}>
        <Image
          style={styles.profileIcon}
          resizeMode="cover"
          source={require("../assets/profile5.png")}
        />
        <View style={styles.nameView}>
          <Text style={styles.johnDoeText}>John Doe</Text>
          <Text style={styles.editNameText}>Edit Name</Text>
        </View>
        <Text style={styles.editPhotoText}>Edit Photo</Text>
      </View>
      <ScrollView
        style={[styles.scrollGroup4, styles.ml37]}
        contentContainerStyle={styles.scrollGroup4Content}
      >
        <View style={[styles.editInfoView, styles.ml11]}>
          <RNPTextInput
            style={styles.rectangleRNPTextInput}
            placeholder="Edit Biography"
            label="Edit Biography"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput1}
            placeholder="Date of Birth"
            label="Date of Birth"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput2}
            placeholder="Phone Number"
            label="Phone Number"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput3}
            placeholder="City"
            label="City"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput4}
            placeholder="Country"
            label="Country"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput5}
            placeholder="Profession"
            label="Profession"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput6}
            placeholder="E-mail"
            label="E-mail"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput7}
            placeholder="Password"
            label="Password"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput8}
            placeholder="Confirm Password"
            label="Confirm Password"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput9}
            placeholder="Interests"
            label="Interests"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
          />
        </View>
        <Pressable
          style={[styles.continuePressable, styles.mt29]}
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={styles.rectangleView1} />
          <Text style={styles.saveChangesText}>Save Changes</Text>
        </Pressable>
      </ScrollView>
      <View style={[styles.toolbarView, styles.mt45]}>
        <View style={styles.rectangleView2} />
        <Pressable
          style={styles.profilePressable}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileText1}>Profile</Text>
          <View style={styles.lineView} />
          <Image
            style={styles.union46Icon}
            resizeMode="cover"
            source={require("../assets/union-46.png")}
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
            source={require("../assets/feed5.png")}
          />
        </Pressable>
        <Pressable
          style={styles.searchPressable}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.searchText}>Search</Text>
          <View style={styles.searchView}>
            <View style={styles.rectangleView3} />
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
  ml11: {
    marginLeft: 11,
  },
  mt29: {
    marginTop: 29,
  },
  scrollGroup4Content: {
    alignItems: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 15,
  },
  ml157: {
    marginLeft: 157,
  },
  mt39: {
    marginTop: 39,
  },
  ml36: {
    marginLeft: 36,
  },
  ml37: {
    marginLeft: 37,
  },
  mt45: {
    marginTop: 45,
  },
  profileText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -90.5,
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
  },
  johnDoeText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#21ae9c",
    textAlign: "left",
  },
  editNameText: {
    position: "absolute",
    marginLeft: -24.5,
    bottom: 0,
    left: "50%",
    fontSize: 10,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  nameView: {
    position: "absolute",
    top: 8,
    right: 0,
    width: 73,
    height: 38,
  },
  editPhotoText: {
    position: "absolute",
    bottom: 0,
    left: 4,
    fontSize: 10,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  heroView: {
    position: "relative",
    width: 142,
    height: 75,
  },
  rectangleRNPTextInput: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    height: 107,
  },
  rectangleRNPTextInput1: {
    position: "absolute",
    marginTop: -218,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput2: {
    position: "absolute",
    marginTop: -154,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput3: {
    position: "absolute",
    marginTop: -90,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput4: {
    position: "absolute",
    marginTop: -26,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput5: {
    position: "absolute",
    marginTop: 38,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput6: {
    position: "absolute",
    marginTop: 102,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput7: {
    position: "absolute",
    marginTop: 166,
    top: "50%",
    right: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput8: {
    position: "absolute",
    right: 0,
    bottom: 65,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  rectangleRNPTextInput9: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    borderStyle: "solid",
    height: 48,
  },
  editInfoView: {
    width: "92.38%",
    position: "relative",
    height: 686,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#15abb5",
  },
  saveChangesText: {
    position: "absolute",
    marginTop: -11,
    marginLeft: -60,
    top: "50%",
    left: "50%",
    fontSize: 18,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "center",
  },
  continuePressable: {
    alignSelf: "stretch",
    position: "relative",
    height: 48,
  },
  scrollGroup4: {
    width: 302,
    height: 520,
    boxSizing: "border-box",
    maxWidth: 302,
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
    fontFamily: "Quicksand",
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
  profileEditView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 36,
    alignItems: "flex-start",
  },
});

export default ProfileEdit;
