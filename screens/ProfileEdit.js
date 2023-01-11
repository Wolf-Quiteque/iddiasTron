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
import axios from "axios";
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
  setDoc,
} from "firebase/firestore";
import { firestore, storage } from "../firebase";
import * as ImagePicker from "expo-image-picker";

import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUser,
  selectUserName,
  selectUserDetails,
} from "../redux/slices/authSlice";

import { setSignIn } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { async } from "@firebase/util";
import DatePicker from 'react-native-modern-datepicker';

const ProfileEdit = () => {
const dispatch = useDispatch();
const [birthdate, setbirthdate] = React.useState('');
const [open, setOpen] = React.useState(false);

const [User,setuser ] = React.useState(useSelector(selectUserDetails));




const navigation = useNavigation();

var personal_info = {}
const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

  let file  = result.assets[0].uri;


    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("file", file);
    data.append("name", fileName);
    data.append("upload_preset", "ipo-uploads");
   

    const resultPic = await fetch(
      "https://api.cloudinary.com/v1_1/quitopia/image/upload",
      {
        method: "Post",
        body: data,
      }
    ).then((r) => r.json());
    
    const docRef = doc(firestore, "users", User.email);
    const dataPic = {
      dummyphoto: resultPic.secure_url,
    };
    setDoc(docRef, dataPic, { merge: true })
      .then(() => {
        console.log("Document has been added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
      AIauth(resultPic.secure_url,User.firstpic)
  };


 //compare picture with picture from DB
  async function AIauth(photo_taken,db_photo) {


  const response = await axios.post("http://127.0.0.1:5000/profile",{photo_taken:photo_taken,db_photo:db_photo});

if(response.data == "True"){
  const docRef = doc(firestore, "users", User.email);
  const dataPic = {
    avatar: photo_taken,
  };
  setDoc(docRef, dataPic, { merge: true })
    .then(() => {
      getUser()
      
    })
    .catch((error) => {
      console.log(error);
    });
}

  }


  const UpdateUser = async ()=>{
   
    const docRef = doc(firestore, "users", User.email);
 
    setDoc(docRef, personal_info, { merge: true })
      .then(() => {
       getUser()


      })
      .catch((error) => {
        console.log(error);
      });
  }


  const getUser = async () => {
    try {
      const q = query(
        collection(firestore, "users"),
        where("email", "in", [User.email])
      );

      const querySnapshot = await getDocs(q);
      chartData = querySnapshot.docs.map((doc) => doc.data());

      dispatch(
        setSignIn({
          email: User.email,
          isLoggedIn: true,
          userName: chartData[0].name,
          userDetails: chartData[0],
        })
      );
      setuser(chartData[0])
   
        navigation.navigate("Profile")
    
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    if(birthdate){
   personal_info.birthdate = birthdate
      console.log(personal_info)
    }
   }, [birthdate]);
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
      </View>
      <View style={[styles.heroView, styles.mt39, styles.ml36]}>
      <Pressable onPress={pickImage}>  
        
        <Image
          style={styles.profileIcon}
          resizeMode="cover"
          source={User && User.avatar ? User.avatar:User.firstpic}
        />
        <Text style={styles.editPhotoText}>Edit Photo</Text></Pressable>
        <View style={styles.nameView}>
          <Text style={styles.johnDoeText}>{User && User.name}</Text>
        </View>
        
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
            defaultValue={User && User.biography}
            onChangeText={(text)=>{
              personal_info.biography = text
            }}
        
          />
          
           <Pressable  
             style={styles.rectangleRNPTextInput1}
          onPress = {()=>{
              setOpen(true)
            }}>
          <RNPTextInput
         
            placeholder="Date of Birth"
            label="Date of Birth"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            defaultValue={User.birthdate && User.birthdate}
          /></Pressable>
         


          {open && ( <><DatePicker style={{zIndex:999}}
              onSelectedChange={(date) =>{
               
              setbirthdate(date.slice(0,-6));
                setOpen(false)
              } }

          />


          </> )}
          <RNPTextInput
            style={styles.rectangleRNPTextInput2}
            placeholder="Phone Number"
            label="Phone Number"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            defaultValue={User && User.phone}
            onChangeText={(text)=>{
              personal_info.phone = text
            }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput3}
            placeholder="City"
            label="City"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            defaultValue={User && User.city}
            onChangeText={(text)=>{
              personal_info.city = text
            }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput4}
            placeholder="Country"
            label="Country"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            defaultValue={User && User.country}
            onChangeText={(text)=>{
              personal_info.country = text
            }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput5}
            placeholder="Profession"
            label="Profession"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            defaultValue={User && User.profession}
            onChangeText={(text)=>{
              personal_info.profession = text
            }}
          />
          <RNPTextInput
            style={styles.rectangleRNPTextInput6}
            placeholder="E-mail"
            label="E-mail"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            defaultValue={User && User.email}
         
          />
       
          
          <RNPTextInput
            style={styles.rectangleRNPTextInput9}
            placeholder="Interests"
            label="Interests"
            mode="outlined"
            theme={{ colors: { background: "#fff" } }}
            defaultValue={User && User.interests}
           
          />
        </View>
        <Pressable
          style={[styles.continuePressable, styles.mt29]}
          onPress={UpdateUser}
        >
          <View style={styles.rectangleView1} />
          <Text style={styles.saveChangesText}>Save Changes</Text>
        </Pressable>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  ml11: {
    marginLeft: 11,
  },
  mt29: {
    marginTop: -80,
    marginBottom: 50,
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
    borderRadius: "50%"
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

  rectangleRNPTextInput9: {
    position: "absolute",
    marginTop: 166,
    top: "50%",
    right: 0,
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
