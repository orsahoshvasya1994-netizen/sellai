import "./Navbar.css";

import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const logout = async () => {

    await signOut(auth);

    navigate("/login");

  };

  return (

    <header className="navbar">

      <div className="search">

        <FaSearch />

        <input
          type="text"
          placeholder="Пошук..."
        />

      </div>

      <div className="navbar-right">

        <button className="icon-btn">

          <FaBell />

        </button>

        <div className="profile">

          <FaUserCircle />

          <div>

            <h4>Admin</h4>

            <span>admin@sellai.com</span>

          </div>

        </div>

        <button
          className="logout"
          onClick={logout}
        >
          Вийти
        </button>

      </div>

    </header>

  );

}