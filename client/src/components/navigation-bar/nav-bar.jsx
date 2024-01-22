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
    <Navbar key="nav-bar" className="nav-bar" color="dark">
      <NavbarBrand key="nav-bar-brand" className="nav-bar-brand" href="/">
        tigerkh3.io
      </NavbarBrand>
      <Nav key="nav" className="nav">
        {navItems.map( (currentLink, index) => {
          return(
            <NavItem key={`nav-item-${index}`}>
              <NavLink key={`nav-tab-${index}`} className="tabs"> {currentLink} </NavLink>
            </NavItem>
          )
        })}
      </Nav>
    </Navbar>
  ])
}

export default NavBar;
