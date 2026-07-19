import { useEffect, useMemo, useState } from "react";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";

import StatCard from "../dashboard/StatCard";
import SalesChart from "../dashboard/SalesChart";
import RevenueCard from "../dashboard/RevenueCard";
import TopProducts from "../dashboard/TopProducts";
import RecentOrders from "../dashboard/RecentOrders";
import LowStockWidget from "../dashboard/LowStockWidget";

import AIAssistant from "../components/AIAssistant";
import AIInsights from "../components/AIInsights";

import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaBox,
} from "react-icons/fa";

import "./Dashboard.css";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {

    const unsubscribeProducts = onSnapshot(
      collection(db, "products"),
      (snapshot) => {

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(data);

        setLoading(false);

      }
    );

    const unsubscribeOrders = onSnapshot(
      collection(db, "orders"),
      (snapshot) => {

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrders(data);

      }
    );

    const unsubscribeCustomers = onSnapshot(
      collection(db, "customers"),
      (snapshot) => {

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCustomers(data);

      }
    );

    return () => {

      unsubscribeProducts();

      unsubscribeOrders();

      unsubscribeCustomers();

    };

  }, []);

  const revenue = useMemo(() => {

    return orders.reduce(
      (sum, order) =>
        sum + Number(order.total || 0),
      0
    );

  }, [orders]);

  const profit = useMemo(() => {

    return Math.round(revenue * 0.35);

  }, [revenue]);

  const forecast = useMemo(() => {

    return Math.round(revenue * 1.15);

  }, [revenue]);  const topProducts = useMemo(() => {

    return [...products]

      .sort((a, b) => {

        const soldA =
          Number(a.sold || 0);

        const soldB =
          Number(b.sold || 0);

        return soldB - soldA;

      })

      .slice(0, 5);

  }, [products]);



  const recentOrders = useMemo(() => {

    return [...orders]

      .sort((a, b) => {

        const first =
          a.createdAt?.seconds || 0;

        const second =
          b.createdAt?.seconds || 0;

        return second - first;

      })

      .slice(0, 5);

  }, [orders]);



  const lowStock = useMemo(() => {

    return products.filter((product) => {

      return Number(product.stock || 0) <= 5;

    });

  }, [products]);



  const chartData = useMemo(() => {

    const grouped = {};

    orders.forEach((order) => {

      if (!order.createdAt) return;

      const date =
        order.createdAt.toDate?.() ||
        new Date(order.createdAt);

      const month =
        date.toLocaleString("en", {
          month: "short",
        });

      if (!grouped[month]) {

        grouped[month] = {

          name: month,

          revenue: 0,

          profit: 0,

          orders: 0,

        };

      }

      grouped[month].revenue +=
        Number(order.total || 0);

      grouped[month].profit +=
        Number(order.total || 0) * 0.35;

      grouped[month].orders += 1;

    });

    return Object.values(grouped);

  }, [orders]);



  const aiInsights = useMemo(() => {

    return [

      `Revenue: $${revenue.toLocaleString()}`,

      `Profit: $${profit.toLocaleString()}`,

      `Orders: ${orders.length}`,

      `Customers: ${customers.length}`,

      `Products: ${products.length}`,

      `Forecast: $${forecast.toLocaleString()}`,

    ];

  }, [

    revenue,

    profit,

    forecast,

    orders,

    customers,

    products,

  ]);



  if (loading) {

    return (

      <div className="dashboard">

        <h2>
          Loading Dashboard...
        </h2>

      </div>

    );

  }



  return (

    <div className="dashboard">

      <div className="dashboard-header">

        <div>

          <h1>
            🚀 SellAI Enterprise Dashboard
          </h1>

          <p className="subtitle">

            AI-powered Sales Management Platform

          </p>

        </div>

      </div>



      <div className="stats-grid">

        <StatCard
          title="Revenue"
          value={`$${revenue.toLocaleString()}`}
          icon={<FaDollarSign />}
          color="#10b981"
        />

        <StatCard
          title="Orders"
          value={orders.length}
          icon={<FaShoppingCart />}
          color="#3b82f6"
        />

        <StatCard
          title="Customers"
          value={customers.length}
          icon={<FaUsers />}
          color="#8b5cf6"
        />

        <StatCard
          title="Products"
          value={products.length}
          icon={<FaBox />}
          color="#f97316"
        />

      </div>      <div className="dashboard-grid">

        {/* LEFT COLUMN */}

        <div className="dashboard-left">

          <SalesChart
            data={chartData}
          />

          <RevenueCard
            revenue={revenue}
          />

          <TopProducts
            products={topProducts}
          />

          <RecentOrders
            orders={recentOrders}
          />

        </div>

        {/* RIGHT COLUMN */}

        <div className="dashboard-right">

          <AIAssistant
            stats={{
              revenue,
              profit,
              forecast,
              orders: orders.length,
              customers: customers.length,
            }}
            insights={aiInsights}
          />

          <AIInsights
            revenue={revenue}
            profit={profit}
            forecast={forecast}
            orders={orders.length}
            customers={customers.length}
            products={products.length}
          />

          <LowStockWidget
            products={lowStock}
          />

        </div>

      </div>

    </div>

  );

}