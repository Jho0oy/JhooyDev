// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqX3ZRF_7uEVif2hcr_6mlj7XCNKPXwKE",
  authDomain: "jhooysport.firebaseapp.com",
  projectId: "jhooysport",
  storageBucket: "jhooysport.appspot.com",
  messagingSenderId: "SEU_ID",
  appId: "1:108424305843:android:5dffa2b4d6163f06ada4c6"
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Exporta o banco de dados Firestore
export const db = getFirestore(app);
