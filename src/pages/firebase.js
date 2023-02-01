// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDF4xygN868Y3U-0EIlUdjByjVq_WQ6y1Q",
  authDomain: "physicsblog-fa624.firebaseapp.com",
  databaseURL: "https://physicsblog-fa624-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "physicsblog-fa624",
  storageBucket: "physicsblog-fa624.appspot.com",
  messagingSenderId: "500651924769",
  appId: "1:500651924769:web:95bc70ebbe0ecc8a5cf260",
  measurementId: "G-56EEMCHHCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signinwithgoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const name=result.user.displayName;
        const email = result.user.email;
        const profilepic=result.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilepic)

    }).catch((error) => {
        console.log(error);
    })

};
export const signOutWithGoogle = () => {
    auth.signOut()
      .then(() => {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("profilePic");
      })
      .catch((error) => {
        console.log(error);
      });
  };
