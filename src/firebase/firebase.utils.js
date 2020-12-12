import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC7jLipZnrDtx07FmzIaUifJGbHuOLIu80",
  authDomain: "crwn-db-8529a.firebaseapp.com",
  projectId: "crwn-db-8529a",
  storageBucket: "crwn-db-8529a.appspot.com",
  messagingSenderId: "420140051597",
  appId: "1:420140051597:web:19da62981092e8062ec6c4",
  measurementId: "G-LDN1P7T18M"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
// Always trigger the Google pop up when the user use this GoogleAuthProvider for authentication and sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase


