// import react
import React from "react";
import { Container } from "reactstrap";
// import css and styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../dist/styles.css";
// import sample
import sampleAM from "./sample/about-me-sample.js"
// App Child Components


// Overaching App Component
function AboutMe () {
  return (
    <Container key="about-me-parent" className="about-me-parent">
      <Container key="about-me-intro" className="about-me-intro-parent">
        <h1 key="about-me-header" className="about-me-header header"> About Me </h1>
        <div key="about-me-intro" className="about-me-intro">
          {sampleAM.intro.split("\n").map( (currentParagraph, index) => {
            return (
              <p key={`about-me-intro-p-${index}`} className="about-me-intro-p"> {currentParagraph} </p>
            )
          })}
          <div key="about-me-socials" className="about-me-socials">
          <p key="about-me-socials-intro" className="about-me-socials-intro"> Check out my Socials Below! </p>
            <br></br>
            <ul key="about-me-socials-list" className="about-me-socials-list list">
              <li key="about-me-LinkedIn" className="about-me-LinkedIn li"> LinkedIn</li>
              <li key="about-me-GitHub" className="about-me-GitHub li"> GitHub </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container key="about-me-stack" className="about-me-stack">
        <h2 className="header"> Tech Stack </h2>
      </Container>
      <Container key="about-me-qualifications" className="about-me-qualifications-parent">
        <h2 key="about-me-qualifications-header" className="header"> My Qualifications</h2>
        <ul key="about-me-qualifications" className="about-me-qualifications list">
          <li key="about-me-resume" className="about-me-resume li"> Resume </li>
        </ul>
      </Container>
    </Container>
  )
}

export default AboutMe;