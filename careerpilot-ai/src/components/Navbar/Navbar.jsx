import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          Sell<span>AI</span>
        </Link>

        <nav className="nav-menu">
          <NavLink to="/" end>
            Головна
          </NavLink>

          <a href="#features">Можливості</a>
          <a href="#pricing">Ціни</a>
          <a href="#about">Про нас</a>
          <a href="#contact">Контакти</a>
        </nav>

        <div className="nav-buttons">
          <Link to="/login" className="btn-login">
            Увійти
          </Link>

          <Link to="/register" className="btn-register">
            Почати
          </Link>
        </div>

      </div>
    </header>
  );
}