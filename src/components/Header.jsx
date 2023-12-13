import React from "react";
import {Link, NavLink, Navigate, useNavigate} from "react-router-dom";

export default function Header() {

  function logout(){
      //const navigate = useNavigate()
      localStorage.removeItem("loggedin")
  }

  return (
        <header>
            <Link to = "/">#VANLIFE</Link>
            <nav>
              <NavLink to = "/host"
              >
                Host
              </NavLink>
              <NavLink to = "/about"
              >
                About
              </NavLink>
              <NavLink to = "/vans"
              >
                Vans
              </NavLink>
              <NavLink to = "/login"
              >
              </NavLink>
              <button onClick={logout}>Log Out</button>
            </nav>
        </header>
  )
}