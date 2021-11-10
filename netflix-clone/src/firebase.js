import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAGiUETRv1-ZFDr20AvOSfawffLi1BX71E",
  authDomain: "netflix-clone-141f3.firebaseapp.com",
  projectId: "netflix-clone-141f3",
  storageBucket: "netflix-clone-141f3.appspot.com",
  messagingSenderId: "686940294855",
  appId: "1:686940294855:web:0f9cba5a61bde8d8c3b8e2",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
export { auth };
export default db;
