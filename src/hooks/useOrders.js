import { useEffect, useState } from "react";

import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "../firebase";

export default function useOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrders(data);
        setLoading(false);
      },
      (error) => {
        console.error(
          "Error loading orders:",
          error
        );

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const totalRevenue = orders.reduce(
    (sum, order) =>
      sum + Number(order.price || order.total || 0),
    0
  );

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) =>
      order.status === "Pending" ||
      order.status === "Нове"
  ).length;

  const completedOrders = orders.filter(
    (order) =>
      order.status === "Completed" ||
      order.status === "Доставлено"
  ).length;

  const cancelledOrders = orders.filter(
    (order) =>
      order.status === "Cancelled" ||
      order.status === "Скасовано"
  ).length;

  return {
    loading,

    orders,

    totalRevenue,

    totalOrders,

    pendingOrders,

    completedOrders,

    cancelledOrders,
  };
}