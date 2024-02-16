// import createRoot
import React from "react";
// import reactstrap components
import { CardFooter, Container, Row, Col } from "reactstrap"

function Footer () {

  return (
    <CardFooter>
      <Container key="footer-parent" className="footer-parent">
        <Row>
          <Col >
            <div key="footer-intro" className="footer-row footer-intro">
              tigerkh3.io | Built by Tiger Hong
            </div>
          </Col>
          <Col xs="7">
            <div key="footer-tech-stack" className="footer-row footer-tech-stack">
              Built Using |
              <img key="footer-tech-stack-js" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <img key="footer-tech-stack-react" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <img key="footer-tech-stack-node" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <img key="footer-tech-stack-express" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"  />
              <img key="footer-tech-stack-css" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              <img key="footer-tech-stack-reactstrap" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
              <img key="footer-tech-stack-aws" className="footer-tech-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
            </div>
          </Col>
        </Row>
      </Container>
    </CardFooter>
  )
}

export default Footer;