import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPR0VJK0ycqyVcaPlF-JHzYYFVPQAQNCs",
  authDomain: "chatapp-31169.firebaseapp.com",
  databaseURL: "https://chatapp-31169.firebaseio.com",
  projectId: "chatapp-31169",
  storageBucket: "chatapp-31169.appspot.com",
  messagingSenderId: "271447545022",
  appId: "1:271447545022:web:79a71d165c70e056a1baef",
  measurementId: "G-JKRSXFXTFJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
