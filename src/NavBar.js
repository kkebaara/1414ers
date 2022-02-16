// imported a bunch of stuff, probably going to 
// delete some of this later
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom"

// added basic styling to a variable for Navlink
const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

// this is where I added the NavLink code
// this is where the blue boxes are coming 
// from
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