import React from "react";
// import CSS styling and reactstrap components
import "../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";


// projects-display component
function InProgress (props) {
  return (
    <Container key={"In Progress"} className={"InProgress"}>
      <h1 key="in-progress-h1"> Hello! </h1>
      <h2 key="in-progress-h2"> This component is currently a work in progress. Please check back later to see how it turns out!</h2>
    </Container>
  )
}

  export default InProgress;