import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    if (!name.trim()) {
      setError("Введіть ім'я.");
      return;
    }

    if (password.length < 6) {
      setError("Пароль повинен містити мінімум 6 символів.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Паролі не співпадають.");
      return;
    }

    try {
      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        role: "user",
        createdAt: serverTimestamp(),
      });

      navigate("/");
    } catch (err) {
      console.error(err);

      switch (err.code) {
        case "auth/email-already-in-use":
          setError("Ця електронна пошта вже використовується.");
          break;

        case "auth/invalid-email":
          setError("Невірний формат Email.");
          break;

        case "auth/weak-password":
          setError("Пароль занадто слабкий.");
          break;

        default:
          setError("Помилка реєстрації.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <h1>SellAI</h1>
        <h2>Створити акаунт</h2>

        {error && (
          <div className="register-error">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="show-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          <div className="password-box">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Підтвердіть пароль"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

            <button
              type="button"
              className="show-btn"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? "🙈" : "👁"}
            </button>
          </div>

          <button
            type="submit"
            className="register-btn"
            disabled={loading}
          >
            {loading ? "Створення..." : "Зареєструватися"}
          </button>

        </form>

        <p>
          Вже є акаунт?{" "}
          <Link to="/login">
            Увійти
          </Link>
        </p>

      </div>
    </div>
  );
}