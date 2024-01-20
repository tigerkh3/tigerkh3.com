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
    <Container className="home-parent">
      <NavBar/>
      <Home/>
    </Container>
  ])
}

export default App;
