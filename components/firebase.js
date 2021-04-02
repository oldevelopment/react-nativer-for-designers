import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAKEB9_9_X9yiNtwiC0JqIsHvfNPCAM-CU",
  authDomain: "rn-designcode.firebaseapp.com",
  databaseURL: "https://rn-designcode.firebaseio.com",
  projectId: "rn-designcode",
  storageBucket: "rn-designcode.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
