import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAiSHRH33jm9_ltcX1brteIhjbQMrOP5vI",
  authDomain: "e-commerce-db-dc209.firebaseapp.com",
  databaseURL: "https://e-commerce-db-dc209.firebaseio.com",
  projectId: "e-commerce-db-dc209",
  storageBucket: "e-commerce-db-dc209.appspot.com",
  messagingSenderId: "680452362493",
  appId: "1:680452362493:web:7d2cb3626500a9c9eb2e94",
  measurementId: "G-KL9V94BKTT"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();    

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
