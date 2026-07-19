import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("sellai_user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("sellai_users")) || [];

    const foundUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!foundUser) {
      return false;
    }

    setUser(foundUser);

    localStorage.setItem(
      "sellai_user",
      JSON.stringify(foundUser)
    );

    return true;
  };

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("sellai_users")) || [];

    const exists = users.find(
      (user) => user.email === email
    );

    if (exists) {
      return false;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    users.push(newUser);

    localStorage.setItem(
      "sellai_users",
      JSON.stringify(users)
    );

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("sellai_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}