import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDySErO2K9bVHgvvj2g3-6GqiBMjyLL6tc",
  authDomain: "todo-app-85ebd.firebaseapp.com",
  databaseURL: "https://todo-app-85ebd.firebaseio.com",
  projectId: "todo-app-85ebd",
  storageBucket: "todo-app-85ebd.appspot.com",
  messagingSenderId: "1068809593204",
  appId: "1:1068809593204:web:0f80ff5948fba2c5958c21",
  measurementId: "G-SXEJ0PLGG5",
};
firebase.initializeApp(firebaseConfig);

export const database=firebase.database();