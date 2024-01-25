import React from "react";
// import CSS styling and reactstrap components
import "../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";
// sample projects database object
import sampleCard from "./pd-components/sample/pd-card-sample.js";
// project display child component
import ProjectCard from './pd-components/project-card.jsx';

// projects-display component
function ProjectsDisplay (props) {
  return ([
    <Container key={"projects-display-" + props.compType} className={"projects-display-" + props.compType + "-parent"}>
      <Row key={"projects-display-" + props.compType + "-row"} className={`projects-cards-display-${props.compType}`}>
        {sampleCard.map( (currentProj, index) => {
          return(
            <ProjectCard key={`project-card-${props.compType}-${index}`} index={`${index}`} compType={props.compType} project={currentProj}></ProjectCard>
          )
        })}
      </Row>
    </Container>
  ])
}

export default ProjectsDisplay;
