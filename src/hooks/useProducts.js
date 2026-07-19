import { useEffect, useState } from "react";

import { subscribeProducts } from "../services/productsService";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeProducts((data) => {
      setProducts(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    products,
    loading,
  };
}