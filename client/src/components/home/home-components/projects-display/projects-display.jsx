import React from "react";
// import CSS styling and reactstrap components
import "../../../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";
// sample projects database object
import sampleCard from "./pd-components/sample/pd-card-sample.js";
// project display child component
import ProjectCard from './pd-components/project-card.jsx';

// projects-display component
function ProjectsDisplay () {
  return ([
    <Container key="projects-display-home" className="projects-display-home-parent">
      <Row key="projects-display-home-row" className="projects-cards-display-home">
        {sampleCard.map( (currentProj, index) => {
          return(
            <ProjectCard key={`project-card-${index}`} index={`${index}`} project={currentProj}></ProjectCard>
          )
        })}
      </Row>
    </Container>
  ])
}

export default ProjectsDisplay;
