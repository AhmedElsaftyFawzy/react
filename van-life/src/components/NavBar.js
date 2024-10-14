import React from "react"
import { NavLink, Link } from "react-router-dom"
import imageUrl from "../images/avatar-icon.png"

const NavBar = () => {
  function fakeLogOut() {
    localStorage.removeItem("login")
  }
  return (
    <div className="nav">
      <Link to="/">
        <h2>#VAN LIFE</h2>
      </Link>
      <div className="links">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="host"
        >
          Host
        </NavLink>
        <Link to="login" className="login-link">
          <img src={imageUrl} className="login-icon" alt="" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </div>
    </div>
  )
}

export default NavBar
