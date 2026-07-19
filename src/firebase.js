import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXg2-z6vuBhVMrNV-WQlRsIoaT-WMLtlI",
  authDomain: "sellai-2ad64.firebaseapp.com",
  projectId: "sellai-2ad64",
  storageBucket: "sellai-2ad64.firebasestorage.app",
  messagingSenderId: "1043748314717",
  appId: "1:1043748314717:web:d4cdd57391b74aab4cf7b4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;