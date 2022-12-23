import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: "AIzaSyBl1OfqC221GIWRe9ctAOGXG5pGrL71VKw",
  authDomain: "emainvest-22fc2.firebaseapp.com",
  databaseURL: "https://emainvest-22fc2-default-rtdb.firebaseio.com",
  projectId: "emainvest-22fc2",
  storageBucket: "emainvest-22fc2.appspot.com",
  messagingSenderId: "647516716260",
  appId: "1:647516716260:web:3feeb236244e52eea6c0f1",
  measurementId: "G-SDKLGS6G9G",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { db, auth, firestore, storage };
