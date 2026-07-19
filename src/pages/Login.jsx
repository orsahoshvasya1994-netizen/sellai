import "./Login.css";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
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

        <button type="submit">Увійти</button>

        <p className="register">
          Немає акаунта?
          <Link to="/register"> Зареєструватися</Link>
        </p>
      </form>
    </div>
  );
}