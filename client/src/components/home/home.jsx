import React from "react";
// css styles and reactstrap components
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../dist/styles.css";
// home page child components
import AboutMe from "./home-components/about-me/about-me.jsx";
import ProjectsDisplay from "./home-components/projects-display/projects-display.jsx";

// home page parent component
function Home () {
  return ([
    <AboutMe/>,
    <ProjectsDisplay/>
  ])
}

export default Home;