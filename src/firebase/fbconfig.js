import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA5XwyX9ETKfHGwMDeD25rA5h4Z2o8KthM",
    authDomain: "resume-builder-demo-d1cba.firebaseapp.com",
    databaseURL: "https://resume-builder-demo-d1cba.firebaseio.com",
    projectId: "resume-builder-demo-d1cba",
    storageBucket: "resume-builder-demo-d1cba.appspot.com",
    messagingSenderId: "974959487047",
    appId: "1:974959487047:web:99059b1cba32a04480e962"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , db , provider};