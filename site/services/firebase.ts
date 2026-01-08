import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2gdos4tIDP3zxPsHBXs-jzjN0Giyye5o",
  authDomain: "nationalelectricals.firebaseapp.com",
  projectId: "nationalelectricals",
  storageBucket: "nationalelectricals.firebasestorage.app",
  messagingSenderId: "130444871282",
  appId: "1:130444871282:web:247e38ff3f8d94d04ea4eb",
  measurementId: "G-D8TCJLSXFB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);