import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
  <div className="navbar">
  <div className="brand"> Oud<span>Wale</span></div>

  <div className="nav">
    <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
      Home
    </NavLink>

    <NavLink to="/men" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
      Men
    </NavLink>

    <NavLink to="/women" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
      Women
    </NavLink>

    {/* <NavLink to="/unisex" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
      Unisex
    </NavLink>

    <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
      About
    </NavLink>

    <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
      Contact
    </NavLink>

    <button className="login-btn">Login</button> */}
  </div>
</div>


  )
}

export default Header
