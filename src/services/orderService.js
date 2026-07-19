import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase";

const ordersRef = collection(db, "orders");

export async function getOrders() {
  const snapshot = await getDocs(ordersRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function addOrder(order) {
  await addDoc(ordersRef, order);
}

export async function deleteOrder(id) {
  await deleteDoc(doc(db, "orders", id));
}

export async function updateOrder(id, order) {
  await updateDoc(doc(db, "orders", id), order);
}