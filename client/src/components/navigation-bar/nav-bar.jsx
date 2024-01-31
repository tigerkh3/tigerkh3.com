import React from "react";
// import css styles
import "../../dist/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
// import components
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
// Nav Bar Items
import navItems from "./sample/nav-items.js";

// Navigation Bar Component
function NavBar () {
  return ([
    <Container key="nav-bar-parent" className="nav-bar-parent">
      <Navbar key="nav-bar" className="nav-bar" color="dark">
        <Nav fill key="nav" className="nav">
        {navItems.map( (currentLink, index) => {
            return(
              <NavItem key={`nav-item-${index}`}>
                <NavLink href={currentLink.href} key={`nav-tab-${index}`} className="tabs"> {currentLink.name} </NavLink>
              </NavItem>
            )
          })}
        </Nav>
      </Navbar>
    </Container>
  ])
}

export default NavBar;
