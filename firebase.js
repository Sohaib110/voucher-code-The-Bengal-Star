// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6XnoYptZRyB80M2_dxDuMpiOsvvrFkjQ",
  authDomain: "voucher-code-the-bengal-stars.firebaseapp.com",
  projectId: "voucher-code-the-bengal-stars",
  storageBucket: "voucher-code-the-bengal-stars.firebasestorage.app",
  messagingSenderId: "778883283357",
  appId: "1:778883283357:web:26d7216df5fb16a3cd5774",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
