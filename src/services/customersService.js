import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

const customersRef = collection(db, "customers");

// Отримати колекцію
export { customersRef };

// Додати клієнта
export const addCustomer = async (customer) => {
  return await addDoc(customersRef, {
    ...customer,
    createdAt: serverTimestamp(),
  });
};

// Оновити клієнта
export const updateCustomer = async (id, customer) => {
  return await updateDoc(doc(db, "customers", id), {
    ...customer,
  });
};

// Видалити клієнта
export const deleteCustomer = async (id) => {
  return await deleteDoc(doc(db, "customers", id));
};