import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// import admin from 'firebase-admin';
// import {fireConfig} from './fireConfig';
import {query, where, limit, doc, getFirestore, collection, getDocs} from 'firebase/firestore';

const firebaseConfig = {
    //load apiKey from .env file
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: "projectowl-4022e.firebaseapp.com",
    projectId: "projectowl-4022e",
    storageBucket: "projectowl-4022e.appspot.com",
    messagingSenderId: "584727270744",
    appId: "1:584727270744:web:b9d1bba8aa9203e7a4012d",
    measurementId: "G-VK9Q5YF4DR"
}

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
// }

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
// const analytics = firebase.analytics();

export async function getUserWithUID(uid) {
    const q = query(
        collection(firestore, 'users'),
        where('uid', '==', uid),
        limit(1)
    )
    return (await getDocs(q)).docs[0];

}

export function getCurrentUser(){
    let userEmail = null;
    let userDisplayName = null;
    let userID = null;
    const currentUser = auth.currentUser;
    if (currentUser) {
        const {email, displayName, uid} = currentUser;
        // console.log(email, displayName, uid);
        userEmail = email;
        userDisplayName = displayName;
        userID = uid;
    } else {
        console.log("No user");
    }
    return {userEmail, userDisplayName, userID};
}


/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    created_date: data?.created_date.toMillis() || 0,
  };
}
