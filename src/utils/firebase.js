// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYtWa4QzV0g-GxyIxVYPpLc_XDGPHO-JI",
  authDomain: "swd-sandbox.firebaseapp.com",
  databaseURL:
    "https://swd-sandbox-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "swd-sandbox",
  storageBucket: "swd-sandbox.appspot.com",
  messagingSenderId: "18038598577",
  appId: "1:18038598577:web:f74f2db7b29b2cdcb96b90",
  measurementId: "G-2W0Z8QK7J3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);

if (import.meta.env.DEV) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(db, "127.0.0.1", 9000);
}

export { auth, db };
