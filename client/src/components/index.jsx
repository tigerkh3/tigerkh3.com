// import react
import React from "react";
import { Container } from "reactstrap";
// import css and styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../dist/styles.css";
// App Child Components
import Home from "./home/home.jsx";
import NavBar from "./navigation-bar/nav-bar.jsx";


// Overaching App Component
function App () {
  return ([
    <Container key="home-parent" className="home-parent">
      <NavBar key="NavBar"/>
      <Home key="Home"/>
    </Container>
  ])
}

export default App;
