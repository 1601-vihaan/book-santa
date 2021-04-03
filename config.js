import firebase from"firebase"
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyALQlJQH52AAeR9n_Z2WBpJXHK5hRTtxDw",
    authDomain: "book-santa-91d8b.firebaseapp.com",
    projectId: "book-santa-91d8b",
    storageBucket: "book-santa-91d8b.appspot.com",
    messagingSenderId: "580436670387",
    appId: "1:580436670387:web:c4d338d2937f142fc87dc6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
