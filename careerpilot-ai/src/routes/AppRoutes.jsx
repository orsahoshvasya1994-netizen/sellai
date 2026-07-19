import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Customers from "../pages/Customers";
import Analytics from "../pages/Analytics";
import Assistant from "../pages/Assistant";
import Settings from "../pages/Settings";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../components/Dashboard/Dashboard";
import PrivateRoute from "../components/PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Публічні сторінки */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Закрита частина */}
      <Route
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/customers"
          element={<Customers />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/assistant"
          element={<Assistant />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#0b1120",
              color: "white",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            404 | Сторінку не знайдено
          </div>
        }
      />

    </Routes>
  );
}