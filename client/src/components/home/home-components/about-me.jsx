import React, { useEffect, useState } from "react";
import axios from "axios";
// css styles and reactstrap components
import "../../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";
import linkedin from "./about-me-home-assets/linkedin.png"

// about-me component
function AboutMeHome () {

  const [introHome, setIntro] = useState("")

  useEffect( () => {
    axios.get(`${process.env.REACT_APP_SERVER}/${process.env.REACT_APP_ABOUTME_EP}`)
    .then((result) => {
      setIntro(result.data.intro_home);
    })
  }, [])

  return ([
    <Container key="about-me-home" className="about-me-home-parent">
      <Row key="about-me-home-row" className="about-me-home-description-row">
      <h1 key="about-me-home-div-heading" className="about-me-home-description-heading"> Hi there! </h1>
        {introHome.split('\n').map((currentParagraph, index) => {
          return (
            <div key={`about-me-home-div-${index}`} className="about-me-home-description">
              <h5 key="about-me-home-div-intro" className="about-me-home-description"> {currentParagraph}</h5>
            </div>

          )
        })}
        <Row key="about-me-home-socials" className="about-me-home-description-row">
          <h5 key="about-me-home-socials-heading" className="about-me-home-description"> If you like what you see and would like to reach out, find me below!</h5>
          <h5 key="about-me-home-socials-links" className="about-me-home-description">
            <img key="footer-socials-linkedin" className="footer-socials-img" src={linkedin}></img>
            <img key="footer-socials-gh" className="footer-socials-img" src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png"></img>
          </h5>
        </Row>
      </Row>
    </Container>
  ])
}

export default AboutMeHome;