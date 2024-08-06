// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt4bG5Xpyy9Wl9E1JyeHLWAxs9OPZnGWw",
  authDomain: "dambal-48506.firebaseapp.com",
  projectId: "dambal-48506",
  storageBucket: "dambal-48506.appspot.com",
  messagingSenderId: "1049588418784",
  appId: "1:1049588418784:web:0bec973c3dabf298fd2885",
  measurementId: "G-6Q7NRBHNJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase();
export default app;