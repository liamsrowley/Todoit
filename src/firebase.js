import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  ...process.env.FIREBASE_CONFIG,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
