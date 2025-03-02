// import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  // const [searchQuery, setSearchQuery] = useState("");

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

      <div className="auth-search-container w-[296px] flex justify-between items-center">
        {/* <div className="search-bar">
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
        </div> */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M16.5423 17.577L10.2616 11.296C9.76155 11.7088 9.18655 12.0319 8.53655 12.2653C7.88655 12.4986 7.21414 12.6153 6.5193 12.6153C4.81014 12.6153 3.36364 12.0235 2.1798 10.84C0.995969 9.6565 0.404053 8.21033 0.404053 6.5015C0.404053 4.79283 0.995803 3.34617 2.1793 2.1615C3.3628 0.977001 4.80897 0.38475 6.5178 0.38475C8.22647 0.38475 9.67314 0.976666 10.8578 2.1605C12.0423 3.34433 12.6346 4.79083 12.6346 6.5C12.6346 7.21417 12.5147 7.89625 12.2751 8.54625C12.0352 9.19625 11.7153 9.76158 11.3153 10.2423L17.5961 16.523L16.5423 17.577ZM6.5193 11.1155C7.8078 11.1155 8.89914 10.6683 9.7933 9.774C10.6876 8.87983 11.1348 7.7885 11.1348 6.5C11.1348 5.2115 10.6876 4.12017 9.7933 3.226C8.89914 2.33167 7.8078 1.8845 6.5193 1.8845C5.2308 1.8845 4.13947 2.33167 3.2453 3.226C2.35097 4.12017 1.9038 5.2115 1.9038 6.5C1.9038 7.7885 2.35097 8.87983 3.2453 9.774C4.13947 10.6683 5.2308 11.1155 6.5193 11.1155Z"
            fill="#024F40"
          ></path>
        </svg>

          <NavLink to="/LoginPage">
            <button className="text-base text-center text-[#024f40]">
              Log In
            </button>
          </NavLink>
          <button className="gap-[100px] px-8 py-2 rounded-[5px] bg-[#024f40] border border-[#024f40] text-base font-bold text-[#f1f0e8]">
            Sign Up
          </button>
      </div>
    </header>
  );
};

export default Header;
