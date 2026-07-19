import { useEffect, useState } from "react";
import "./Analytics.css";

import KPICards from "../components/analytics/KPICards";
import RevenueChart from "../components/analytics/RevenueChart";
import CategoryPie from "../components/analytics/CategoryPie";
import InsightsPanel from "../components/analytics/InsightsPanel";
import ForecastCard from "../components/analytics/ForecastCard";
import DateFilter from "../components/analytics/DateFilter";
import AIAssistant from "../components/AIAssistant";

import {
  getOrders,
  getProducts,
  getCustomers,
} from "../analytics/analyticsService";

import {
  calculateRevenue,
  calculateOrders,
  calculateCustomers,
  calculateProfit,
} from "../analytics/calculations";

import { forecastRevenue } from "../analytics/forecast";
import { generateInsights } from "../analytics/insights";

import {
  getReportData,
} from "../components/reports/reportService";

import {
  generateAIReport,
} from "../components/reports/reportGenerator";

import {
  exportPDF,
} from "../components/reports/exportPDF";

import {
  exportExcel,
} from "../components/reports/exportExcel";

export default function Analytics() {

  const [loading, setLoading] = useState(true);

  const [period, setPeriod] =
    useState("30 Days");

  const [stats, setStats] = useState({
    revenue: 0,
    orders: 0,
    customers: 0,
    profit: 0,
    forecast: 0,
  });

  const [insights, setInsights] =
    useState([]);

  const [revenueData, setRevenueData] =
    useState([]);

  const [categoryData, setCategoryData] =
    useState([]);

  useEffect(() => {
    loadAnalytics();
  }, [period]);

  async function loadAnalytics() {
    try {

      const orders = await getOrders();
      const products = await getProducts();
      const customers = await getCustomers();

      const revenue =
        calculateRevenue(orders);

      const ordersCount =
        calculateOrders(orders);

      const customersCount =
        calculateCustomers(customers);

      const profit =
        calculateProfit(products);

      const forecast =
        forecastRevenue(revenue);

      setStats({
        revenue: revenue || 145820,
        orders: ordersCount || 1248,
        customers: customersCount || 834,
        profit: profit || 48650,
        forecast: forecast || 162300,
      });

      setInsights(
        generateInsights({
          revenue: revenue || 145820,
          orders: ordersCount || 1248,
          customers: customersCount || 834,
          profit: profit || 48650,
        })
      );

      const monthlyRevenue = {};

      orders.forEach((order) => {

        if (!order.createdAt) return;

        const date =
          order.createdAt.toDate?.() ||
          new Date(order.createdAt);

        const month =
          date.toLocaleString("en", {
            month: "short",
          });

        monthlyRevenue[month] =
          (monthlyRevenue[month] || 0) +
          (order.total || 0);

      });

      const chartData =
        Object.keys(monthlyRevenue).map(
          (month) => ({
            month,
            revenue: monthlyRevenue[month],
          })
        );

      if (chartData.length === 0) {

        setRevenueData([
          { month: "Jan", revenue: 18000 },
          { month: "Feb", revenue: 24000 },
          { month: "Mar", revenue: 31000 },
          { month: "Apr", revenue: 43000 },
          { month: "May", revenue: 56000 },
          { month: "Jun", revenue: 72000 },
        ]);

      } else {

        setRevenueData(chartData);

      }

      const categories = {};

      products.forEach((product) => {

        const category =
          product.category || "Other";

        categories[category] =
          (categories[category] || 0) +
          (product.sold || 0);

      });

      const pieData =
        Object.keys(categories).map(
          (key) => ({
            name: key,
            value: categories[key],
          })
        );

      if (pieData.length === 0) {

        setCategoryData([
          {
            name: "Shoes",
            value: 40,
          },
          {
            name: "Clothes",
            value: 25,
          },
          {
            name: "Accessories",
            value: 20,
          },
          {
            name: "Electronics",
            value: 15,
          },
        ]);

      } else {

        setCategoryData(pieData);

      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  }

  async function handleGenerateReport() {

    const data =
      await getReportData(
        stats,
        insights
      );

    const report =
      generateAIReport(data);

    alert(report);
  }

  async function handleExportPDF() {

    const data =
      await getReportData(
        stats,
        insights
      );

    const report =
      generateAIReport(data);

    exportPDF(report);
  }

  function handleExportExcel() {
    exportExcel(stats, insights);
  }

  if (loading) {
    return (
      <div className="analytics-page">
        <h2>Loading Analytics...</h2>
      </div>
    );
  }  return (
    <div className="analytics-page">

      <div className="analytics-header">

        <div>
          <h1>📊 Analytics</h1>
          <p>Business Intelligence Dashboard</p>
        </div>

        <div className="analytics-actions">

          <button
            className="pdf-btn"
            onClick={handleExportPDF}
          >
            📄 Export PDF
          </button>

          <button
            className="excel-btn"
            onClick={handleExportExcel}
          >
            📊 Export Excel
          </button>

          <button
            className="report-btn"
            onClick={handleGenerateReport}
          >
            🤖 Generate AI Report
          </button>

        </div>

      </div>

      <DateFilter
        period={period}
        setPeriod={setPeriod}
      />

      <KPICards stats={stats} />

      <div className="charts-grid">

        <RevenueChart
          data={revenueData}
        />

        <CategoryPie
          data={categoryData}
        />

      </div>

      <div className="analytics-bottom">

        <InsightsPanel
          insights={insights}
        />

        <ForecastCard
          stats={stats}
        />

      </div>

      <AIAssistant
        stats={stats}
        insights={insights}
      />

      <div className="extra-grid">

        <div className="extra-card">

          <h3>🔥 Top Products</h3>

          <ul>

            <li>
              Nike Air Max
              <span>245 sales</span>
            </li>

            <li>
              Adidas Campus
              <span>201 sales</span>
            </li>

            <li>
              New Balance 530
              <span>187 sales</span>
            </li>

            <li>
              Puma RS-X
              <span>164 sales</span>
            </li>

          </ul>

        </div>

        <div className="extra-card">

          <h3>👥 Top Customers</h3>

          <ul>

            <li>
              John Smith
              <span>$5,240</span>
            </li>

            <li>
              Emily Johnson
              <span>$4,930</span>
            </li>

            <li>
              Michael Brown
              <span>$4,510</span>
            </li>

            <li>
              Olivia Davis
              <span>$3,980</span>
            </li>

          </ul>

        </div>

        <div className="extra-card">

          <h3>📈 Sales Overview</h3>

          <div className="progress-row">

            <span>Revenue Goal</span>

            <progress
              value="82"
              max="100"
            />

            <strong>82%</strong>

          </div>

          <div className="progress-row">

            <span>Orders Goal</span>

            <progress
              value="74"
              max="100"
            />

            <strong>74%</strong>

          </div>

          <div className="progress-row">

            <span>Customers Goal</span>

            <progress
              value="91"
              max="100"
            />

            <strong>91%</strong>

          </div>

          <div className="progress-row">

            <span>Profit Goal</span>

            <progress
              value="78"
              max="100"
            />

            <strong>78%</strong>

          </div>

        </div>

      </div>

    </div>
  );
}