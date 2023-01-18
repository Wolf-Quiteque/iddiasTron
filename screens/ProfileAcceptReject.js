import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ProfileAcceptReject = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileAcceptReject}>
      <View style={[styles.hero, styles.heroFlexBox]}>
        <Image
          style={styles.profileIcon}
          resizeMode="cover"
          source={require("../assets/profile6.png")}
        />
        <View style={styles.name}>
          <Text style={styles.neliaCampos}>Nelia Campos</Text>
          <Text style={[styles.lisbonPt, styles.lisbonPtPosition]}>
            Lisbon, PT
          </Text>
        </View>
        <Text style={[styles.hiMyName, styles.lisbonPtPosition]}>
          Hi! My name is Nelia Campos, I love nature, camping, taking fotos and
          literature. I'm a lawyer by profession.
        </Text>
      </View>
      <View style={[styles.navigationBar, styles.mt20]}>
        <Text style={[styles.profile, styles.textTypo]}>Profile</Text>
        <Pressable
          style={[
            styles.iconMaterialNotificationsAc,
            styles.iconLayout1,
            styles.iconPosition1,
          ]}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon-materialnotificationsactive.png")}
          />
        </Pressable>
        <Image
          style={[styles.elipse248Icon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/elipse-248.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>100</Text>
      </View>
      <View style={[styles.gallery, styles.mt134, styles.heroFlexBox]}>
        <Text style={[styles.gallery1, styles.gallery1Typo]}>Gallery</Text>
        <Image
          style={[styles.retngulo261Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/retngulo-26120.png")}
        />
        <Image
          style={[styles.retngulo262IconPosition, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/retngulo-262.png")}
        />
        <Image
          style={[styles.retngulo920Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/retngulo-920.png")}
        />
      </View>
      <View style={[styles.interests, styles.mt30, styles.heroFlexBox]}>
        <Text style={[styles.interests1, styles.gallery1Typo]}>Interests</Text>
        <Image
          style={[styles.retngulo261Icon1, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/retngulo-26121.png")}
        />
        <Image
          style={[styles.iconPosition, styles.retngulo262IconPosition]}
          resizeMode="cover"
          source={require("../assets/retngulo-2621.png")}
        />
        <Image
          style={[styles.retngulo920Icon1, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/retngulo-9201.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
        <Text
          style={[styles.loremTypo, styles.retngulo262IconPosition]}
        >{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor `}</Text>
        <Text style={[styles.loremIpsumDolor2, styles.loremTypo]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </View>
      <Pressable
        style={[styles.iconAwesomeRocketchat, styles.mt_147, styles.mr85]}
        onPress={() => navigation.navigate("Chat1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon-awesomerocketchat.png")}
        />
      </Pressable>
      <Image
        style={[styles.acceptIcon, styles.mt_19, styles.mr5]}
        resizeMode="cover"
        source={require("../assets/accept.png")}
      />
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
    </View>
  );
};

const styles = StyleSheet.create({
  mt20: {
    marginTop: Margin.m_2xs,
  },
  mt134: {
    marginTop: 134,
  },
  mt30: {
    marginTop: Margin.m_2xl,
  },
  mt_147: {
    marginTop: -147,
  },
  mr85: {
    marginRight: 85,
  },
  mt_19: {
    marginTop: Margin.m_17xs,
  },
  mr5: {
    marginRight: Margin.m_10xs,
  },
  mt_22: {
    marginTop: -22,
  },
  mr44: {
    marginRight: Margin.m_14xl,
  },
  heroFlexBox: {
    alignSelf: "flex-start",
    width: 302,
  },
  lisbonPtPosition: {
    color: Color.black,
    bottom: 0,
    textAlign: "left",
    fontFamily: FontFamily.quicksand,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.quicksand,
    left: "50%",
    position: "absolute",
  },
  iconLayout1: {
    width: 20,
    height: 20,
  },
  iconPosition1: {
    bottom: 0,
    position: "absolute",
  },
  gallery1Typo: {
    color: Color.teal,
    textAlign: "center",
    fontFamily: FontFamily.quicksand,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 88,
    width: 88,
    bottom: 0,
    position: "absolute",
  },
  iconPosition: {
    marginTop: -76.5,
    height: 88,
    width: 88,
    top: "50%",
    position: "absolute",
  },
  retngulo262IconPosition: {
    marginLeft: -44,
    left: "50%",
  },
  loremTypo: {
    width: 89,
    fontSize: FontSize.size_sm,
    height: 88,
    color: Color.black,
    bottom: 0,
    textAlign: "left",
    fontFamily: FontFamily.quicksand,
    position: "absolute",
  },
  profileIcon: {
    width: 56,
    height: 56,
    left: 0,
    top: 0,
    position: "absolute",
  },
  neliaCampos: {
    color: Color.turquoise,
    textAlign: "left",
    fontFamily: FontFamily.quicksand,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lisbonPt: {
    fontSize: FontSize.size_base,
  },
  name: {
    marginLeft: -82,
    top: 8,
    width: 106,
    height: 37,
    left: "50%",
    position: "absolute",
  },
  hiMyName: {
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    width: 303,
    height: 75,
  },
  hero: {
    height: 163,
  },
  profile: {
    marginTop: -12.5,
    marginLeft: -91.5,
    fontSize: FontSize.size_5xl,
    top: "50%",
    textAlign: "center",
    fontWeight: "700",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconMaterialNotificationsAc: {
    height: 20,
    right: 0,
  },
  elipse248Icon: {
    marginLeft: 78.5,
    width: 13,
    height: 13,
    left: "50%",
  },
  text: {
    marginLeft: 79.5,
    bottom: 2,
    fontSize: 7,
  },
  navigationBar: {
    width: 183,
    height: 25,
  },
  gallery1: {
    marginLeft: -28,
  },
  retngulo261Icon: {
    left: 0,
  },
  retngulo920Icon: {
    right: 0,
  },
  gallery: {
    height: 131,
  },
  interests1: {
    marginLeft: -34,
  },
  retngulo261Icon1: {
    left: 0,
  },
  retngulo920Icon1: {
    right: 0,
  },
  loremIpsumDolor: {
    left: 0,
  },
  loremIpsumDolor2: {
    right: -1,
  },
  interests: {
    height: 239,
  },
  iconAwesomeRocketchat: {
    width: 28,
    height: 24,
  },
  acceptIcon: {
    width: 21,
    height: 20,
  },
  declineIcon: {
    height: 20,
  },
  profileAcceptReject: {
    backgroundColor: Color.white,
    flex: 1,
    paddingLeft: Padding.p_sm,
    paddingTop: Padding.p_lg,
    paddingRight: Padding.p_xs,
    alignItems: "flex-end",
    width: "100%",
  },
});

export default ProfileAcceptReject;
