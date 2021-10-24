import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAPL7Wlak_a7tsSDBCbjtuZBuVfLMz4CyY",
  authDomain: "flatline-app.firebaseapp.com",
  databaseURL: "https://flatline-app.firebaseio.com",
  projectId: "flatline-app",
  storageBucket: "flatline-app.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
