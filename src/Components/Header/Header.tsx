import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="header">
      <img src="images/Logo.png" alt="Logo" className="logo" />

      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/CoursesPage"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/UserAndDashBoardPage"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="auth-search-container">
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              fill="currentColor"
            >
              <path d="M23 21l-6-6 1.6-1.6 5.2 5.2v1.4h-1.4l-5.2-5.2-1.6 1.6 6 6h1.4v-1.4zM10 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" />
            </svg>
          </button>
        </div>

        <div className="auth-buttons">
          <button>Log In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
