// import createRoot
import React from "react";
// import reactstrap components
import { CardFooter, Container, Row } from "reactstrap"

function Footer () {

  return (
    <CardFooter>
      <Container key="footer-parent" className="footer-parent">
        <Row key="footer-intro" className="footer-row footer-intro">
          @2024 tigerkh3.io | Built by Tiger Hong
        </Row>
        <Row key="footer-tech-stack" className="footer-row footer-tech-stack">
            Created With |
            <img key="footer-tech-stack-js" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"></img>
            <img key="footer-tech-stack-express" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" ></img>
            <img key="footer-tech-stack-react" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></img>
            <img key="footer-tech-stack-node" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"></img>
            <img key="footer-tech-stack-css" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"></img>
            <img key="footer-tech-stack-reactstrap" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"></img>
            <img key="footer-tech-stack-aws" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"></img>
        </Row>
      </Container>
    </CardFooter>
  )
}

export default Footer;