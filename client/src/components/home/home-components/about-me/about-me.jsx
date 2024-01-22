import React from "react";
// css styles and reactstrap components
import "../../../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";

// import sample text
import sampleAM from "./sample/about-me-sample.js"

// about-me component
function AboutMeHome () {
  return ([
    <Container key="about-me-home" className="about-me-home-parent">
      <Row key="about-me-home-row" className="about-me-home-description">
        {sampleAM.description}
      </Row>
    </Container>
  ])
}

export default AboutMeHome;
