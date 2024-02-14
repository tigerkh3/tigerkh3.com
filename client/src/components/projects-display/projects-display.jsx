import React, { useEffect, useState } from "react";
import axios from "axios";
// import CSS styling and reactstrap components
import "../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";
// project display child component
import ProjectCard from './pd-components/project-card.jsx';

// projects-display component
function ProjectsDisplay (props) {

  const [projectData, setProjectData] = useState([])

  // make a request to our server and then our database
  useEffect( () => {
    // call to our server

    axios.get("http://localhost:6001/projectData")
    .then ( (result) => {
      console.log(result.data);
      setProjectData(result.data);
    })
  }, [false])

  return (
    <Container key={"projects-display-parent"} className={"projects-display-parent"}>
    <div key={"projects-display-heading-row"} className={`projects-display-heading-row`}>
      <h1 key={"projects-display-heading"} className={`projects-display-heading`}> Past Projects </h1>
    </div>
    <Row key={"projects-display-row"} className={`projects-cards-display`}>
      {projectData.map( (currentProj, index) => {
        return(
          <ProjectCard key={`project-card-${index}`} index={`${index}`} project={projectData[index]}></ProjectCard>
        )
      })}
    </Row>
  </Container>
  )
}

export default ProjectsDisplay;
