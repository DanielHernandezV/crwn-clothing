import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8d4alw2g1bHXw51Lw3aPhY0qvMEjpiAw",
  authDomain: "crwn-clothing-db-da284.firebaseapp.com",
  projectId: "crwn-clothing-db-da284",
  storageBucket: "crwn-clothing-db-da284.appspot.com",
  messagingSenderId: "39213703295",
  appId: "1:39213703295:web:2e802e10ffa509e7961f4a",
};

// Initialize Firebase
/* const app =  */ initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

/* export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider); */

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAth,
  aditionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAth;
    const createdAt = new Date();

    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...aditionalInformation,
    });
  }
  return userDocRef;
};

export const createAthUserWithEmailAndPassword = async (email, password) => {
  if (!(email && password)) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInEmailPassword = async (email, password) => {
  if (!(email && password)) return;
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};

export const signOutUser = () => signOut(auth);

export const onAthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
/* const createUsuario =async(userDocRef,usuario)=>{
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }


} */
