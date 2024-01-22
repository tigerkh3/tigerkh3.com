import React from "react";
// css styles and reactstrap components
import "../../../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";

// import sample text
import sampleAM from "./sample/about-me-sample.js"

// about-me component
function AboutMe () {
  return ([
    <Container key="about-me" className="about-me-parent">
      <Row key="about-me-row" className="about-me-description">
        {sampleAM.description}
      </Row>
    </Container>
  ])
}

export default AboutMe;
