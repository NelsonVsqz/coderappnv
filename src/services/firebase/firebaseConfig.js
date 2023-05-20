// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc2QlArN9Z2ekErmokz3vgcxS2vtXwKsY",
  authDomain: "construworld-d75c1.firebaseapp.com",
  projectId: "construworld-d75c1",
  storageBucket: "construworld-d75c1.appspot.com",
  messagingSenderId: "35612024436",
  appId: "1:35612024436:web:6641c809b95deb3cc6fb21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)