import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBZr_P4tAYLuEaWi9nVCRa1Nj_TCNM5VQI",
  authDomain: "my-a58fa.firebaseapp.com",
  projectId: "my-a58fa",
  storageBucket: "my-a58fa.appspot.com",
  messagingSenderId: "765514439678",
  appId: "1:765514439678:web:62be2e96db7241d2c4beaf",
  measurementId: "G-HHBEF6ETLW",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
