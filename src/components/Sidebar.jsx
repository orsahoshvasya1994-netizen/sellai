import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        ⚡ SellAI
      </div>

      <nav>

        <NavLink to="/dashboard" className="menu-item">
          <FaChartPie />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/products" className="menu-item">
          <FaBox />
          <span>Товари</span>
        </NavLink>

        <NavLink to="/orders" className="menu-item">
          <FaShoppingCart />
          <span>Замовлення</span>
        </NavLink>

        <NavLink to="/customers" className="menu-item">
          <FaUsers />
          <span>Клієнти</span>
        </NavLink>

        <NavLink to="/analytics" className="menu-item">
          <FaChartLine />
          <span>Аналітика</span>
        </NavLink>

        <NavLink to="/settings" className="menu-item">
          <FaCog />
          <span>Налаштування</span>
        </NavLink>

      </nav>
    </aside>
  );
}