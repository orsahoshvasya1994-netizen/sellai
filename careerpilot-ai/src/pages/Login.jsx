import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Введіть Email");
      return;
    }

    if (!password.trim()) {
      setError("Введіть пароль");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/dashboard");
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-credential":
          setError("Неправильний email або пароль.");
          break;

        case "auth/user-not-found":
          setError("Користувача не знайдено.");
          break;

        case "auth/wrong-password":
          setError("Невірний пароль.");
          break;

        case "auth/too-many-requests":
          setError("Забагато спроб входу. Спробуйте пізніше.");
          break;

        default:
          setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          <h1>SellAI</h1>
          <p>Увійдіть у свій акаунт</p>
        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Пароль</label>

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="button"
                className="show-password"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword
                  ? "Приховати"
                  : "Показати"}
              </button>

            </div>

          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button
            className="login-btn"
            disabled={loading}
          >
            {loading
              ? "Вхід..."
              : "Увійти"}
          </button>

        </form>

        <div className="login-footer">
          Ще немає акаунта?

          <Link to="/register">
            Зареєструватися
          </Link>
        </div>

      </div>
    </div>
  );
}