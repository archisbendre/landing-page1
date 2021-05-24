import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBmW68bTTu5oJDlDWN62-56upyFMLp6O44",
    authDomain: "lp1-interior.firebaseapp.com",
    projectId: "lp1-interior",
    storageBucket: "lp1-interior.appspot.com",
    messagingSenderId: "203243331813",
    appId: "1:203243331813:web:10f8acdcf4af6bae0d340c",
    measurementId: "G-K1X9V0ML10"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {auth};