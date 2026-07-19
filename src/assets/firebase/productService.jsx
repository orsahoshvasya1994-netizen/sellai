import { db } from "./firebase";

import {
  collection,
 addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const collectionRef = collection(db, "products");

export const getProducts = async () => {
  const snapshot = await getDocs(collectionRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addProduct = async (product) => {
  await addDoc(collectionRef, product);
};

export const updateProduct = async (id, product) => {
  const productRef = doc(db, "products", id);

  await updateDoc(productRef, product);
};

export const deleteProduct = async (id) => {
  const productRef = doc(db, "products", id);

  await deleteDoc(productRef);
};