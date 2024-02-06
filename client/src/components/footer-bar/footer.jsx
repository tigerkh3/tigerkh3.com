// import createRoot
import React from "react";
// import reactstrap components
import { CardFooter, Container, Row } from "reactstrap"
import linkedin from "../about-me/icons/linkedin.png"

function Footer () {

  return (
    <CardFooter>
      <Container key="footer-parent" className="footer-parent">
        <Row key="footer-intro" className="footer-row footer-intro">
          @2024 tigerkh3.io | Built by Tiger Hong
        </Row>
        <Row key="footer-tech-stack" className="footer-row footer-tech-stack">
          Created With |
          <img key="footer-socials-linkedin" className="footer-socials-img" ></img>
          <img key="footer-socials-gh" className="footer-socials-img" ></img>
          <img key="footer-socials-linkedin" className="footer-socials-img" ></img>
          <img key="footer-socials-gh" className="footer-socials-img" ></img>
          <img key="footer-socials-linkedin" className="footer-socials-img" ></img>
          <img key="footer-socials-gh" className="footer-socials-img" ></img>
        </Row>
        <Row key="footer-socials" className="footer-row footer-socials">
          Socials |
          <img key="footer-socials-linkedin" className="footer-socials-img" src={linkedin}></img>
          <img key="footer-socials-gh" className="footer-socials-img" src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png"></img>
        </Row>
      </Container>
    </CardFooter>
  )
}

export default Footer;