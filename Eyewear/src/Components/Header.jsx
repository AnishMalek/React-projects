import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Components/header.css";

const Header = () => {

  const [isLogin, SetIslogin] = useState(false)
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user) {
      SetIslogin(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    SetIslogin(false)

  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light  custom-navbar ">
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand fw-bold" to="/">
          Hayat<span className="gold-text">Palace</span>
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className={`navbar-collapse justify-content-center ${open ? "show" : ""}`} id="navbarContent">
          <button className="close-btn" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            &times;
          </button>

          <button className="close-btn" onClick={() => setOpen(false)}>
  &times;
</button>
          <ul className="navbar-nav gap-lg-4 text-center">

            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/product">Products</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

          </ul>
        </div>

        <div className="d-none d-lg-block">
          {
            isLogin ? (
              <button onClick={handleLogout} className="btn btn-gold">
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="btn btn-gold">
                Login
              </NavLink>
            )
          }
        </div>

      </div>
    </nav>

  
  {open && (
    <div 
      className="nav-overlay" 
      onClick={() => setOpen(false)}
    ></div>
  )}
    
</>
  );
};

export default Header;