import firebase from "firebase/app"

const firebaseConfig={
    apiKey: "AIzaSyCWcUDVnlApPSFYEFmrGb9qdOhbyyaugMU",
    authDomain: "whatsappeccomerce.firebaseapp.com",
    projectId: "whatsappeccomerce",
    storageBucket: "whatsappeccomerce.appspot.com",
    messagingSenderId: "142835865988",
    appId: "1:142835865988:web:422801e7da8f88615be5d1"
  };
  // Initialize Firebase
export const firebaseapp = firebase.initializeApp(firebaseConfig);
