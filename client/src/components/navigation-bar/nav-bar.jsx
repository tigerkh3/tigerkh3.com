import React from "react";
// import css styles
import "../../dist/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
// import components
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
// Nav Bar Items
import navItems from "./sample/nav-items.js";

// Navigation Bar Component
function NavBar () {
  return ([
    <Navbar className="nav-bar" color="dark">
      <NavbarBrand className="nav-bar-brand home-ref" href="/">
        tigerkh3.io
      </NavbarBrand>
      <Nav className="nav">
        {navItems.map( (currentLink, index) => {
          return(
            <NavItem>
              <NavLink className="tabs"> {currentLink} </NavLink>
            </NavItem>
          )
        })}
      </Nav>
    </Navbar>
  ])
}

export default NavBar;
