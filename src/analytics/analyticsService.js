import { db } from "../assets/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

/*
=========================================
LOAD ORDERS
=========================================
*/

export async function getOrders() {
  const snapshot = await getDocs(collection(db, "orders"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/*
=========================================
LOAD PRODUCTS
=========================================
*/

export async function getProducts() {
  const snapshot = await getDocs(collection(db, "products"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/*
=========================================
LOAD CUSTOMERS
=========================================
*/

export async function getCustomers() {
  const snapshot = await getDocs(collection(db, "customers"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}