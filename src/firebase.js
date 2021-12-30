import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjILWBk_iWIToE4FzvtPMeEPmPpmf_lJs",
    authDomain: "disney-clone-d4e35.firebaseapp.com",
    projectId: "disney-clone-d4e35",
    storageBucket: "disney-clone-d4e35.appspot.com",
    messagingSenderId: "173552692389",
    appId: "1:173552692389:web:ffc1a5b7f02a8cb390f14c",
    measurementId: "G-N0FKJDEWG1"
  };

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 
const storage = firebase.storage(); 

export {auth,provider,storage};
export default db;