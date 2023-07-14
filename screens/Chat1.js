import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  getDocs,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase";
import { GiftedChat } from "react-native-gifted-chat";
import { selectUserName } from "../redux/slices/authSlice";
import { useSelector } from "react-redux";

const Chat1 = ({ route, navigation }) => {
  const email = useSelector(selectUserName);

  const recieverData = route.params;
  var user;

  recieverData._id = recieverData.email;

  const getUser = async () => {
    const q = query(
      collection(firestore, "users"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(q);
    chartData = querySnapshot.docs.map((doc) => doc.data());
    user = chartData[0];
    user._id = user.email;
  };

  React.useEffect(() => {
    if (recieverData) {
      const unsub = onSnapshot(
        query(
          collection(
            firestore,
            "users",
            email,
            "chatUsers",
            recieverData.email,
            "messages"
          ),
          orderBy("createdAt", "desc")
        ),
        (snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        }
      );
    }
  }, []);

  // React.useEffect(() => {
  //   setMessages([
  //     {
  //       _id: "marcio",
  //       text: "Hello developer",
  //       createdAt: new Date(),
  //       user: {
  //         _id: "marta",
  //         name: "React Native",
  //         avatar: "https://placeimg.com/140/140/any",
  //       },
  //     },

  //     {
  //       _id: "marta",
  //       text: "ojoj",
  //       createdAt: new Date(),
  //       user: {
  //         _id: "marcio",
  //         name: "React Native",
  //         avatar: "https://placeimg.com/140/140/any",
  //       },
  //     },
  //   ]);
  // }, []);

  React.useEffect(() => {
    getUser();
  }, []);

  const [messages, setMessages] = React.useState([]);

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

  const onSend = React.useCallback(async (messages = []) => {
    // setMessages((previousMessages) =>
    //   GiftedChat.append(previousMessages, messages)
    // );

    const { _id, createdAt, text } = messages[0];
    try {
      if (user && recieverData) {
        await addDoc(
          collection(
            firestore,
            "users", // Collection
            user.email, // sender doc id
            "chatUsers", //Collection
            recieverData.email, //reciever doc id
            "messages" // Collection
          ),
          {
            _id: recieverData.email,
            user: user,
            text: text,
            createdAt: formatDate(new Date()),
          }
        );

        await addDoc(
          collection(
            firestore,
            "users", //Collection
            recieverData.email, // receiver doc id
            "chatUsers", //Collection
            user.email, //sender doc id
            "messages" //Collection
          ),
          {
            user: user,
            _id: recieverData.email,
            text: text,
            createdAt: formatDate(new Date()),
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.chat1View}>
      <View style={styles.navigationBarView}>
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Text style={styles.johnDoeText}>{recieverData.name} </Text>
        <Pressable
          style={styles.backwardArrowPressable}
          onPress={() => navigation.navigate("Chat")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={"../assets/backward-arrow@3x.png"}
          />
        </Pressable>
        <Pressable
          style={styles.iconAwesomeVideoPressable}
          onPress={() => navigation.navigate("ChatVdeoCall")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={"../assets/icon-awesomevideo@3x.png"}
          />
        </Pressable>
      </View>

      {messages && (
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: email,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mt44: {
    marginTop: 44,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 20,
  },
  rectangleView1: {
    position: "absolute",
    top: 20,
    right: 0,
    bottom: 0,
    left: 0,
  },
  johnDoeText: {
    position: "absolute",
    marginTop: -6,
    marginLeft: -44.5,
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  icon: {
    marginTop: 2,
    width: "100%",
    height: "100%",
  },
  backwardArrowPressable: {
    position: "absolute",
    left: 35,
    top: "50%",
    width: 16,
    height: 16,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  iconAwesomeVideoPressable: {
    position: "absolute",
    left: 314.25,
    top: 36,
    width: 24,
    height: 16,
  },
  navigationBarView: {
    position: "relative",
    width: 375,
    height: 68,
  },
  path112Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  sedUtPerspiciatisOmnis: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 32.48,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 165,
    height: 16,
  },
  messageView: {
    position: "absolute",
    marginLeft: -97.98,
    top: 0,
    left: "50%",
    width: 218,
    height: 56,
  },
  path113Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  excepteurSintOccaecatCupida: {
    position: "absolute",
    top: 24,
    left: 24.12,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 191,
    height: 65,
  },
  messageView1: {
    position: "absolute",
    top: 76,
    left: 45.88,
    width: 248,
    height: 113,
  },
  path116Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    marginTop: -20.17,
    top: "50%",
    left: 24.12,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 191,
    height: 41,
  },
  messageView2: {
    position: "absolute",
    marginTop: 1.17,
    top: "50%",
    left: 46.88,
    width: 248,
    height: 89,
  },
  monday1040Am: {
    position: "absolute",
    marginTop: -65.5,
    marginLeft: -64.5,
    top: "50%",
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "center",
  },
  saySomethingText: {
    position: "absolute",
    marginTop: -9,
    top: "50%",
    left: 35,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#000",
    textAlign: "left",
  },
  component1Icon: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    right: 36,
    width: 16,
    height: 16,
  },
  inputView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#95989a",
    height: 56,
  },
  component1Icon1: {
    position: "absolute",
    top: 8,
    left: 37,
    width: 40,
    height: 40,
  },
  component2Icon: {
    position: "absolute",
    top: 82,
    right: 35,
    width: 40,
    height: 40,
  },
  component3Icon: {
    position: "absolute",
    marginTop: 5.5,
    top: "50%",
    right: 35,
    width: 40,
    height: 40,
  },
  path112Icon1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  sedUtPerspiciatisOmnis1: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: 32.48,
    fontSize: 14,
    fontFamily: "Quicksand",
    color: "#fff",
    textAlign: "left",
    width: 165,
    height: 16,
  },
  messageView3: {
    position: "absolute",
    marginTop: 133.5,
    marginLeft: -97.98,
    top: "50%",
    left: "50%",
    width: 218,
    height: 56,
  },
  component4Icon: {
    position: "absolute",
    marginTop: 141.5,
    top: "50%",
    left: 37,
    width: 40,
    height: 40,
  },
  chatView: {
    position: "relative",
    width: 375,
    height: 629,
  },
  rectangleView2: {
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
  chatPressable: {
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
  chat1View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
  },
});

export default Chat1;
