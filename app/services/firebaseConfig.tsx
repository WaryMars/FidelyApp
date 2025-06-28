import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqusqX26VzMdml9le1CSct5Wehzvne1ak",
  authDomain: "fidelyapp-9edb5.firebaseapp.com",
  projectId: "fidelyapp-9edb5",
  storageBucket: "fidelyapp-9edb5.firebasestorage.app",
  messagingSenderId: "699893749340",
  appId: "1:699893749340:web:080b9ffda510819694b899",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
