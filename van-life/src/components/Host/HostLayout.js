import React from "react"
import { NavLink, Outlet } from "react-router-dom"

const HostLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: "underline",
  }

  return (
    <div>
      <nav className="host-nav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="."
        >
          DashBoard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default HostLayout
