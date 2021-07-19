import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG4_gWbIspJ2zPJJSK4794ODbEQduKfcw",
  authDomain: "rn-crud-12e4c.firebaseapp.com",
  databaseURL: "gs://rn-crud-12e4c.appspot.com",
  projectId: "rn-crud-12e4c",
  storageBucket: "rn-crud-12e4c.appspot.com",
  messagingSenderId: "190121320924",
  appId: "1:190121320924:ios:f967b462927e30a8dc6f19",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
