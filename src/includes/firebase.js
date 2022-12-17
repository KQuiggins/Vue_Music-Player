import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDat0GJCGuqjvPwR58h67eKq1O6VawIOZA",
  authDomain: "music-5c2a5.firebaseapp.com",
  projectId: "music-5c2a5",
  storageBucket: "music-5c2a5.appspot.com",
  appId: "1:476083693334:web:7525f3ef71a334bda05237",
};

export default firebase.initializeApp(firebaseConfig);
