import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  // Поки Firebase перевіряє користувача
  if (user === undefined) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#111827",
          color: "white",
          fontSize: "22px",
        }}
      >
        Завантаження...
      </div>
    );
  }

  // Якщо користувач не увійшов
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Якщо увійшов
  return children;
}