// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKU5ZYOIeRajMFvrYJsBSiwW46sux2J3s",
  authDomain: "chatpdf-6dcdb.firebaseapp.com",
  projectId: "chatpdf-6dcdb",
  storageBucket: "chatpdf-6dcdb.appspot.com",
  messagingSenderId: "75157162293",
  appId: "1:75157162293:web:56aa4d92b5760b4045a47c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Authentication Provider and set parameters.
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signOut = () => auth.signOut();

export default auth
