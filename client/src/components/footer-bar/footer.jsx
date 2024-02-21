// import createRoot
import React from "react";
// import reactstrap components
import { CardFooter, Container, Row, Col } from "reactstrap"

function Footer () {

  return (
    <CardFooter>
      <Container key="footer-parent" className="footer-parent">
        <Row>
            <div key="footer-intro" className="footer-row footer-intro">
              tigerkh3.com | Built by Tiger Hong
            </div>
        </Row>
      </Container>
    </CardFooter>
  )
}

export default Footer;