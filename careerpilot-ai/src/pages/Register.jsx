import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "./Login.css";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Заповніть усі поля.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Паролі не співпадають.");
      return;
    }

    if (password.length < 6) {
      alert("Пароль повинен містити мінімум 6 символів.");
      return;
    }

    const success = register(name, email, password);

    if (!success) {
      alert("Користувач з таким Email вже існує.");
      return;
    }

    alert("Реєстрація успішна!");

    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>SellAI</h1>

        <p>Створіть новий акаунт</p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Ваше ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <input
            type="password"
            placeholder="Повторіть пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">
            Зареєструватися
          </button>

        </form>

        <div className="login-links">
          <span>Вже маєте акаунт?</span>

          <Link to="/login">
            Увійти
          </Link>
        </div>

      </div>
    </div>
  );
}