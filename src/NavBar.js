import React from "react"
<<<<<<< HEAD
import { NavLink } from "react-router-dom"
 
=======


>>>>>>> 4da7211cf3c4a27b115e9b2e494dc0c5651faa9e
const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  function NavBar() {
      return (
        <div>
            <NavLink
                to = "/"
                exact
                style = {linkStyles}
                activeStyle = {{
                    background: "darkblue",
                }}
            >
                Home Page
            </NavLink>
            <NavLink   
                to = "/mountainlist"
                exact
                style = {linkStyles}
                activeStyle = {{
                    background: "darkblue",
                }}
            >
            See a list of 14ers with some cool info
            </NavLink>
            <NavLink
                to = "/info"
                exact
                style = {linkStyles}
                activeStyle = {{ 
                    background: "darkblue"
                }}
            >
                What is a 14er?
            </NavLink>
            <NavLink
                to = "/review"
                exact
                style = {linkStyles}
                activeStyle = {{ 
                    background: "darkblue"
                }}
            >
                Reviews
            </NavLink>
        </div>
      )
  }

  export default NavBar;