import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwnpHYoYR1rqd79iASD08rTkS1gd6ZPkw",
    authDomain: "make-a-story.firebaseapp.com",
    projectId: "make-a-story",
    storageBucket: "make-a-story.appspot.com",
    messagingSenderId: "737035725955",
    appId: "1:737035725955:web:4746258ce6d0a32312ffb6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default firebase;
