import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM5VJSN4b3NsTJiDYsA3yga2BjENeglmw",
  authDomain: "todoit-d08f4.firebaseapp.com",
  databaseURL: "https://todoit-d08f4.firebaseio.com",
  projectId: "todoit-d08f4",
  storageBucket: "todoit-d08f4.appspot.com",
  messagingSenderId: "62582518292",
  appId: "1:62582518292:web:25aa863f972ef635e16d01"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
