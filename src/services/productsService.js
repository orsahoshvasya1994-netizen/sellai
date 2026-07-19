import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";

const productsRef = collection(db, "products");

// ===============================
// Real-Time Products
// ===============================

export function subscribeProducts(callback) {
  return onSnapshot(productsRef, (snapshot) => {
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(products);
  });
}

// ===============================
// Add Product
// ===============================

export async function addProduct(product) {
  await addDoc(productsRef, {
    ...product,
    createdAt: Date.now(),
  });
}

// ===============================
// Update Product
// ===============================

export async function updateProduct(id, product) {
  const productRef = doc(db, "products", id);

  await updateDoc(productRef, {
    ...product,
    updatedAt: Date.now(),
  });
}

// ===============================
// Delete Product
// ===============================

export async function deleteProduct(id) {
  await deleteDoc(doc(db, "products", id));
}