import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Будь ласка, заповніть усі поля.");
      return;
    }

    const success = login(email, password);

    if (success) {
      navigate("/dashboard");
    } else {
      alert("Невірний Email або пароль.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>SellAI</h1>

        <p>Увійдіть у свій акаунт</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Увійти
          </button>

        </form>

        <div className="login-links">
          <span>Ще немає акаунта?</span>

          <Link to="/register">
            Зареєструватися
          </Link>
        </div>

      </div>
    </div>
  );
}