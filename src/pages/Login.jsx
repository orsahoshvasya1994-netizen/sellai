import "./Login.css";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Користувача не знайдено.");
          break;

        case "auth/wrong-password":
          alert("Невірний пароль.");
          break;

        case "auth/invalid-credential":
          alert("Невірний email або пароль.");
          break;

        case "auth/invalid-email":
          alert("Некоректний email.");
          break;

        default:
          alert(error.message);
      }
    }

    setLoading(false);
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={login}>
        <h1>SellAI</h1>

        <p className="subtitle">Вхід до акаунта</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Вхід..." : "Увійти"}
        </button>

        <p className="register">
          Немає акаунта?
          <Link to="/register"> Зареєструватися</Link>
        </p>
      </form>
    </div>
  );
}