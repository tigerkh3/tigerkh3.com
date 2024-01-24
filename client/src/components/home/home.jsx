import React from "react";
// css styles and reactstrap components
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../dist/styles.css";
// home page child components
import AboutMeHome from "./home-components/about-me/about-me.jsx";
import ProjectsDisplay from "../projects-display/projects-display.jsx";

// home page parent component
function Home () {
  return (
    <Container key="home-parent" className="home-parent">
      <AboutMeHome key="about-me-home"/>,
      <ProjectsDisplay key="projects-display"/>
    </Container>
  )
}

export default Home;