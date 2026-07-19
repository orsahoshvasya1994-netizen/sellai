import { useEffect, useState } from "react";
import { subscribeDashboardStats } from "../services/analyticsService";

export default function useDashboard() {
  const [stats, setStats] = useState({
    revenue: 0,
    orders: 0,
    customers: 0,
    products: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeDashboardStats((data) => {
      setStats(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    stats,
    loading,
  };
}