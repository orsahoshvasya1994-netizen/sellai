import {
  collection,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";

export function subscribeDashboardStats(callback) {
  let revenue = 0;
  let ordersCount = 0;
  let productsCount = 0;
  let customersCount = 0;

  const update = () => {
    callback({
      revenue,
      orders: ordersCount,
      products: productsCount,
      customers: customersCount,
    });
  };

  const unsubscribeProducts = onSnapshot(
    collection(db, "products"),
    (snapshot) => {
      productsCount = snapshot.size;
      update();
    }
  );

  const unsubscribeOrders = onSnapshot(
    collection(db, "orders"),
    (snapshot) => {
      ordersCount = snapshot.size;

      revenue = 0;

      snapshot.forEach((doc) => {
        const data = doc.data();

        revenue += Number(data.total || 0);
      });

      update();
    }
  );

  const unsubscribeCustomers = onSnapshot(
    collection(db, "customers"),
    (snapshot) => {
      customersCount = snapshot.size;
      update();
    }
  );

  return () => {
    unsubscribeProducts();
    unsubscribeOrders();
    unsubscribeCustomers();
  };
}