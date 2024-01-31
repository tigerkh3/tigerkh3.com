import React from "react";
// css styles and reactstrap components
import "../../../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";

// import sample text
import sampleAM from "../../../about-me/sample/about-me-sample.js"

// about-me component
function AboutMeHome () {
  return ([
    <Container key="about-me-home" className="about-me-home-parent">
      <Row key="about-me-home-row" className="about-me-home-description">
        {sampleAM.homePage.split('\n').map((currentParagraph, index) => {
          return (
            <h4>{currentParagraph}</h4>
          )
        })}
      </Row>
    </Container>
  ])
}

export default AboutMeHome;
