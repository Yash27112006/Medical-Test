import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBIEtQiUnViojGoK7LlAtZBRE8K4HuQm7Q",
  authDomain: "medical-ba693.firebaseapp.com",
  projectId: "medical-ba693",
  storageBucket: "medical-ba693.appspot.com",
  messagingSenderId: "550719869384",
  appId: "1:550719869384:web:4275abada6661f9b5770fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();