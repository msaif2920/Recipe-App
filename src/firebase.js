import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDH2ozeCQvzGYLJ-9fMSs52lTAh8y-6Mts",
  authDomain: "healtheat-db65b.firebaseapp.com",
  projectId: "healtheat-db65b",
  storageBucket: "healtheat-db65b.appspot.com",
  messagingSenderId: "853566564959",
  appId: "1:853566564959:web:526597578c077d1d47c9ea",
});

const firestore = firebaseApp.firestore();

export default firestore;
