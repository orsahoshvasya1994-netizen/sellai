import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase";

import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (!name.trim()) {
      return setError("Введіть ім'я");
    }

    if (!email.trim()) {
      return setError("Введіть email");
    }

    if (password.length < 6) {
      return setError("Пароль повинен містити мінімум 6 символів");
    }

    if (password !== confirmPassword) {
      return setError("Паролі не співпадають");
    }

    try {
      setLoading(true);

      const result =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(result.user, {
        displayName: name,
      });

      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: serverTimestamp(),
      });

      navigate("/dashboard");
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("Такий email вже використовується.");
          break;

        case "auth/invalid-email":
          setError("Невірний email.");
          break;

        case "auth/weak-password":
          setError("Пароль занадто простий.");
          break;

        default:
          setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }  return (
    <div className="register-page">
      <div className="register-card">

        <div className="register-logo">
          <h1>SellAI</h1>
          <p>Створіть акаунт та почніть працювати</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">

          <div className="form-group">
            <label>Ім'я</label>

            <input
              type="text"
              placeholder="Ваше ім'я"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Приховати" : "Показати"}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Підтвердіть пароль</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button
            className="register-btn"
            disabled={loading}
          >
            {loading ? "Створення..." : "Створити акаунт"}
          </button>

        </form>

        <div className="register-footer">
          Вже маєте акаунт?

          <Link to="/login">
            Увійти
          </Link>
        </div>

      </div>
    </div>
  );
}