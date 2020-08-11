import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2BGPTVQkXk-OEuZ4-XBrFsWxL3-UNDPw",
  authDomain: "instagram-clone-9ce9c.firebaseapp.com",
  databaseURL: "https://instagram-clone-9ce9c.firebaseio.com",
  projectId: "instagram-clone-9ce9c",
  storageBucket: "instagram-clone-9ce9c.appspot.com",
  messagingSenderId: "1083524006700",
  appId: "1:1083524006700:web:38ad037369046a90fc2289",
  measurementId: "G-KCJ7C12ZWJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
