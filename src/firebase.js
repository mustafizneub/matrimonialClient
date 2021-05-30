import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtaxKf0LQ9npaC6YFhS-XhHV8F3sX4rnQ",
  authDomain: "soulmate-project400.firebaseapp.com",
  projectId: "soulmate-project400",
  storageBucket: "soulmate-project400.appspot.com",
  messagingSenderId: "823759111371",
  appId: "1:823759111371:web:376563c9a94657c72fc74e",
  measurementId: "G-KYLL2KTSV1"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth= firebase.auth();

export {db, auth};