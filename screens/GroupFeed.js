import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GroupFeed = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupFeedView}>
      <View style={[styles.navigationBarView, styles.ml1]}>
        <Text style={styles.groupText}>Group</Text>
      </View>
      <Pressable
        style={[styles.pressable, styles.mt10, styles.ml273]}
        onPress={() => navigation.navigate("GroupCreationMembers")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={"../assets/1.png"}
        />
      </Pressable>
      <Pressable
        style={[styles.editPressable, styles.mt_23, styles.mr270]}
        onPress={() => navigation.navigate("GroupFeedEdit")}
      >
        <Text style={styles.editText}>Edit</Text>
      </Pressable>
      <Pressable
        style={[
          styles.iconMaterialNotificationsAcPressable,
          styles.mt_23,
          styles.ml183,
        ]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={"../assets/icon-materialnotificationsactive.png"}
        />
      </Pressable>
      <View style={[styles.inputView, styles.mt17, styles.mr1]}>
        <View style={styles.component2View}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.path99Icon}
            resizeMode="cover"
            source={"../assets/path-99.png"}
          />
        </View>
      </View>
      <View style={[styles.nameView, styles.mt13, styles.mr1]}>
        <Text style={styles.sameFacesText}>Same Faces</Text>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={"../assets/rectangle-26146.png"}
        />
        <Text style={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </View>
      <View style={[styles.nameView1, styles.mt35, styles.ml1]}>
        <Text style={styles.sameJobsText}>Same Jobs</Text>
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={"../assets/rectangle-26147.png"}
        />
        <Text style={styles.loremIpsumDolorSitAmetCo1}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </View>
      <Pressable
        style={[styles.namePressable, styles.mt35, styles.ml1]}
        onPress={() => navigation.navigate("GroupFeed1")}
      >
        <Text style={styles.sameNamesText}>Same Names</Text>
        <Image
          style={styles.rectangleIcon2}
          resizeMode="cover"
          source={"../assets/rectangle-26148.png"}
        />
        <Text style={styles.loremIpsumDolorSitAmetCo2}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </Pressable>
      <View style={[styles.nameView2, styles.mt35, styles.ml1]}>
        <Text style={styles.samePersonalityText}>Same Personality</Text>
        <Image
          style={styles.rectangleIcon3}
          resizeMode="cover"
          source={"../assets/rectangle-26149.png"}
        />
        <Text style={styles.loremIpsumDolorSitAmetCo3}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </View>
      <View style={[styles.nameView3, styles.mt35, styles.ml1]}>
        <Text style={styles.sameInterestsText}>Same Interests</Text>
        <Image
          style={styles.rectangleIcon4}
          resizeMode="cover"
          source={"../assets/rectangle-26150.png"}
        />
        <Text style={styles.loremIpsumDolorSitAmetCo4}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </View>
      <View style={[styles.toolbarView, styles.mt1]}>
        <View style={styles.rectangleView1} />
        <Pressable
          style={styles.profilePressable1}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileText}>Profile</Text>
          <Pressable
            style={styles.profilePressable}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={styles.icon2}
              resizeMode="cover"
              source={"../assets/profile.png"}
            />
          </Pressable>
        </Pressable>
        <Pressable
          style={styles.feedPressable}
          onPress={() => navigation.navigate("NewsFeed")}
        >
          <Text style={styles.feedText}>Feed</Text>
          <Image
            style={styles.feedIcon}
            resizeMode="cover"
            source={"../assets/feed19.png"}
          />
        </Pressable>
        <Pressable
          style={styles.searchPressable}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.searchText}>Search</Text>
          <View style={styles.searchView}>
            <View style={styles.rectangleView2} />
            <Image
              style={styles.path99Icon1}
              resizeMode="cover"
              source={"../assets/path-996.png"}
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
            source={"../assets/icon-materialchatbubble.png"}
          />
        </Pressable>
        <View style={styles.groupView}>
          <Text style={styles.groupText1}>Group</Text>
          <Image
            style={styles.iconMaterialGroup}
            resizeMode="cover"
            source={"../assets/icon-materialgroup23.png"}
          />
          <View style={styles.lineView} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml1: {
    marginLeft: 1,
  },
  mt10: {
    marginTop: 10,
  },
  ml273: {
    marginLeft: 273,
  },
  mt_23: {
    marginTop: -23,
  },
  mr270: {
    marginRight: 270,
  },
  ml183: {
    marginLeft: 183,
  },
  mt17: {
    marginTop: 17,
  },
  mr1: {
    marginRight: 1,
  },
  mt13: {
    marginTop: 13,
  },
  mt35: {
    marginTop: 35,
  },
  mt1: {
    marginTop: 1,
  },
  groupText: {
    position: "absolute",
    marginTop: -12.5,
    marginLeft: -29,
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
    width: 58,
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
  component2View: {
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
  sameFacesText: {
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
  sameJobsText: {
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
  sameNamesText: {
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
  namePressable: {
    position: "relative",
    width: 302,
    height: 88,
  },
  samePersonalityText: {
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
  nameView2: {
    position: "relative",
    width: 302,
    height: 88,
  },
  sameInterestsText: {
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
  nameView3: {
    position: "relative",
    width: 302,
    height: 88,
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
  groupText1: {
    position: "absolute",
    marginTop: 13.75,
    top: "50%",
    left: 7.5,
    fontSize: 12,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  iconMaterialGroup: {
    position: "absolute",
    top: 19.5,
    left: 12.5,
    width: 25.14,
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
  groupView: {
    position: "absolute",
    marginTop: -35,
    marginLeft: -26,
    top: "50%",
    left: "50%",
    width: 50,
    height: 57.5,
  },
  toolbarView: {
    position: "relative",
    width: 375,
    height: 71,
  },
  groupFeedView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingTop: 40,
    alignItems: "center",
  },
});

export default GroupFeed;
