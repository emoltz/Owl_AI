import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// import admin from 'firebase-admin';
// import {fireConfig} from './fireConfig';
import {
    query,
    where,
    limit,
    doc,
    getFirestore,
    collection,
    getDocs,
    deleteDoc,
    serverTimestamp, setDoc
} from 'firebase/firestore';
import toast from "react-hot-toast";

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
        console.warn("Firebase.js: No user is signed in");
    }
    return {currentUser, userEmail, userDisplayName, userID};
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


export async function deleteDocFromFirebase(collection, docID) {
    const docRef = doc(getFirestore(), collection, docID);
    await deleteDoc(docRef);
}

export async function sendToSavedText(content, gradeLevel, language = "English", title, notes, originalText) {
        const loading = toast.loading("Saving...")
        const uniqueID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const uid = auth.currentUser.uid;
        const user = auth.currentUser;

        const ref = doc(getFirestore(), 'saved_text', uniqueID);
        const data = {
            archived: false,
            contents: content,
            // original_text: original_text,
            id: uniqueID,
            user_display_name: user.displayName,
            user_id: uid,
            created_date: serverTimestamp(),
            title: title,
            notes: notes,
            language: language,
            grade_level: gradeLevel,
            original_text: originalText
        };
        await setDoc(ref, data);
        toast.dismiss(loading);


    }