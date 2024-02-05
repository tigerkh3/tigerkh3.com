import React, { useState } from "react";
// import css styles
import "../../dist/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
// import components
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
// Nav Bar Items
import navItems from "./sample/nav-items.js";
import logo from "./sample/logo.png"

// Navigation Bar Component
function NavBar () {

  const [active, setActive] = useState('active')

  return ([
    <Container key="nav-bar-parent" className="nav-bar-parent">
      <Navbar key="nav-bar" className="nav-bar">
        <NavbarBrand key="nav-bar-brand-parent" className="link" href="/">
          <img src={logo} key="nav-bar-brand" className="nav-bar-brand-img"></img>
        </NavbarBrand>
        <Nav key="nav" className="nav">
        {navItems.map( (currentLink, index) => {
            return(
              <NavItem key={`nav-item-${index}`}>
                <NavLink className="link" href={currentLink.href} key={`nav-link-${index}`}> {currentLink.name} </NavLink>
              </NavItem>
            )
          })}
        </Nav>
      </Navbar>
    </Container>
  ])
}

export default NavBar;
