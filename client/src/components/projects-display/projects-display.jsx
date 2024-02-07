import React from "react";
// import CSS styling and reactstrap components
import "../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";
// sample projects database object
import sampleCards from "./pd-components/sample/pd-card-sample.js";
// project display child component
import ProjectCard from './pd-components/project-card.jsx';

// projects-display component
function ProjectsDisplay (props) {

  return (
    <Container key={"projects-display-parent"} className={"projects-display-parent"}>
    <div key={"projects-display-heading-row"} className={`projects-display-heading-row`}>
      <h1 key={"projects-display-heading"} className={`projects-display-heading`}> Past Projects </h1>
    </div>
    <Row key={"projects-display-row"} className={`projects-cards-display`}>
      {sampleCards.map( (currentProj, index) => {
        return(
          <ProjectCard key={`project-card-${index}`} index={`${index}`} project={currentProj}></ProjectCard>
        )
      })}
    </Row>
  </Container>
  )
}

export default ProjectsDisplay;
