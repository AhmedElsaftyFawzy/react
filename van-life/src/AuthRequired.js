import React from "react"
import { Outlet, Navigate } from "react-router-dom"

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("login")
  if (!isLoggedIn) {
    return <Navigate to="/login" state={"You Need To Login First"} />
  }
  return <Outlet />
}
