import React from "react";
// import CSS styling and reactstrap components
import "../../../../../dist/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
// import sample
import { Container, Row, Col, Button } from "reactstrap";

// project-display child component is project-card
function ProjectCard (prop) {
  return ([
    <Col xs="12" sm="6" md="4" lg="3" key={`project-card-col-${prop.index}`} className={`card card-${prop.index}`} >
      <Row key={`project-card-title-row-${prop.index}`} className="card-title-row card-row">
        <h6 key={`project-card-title-${prop.index}`} className="card-title"> {prop.project.projName} </h6>
      </Row>
      <Row key={`project-card-description-row-${prop.index}`} className="card-description-row card-row">
        <p className="card-description"> {prop.project.projDescription} </p>
      </Row>
      <Row key={`project-card-links-row-${prop.index}`} className="card-links-row card-row">
        <Col xs="6" sm="6" key={`card-web-link-col-${prop.index}`} className="card-link-col-wl">
          <p className="card-link-wl" onClick={ ()=> {window.open(prop.project.projWLink)}}> Demo </p>
        </Col>
        <Col xs="6" sm="6" key={`card-github-link-col-${prop.index}`} className="card-link-col-gh">
          <p className="card-link-gh" onClick={ ()=> {window.open(prop.project.projGHLink)}}> GitHub </p>
        </Col>
      </Row>
    </Col>
  ])
}

export default ProjectCard;
