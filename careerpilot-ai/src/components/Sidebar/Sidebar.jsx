import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>SellAI</h2>
      </div>

      <nav>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          📊 Dashboard
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          🛒 Замовлення
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          📦 Товари
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          👥 Клієнти
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          📈 Аналітика
        </NavLink>

        <NavLink
          to="/assistant"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          🤖 AI Асистент
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          ⚙️ Налаштування
        </NavLink>
      </nav>
    </aside>
  );
}