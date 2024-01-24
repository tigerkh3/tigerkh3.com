import React from "react";
// import CSS styling and reactstrap components
import "../../../dist/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
// import sample
import { Container, Row, Col, Button } from "reactstrap";

// project-display child component is project-card
function ProjectCard (prop) {
  return ([
    <Col xs="12" sm="6" md="4" lg="3" key={`project-card-home-col-${prop.index}`} className={`card-home card-home-${prop.index}`} >
      <Row key={`project-card-home-title-row-${prop.index}`} className="card-title-home-row card-home-row">
        <h6 key={`project-card-home-title-${prop.index}`} className="card-title"> {prop.project.projName} </h6>
      </Row>
      <Row key={`project-card-home-description-row-${prop.index}`} className="card-description-home-row card-home-row">
        <p className="card-home-description"> {prop.project.projDescription} </p>
      </Row>
      <Row key={`project-card-links-home-row-${prop.index}`} className="card-links-home-row card-home-row">
        <Col xs="6" sm="6" key={`card-web-link-home-col-${prop.index}`} className="card-link-home-col-wl">
          <p className="card-link-home-wl" onClick={ ()=> {window.open(prop.project.projWLink)}}> Demo </p>
        </Col>
        <Col xs="6" sm="6" key={`card-github-link-home-col-${prop.index}`} className="card-link-home-col-gh">
          <p className="card-link-home-gh" onClick={ ()=> {window.open(prop.project.projGHLink)}}> GitHub </p>
        </Col>
      </Row>
    </Col>
  ])
}

export default ProjectCard;
