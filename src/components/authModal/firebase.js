import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDwVHwIIBFaPX1Eheg_ve5zMDYe5EnQt8",
  authDomain: "mandapam-9b0bc.firebaseapp.com",
  databaseURL: "https://mandapam-9b0bc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mandapam-9b0bc",
  storageBucket: "mandapam-9b0bc.appspot.com",
  messagingSenderId: "356337010378",
  appId: "1:356337010378:web:78481bfcc965d8b19d9633",
  measurementId: "G-PYYNLBDL0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };