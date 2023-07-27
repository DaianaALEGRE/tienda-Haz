
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

//info de la cuenta  "AIzaSyDDyWM9Zj-UsHfM5H10nkMrYQrIXG9ksGk"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tpfinalcoder.firebaseapp.com",
  projectId: "tpfinalcoder",
  storageBucket: "tpfinalcoder.appspot.com",
  messagingSenderId: "826436317246",
  appId: "1:826436317246:web:1488620008d64e291aa16f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);