import React from "react";
// import CSS styling and reactstrap components
import "../../../dist/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
// import sample
import { Container, Row, Col, Button } from "reactstrap";


// project-display child component is project-card
function ProjectCard (props) {

  return ([
    <Col xs="12" sm="6" md={props.med} lg={props.large} key={`project-card-${props.compType}-col-${props.index}`} className={`card-col-${props.compType} card-col-${props.compType}-${props.index}`} >
      <div key={`project-card-${props.compType}-${props.index}`} className={`card-${props.compType} card-${props.compType}-${props.index}`}>
        <Row key={`project-card-${props.compType}-title-row-${props.index}`} className={`card-title-${props.compType}-row card-${props.compType}-row`}>
          <h6 key={`project-card-${props.compType}-title-${props.index}`} className={`card-title-${props.compType}`}> {props.project.projName} </h6>
        </Row>
        <Row key={`project-card-${props.compType}-description-row-${props.index}`} className={`card-description-${props.compType}-row card-${props.compType}-row`}>
          <p className={`card-${props.compType}-description`}> {props.project.projDescription} </p>
        </Row>
        <Row key={`project-card-links-${props.compType}-row-${props.index}`} className={`card-links-${props.compType}-row card-${props.compType}-row`}>
          <Col xs="4" sm="6" md="6" lg="4" key={`card-details-link-${props.compType}-col-${props.index}`} className={`card-link-${props.compType}-col-details`}>
            <p className={`card-link-${props.compType}-details link`} onClick={ ()=> {location.href=`/project-details/${props.project.id}`}}> Details </p>
          </Col>
          <Col xs="4" sm="6" md="6" lg="4" key={`card-web-link-${props.compType}-col-${props.index}`} className={`card-link-${props.compType}-col-wl`}>
            <p className={`card-link-${props.compType}-wl link`} onClick={ ()=> {window.open(props.project.projWLink)}}> Demo </p>
          </Col>
          <Col xs="4" sm="6" md="6" lg="4" key={`card-github-link-${props.compType}-col-${props.index}`} className={`card-link-${props.compType}-col-gh`}>
            <p className={`card-link-${props.compType}-gh link`} onClick={ ()=> {window.open(props.project.projGHLink)}}> GitHub </p>
          </Col>
        </Row>
      </div>
    </Col>
  ])
}

export default ProjectCard;
