
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8TkZe0jO3-QKj183eMgiKpVkeVUlMnBc",
  authDomain: "prepwise-4cc37.firebaseapp.com",
  projectId: "prepwise-4cc37",
  storageBucket: "prepwise-4cc37.firebasestorage.app",
  messagingSenderId: "1032711186119",
  appId: "1:1032711186119:web:1a717fa672ee1fe0cd40e2",
  measurementId: "G-8S25VJ9MTZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);