import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBa-mJVtHoXb6MeDlTr_6Fk0bdv_5LsYH0",
    authDomain: "filesurge-dea0f.firebaseapp.com",
    databaseURL: "https://filesurge-dea0f.firebaseio.com",
    projectId: "filesurge-dea0f",
    storageBucket: "filesurge-dea0f.appspot.com",
    messagingSenderId: "149636458001",
    appId: "1:149636458001:web:2a1434fadb9449be5573b0",
    measurementId: "G-2Q3EMSB9LW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firebaseDB = firebase.database()

  export const storage = firebase.storage()





