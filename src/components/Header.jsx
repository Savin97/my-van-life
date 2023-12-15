import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";



export default function Header() {
  const navigate = useNavigate()
  function logOut(){
        localStorage.removeItem("loggedin")
        navigate("/", {replace:true})
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
              
              {!localStorage["loggedin"] 
               ? <NavLink to = "/login"
              >Log In
              </NavLink>
              : <NavLink onClick={logOut} to="/" >{`Log Out`}</NavLink>}
              

              
            </nav>
        </header>
  )
}