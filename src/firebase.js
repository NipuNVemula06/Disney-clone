import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBFV4MCXxAujYS1h7x69-Wt1_5WRNjFagI",
    authDomain: "disney-clone-7e2d5.firebaseapp.com",
    projectId: "disney-clone-7e2d5",
    storageBucket: "disney-clone-7e2d5.appspot.com",
    messagingSenderId: "739904492291",
    appId: "1:739904492291:web:93f97fb7a02aa70337cf36",
    measurementId: "G-CCH9VHPT7Y"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
