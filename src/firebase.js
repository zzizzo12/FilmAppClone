import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDD4rNYwaitRSFsXO6YgLjMr1tF3qxMOMo",
    authDomain: "filmappclone.firebaseapp.com",
    projectId: "filmappclone",
    storageBucket: "filmappclone.appspot.com",
    messagingSenderId: "596766191693",
    appId: "1:596766191693:web:2b43c1d6ba8bf2a9906c04",
    measurementId: "G-5R32RY53LW"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db;