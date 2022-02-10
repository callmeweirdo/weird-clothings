import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyBEvay3Q6A9DTX01UUatEIXn1N02sXVQuY",

    authDomain: "weirdos-clothing-db.firebaseapp.com",
  
    projectId: "weirdos-clothing-db",

    storageBucket: "weirdos-clothing-db.appspot.com",
  
    messagingSenderId: "84923393100",
  
    appId: "1:84923393100:web:747dc747d39cbf5180c0e9",
  
    measurementId: "G-QZGX4BN637"
  
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;