import React from "react";
// import CSS styling and reactstrap components
import "../../../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
// project display child component
import ProjectCard from './pd-components/project-card.jsx';

// projects-display component
function ProjectsDisplay () {
  return ([
    <Container className="projects-display-parent">
      <ProjectCard></ProjectCard>
    </Container>
  ])
}

export default ProjectsDisplay;
