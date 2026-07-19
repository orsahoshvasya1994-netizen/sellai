import { useEffect, useState } from "react";

import {
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import { customersRef } from "../services/customersService";

export default function useCustomers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      customersRef,
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCustomers(data);
        setLoading(false);
      },
      (error) => {
        console.error("Customers error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return {
    customers,
    loading,
  };
}