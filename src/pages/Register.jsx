import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const register = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await setDoc(
        doc(db, "users", userCredential.user.uid),
        {
          uid: userCredential.user.uid,
          email,
          role: "user",
          balance: 0,
          status: "active",
          createdAt: serverTimestamp(),
        }
      );

      setSuccess("✅ Реєстрація успішна!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (err) {

      switch (err.code) {

        case "auth/email-already-in-use":
          setError("Користувач із такою електронною поштою вже існує.");
          break;

        case "auth/invalid-email":
          setError("Невірний формат електронної пошти.");
          break;

        case "auth/weak-password":
          setError("Пароль повинен містити щонайменше 6 символів.");
          break;

        default:
          setError("Сталася помилка. Спробуйте ще раз.");
      }
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={register}>

        <h1>SellAI</h1>

        <p>Створити акаунт</p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        {success && (
          <div className="auth-success">
            {success}
          </div>
        )}

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

        <button type="submit">
          Зареєструватися
        </button>

        <p>
          Уже є акаунт?{" "}
          <Link to="/login">
            Увійти
          </Link>
        </p>

      </form>
    </div>
  );
}