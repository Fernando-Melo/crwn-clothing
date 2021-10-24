import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBhNP4ttDagJFD756jubDG4P5AqHF0D_TU",
  authDomain: "crwn-db-a85d7.firebaseapp.com",
  projectId: "crwn-db-a85d7",
  storageBucket: "crwn-db-a85d7.appspot.com",
  messagingSenderId: "626921541868",
  appId: "1:626921541868:web:bb77e4f6cb343b66c195c9",
  measurementId: "G-Y8KKW0EGRD"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
