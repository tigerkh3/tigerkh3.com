import React from "react";
// import CSS styling and reactstrap components
import "../../../dist/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
// import sample
import { Container, Row, Col, Button } from "reactstrap";


// project-display child component is project-card
function ProjectCard (props) {

  return ([
    <Col sm="6" key={`project-card-col-${props.index}`} className={`card-col card-col-${props.index}`} >
      <div key={`project-card-${props.index}`} className={`card card-${props.index}`}>
        <Row key={`project-card-title-row-${props.index}`} className={`card-title-row card-row`}>
          <h5 key={`project-card-title-${props.index}`} className={`card-title`}> {props.project.projName} </h5>
        </Row>
        <Row key={`project-card-description-row-${props.index}`} className={`card-description-row card-row`}>
          <p className={`card-description`}> {props.project.projDescription} </p>
        </Row>
        <Row key={`project-card-links-row-${props.index}`} className={`card-links-row card-row`}>
          <Col key={`card-details-link-col-${props.index}`} className={`card-link-col`}>
            <p className={`card-link-details link`} onClick={ ()=> {location.href=`/project-details/${props.project.id}`}}> Details </p>
          </Col>
          <Col key={`card-web-link-col-${props.index}`} className={`card-link-col`}>
            <p className={`card-link-wl link`} onClick={ ()=> {window.open(props.project.projWLink)}}> Demo </p>
          </Col>
          <Col key={`card-github-link-col-${props.index}`} className={`card-link-col`}>
            <p className={`card-link-gh link`} onClick={ ()=> {window.open(props.project.projGHLink)}}> Source </p>
          </Col>
        </Row>
      </div>
    </Col>
  ])
}

export default ProjectCard;
