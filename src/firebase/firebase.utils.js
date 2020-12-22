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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // const userRef = firestore.doc('users/123') // fake data
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()
  // !userAuth means not null => true

  if(!snapShot.exist) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
        console.log('error creating user', error.message)
    }
  }
  return userRef 
  // console.log(snapShot) // Document Reference: e {_: t, firestore: e, Hf: e} > id
}

export const addCollectionAndDocuments = async (collectionKey, ObjectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef) // e {_: e, firestore: e, Hf: e}

  const batch = firestore.batch()
  ObjectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc() // generate unique ID
    console.log(newDocRef) // e {_: e, firestore: e, Hf: e}
    batch.set(newDocRef, obj)
  })

  return await batch.commit() // fire off batch request. commit is a promise, can use chain function
}

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
    const { title, items } = docSnapshot.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items
    }
  })
  // convert [] to {}
  console.log(transformedCollection)

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {}) // {} initial obj
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
// Always trigger the Google pop up when the user use this GoogleAuthProvider for authentication and sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

// firestore fetch data:
// firestore.collection('users').doc('2H3V9Y3i1ina5Bx0CphG').collection('cartItems').doc('l41OJh2XtCrrNsGljTcx')
// firestore.doc('/users/2H3V9Y3i1ina5Bx0CphG/cartItems/doc/l41OJh2XtCrrNsGljTcx')
// firestore.collection('/users/2H3V9Y3i1ina5Bx0CphG/cartItems')
