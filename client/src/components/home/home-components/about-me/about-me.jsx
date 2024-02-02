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
      <Row key="about-me-home-row" className="about-me-home-description-row">
      <h2 key="about-me-home-div-heading" className="about-me-home-description-heading"> Hello there! I'm Tiger (and yes that's my real name), </h2>
        {sampleAM.homePage.split('\n').map((currentParagraph, index) => {
          return (
            <div key="about-me-home-div" className="about-me-home-description">
              <h5 key="about-me-home-div-intro" className="about-me-home-description"> {currentParagraph}</h5>
            </div>
          )
        })}
      </Row>
    </Container>
  ])
}

export default AboutMeHome;
