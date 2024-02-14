import React from "react";
import { Link } from "react-router-dom";
// import CSS styling and reactstrap components
import "../../../dist/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "reactstrap";
import r2fc from "./project-display-assets/road2fantasychamp.com.png"


// project-display child component is project-card
function ProjectCard (props) {

  return ([
    <Col xs="12" key={`project-card-col-${props.index}`} className={`card-col card-col-${props.index}`} >
      <Container key="project-card-preview-div" className="project-card-preview-div">
        <img key="project-card-preview-img" src={r2fc} className="project-card-preview">
        </img>
        <Container key={`project-card-overlay-${props.index}`} className={`card-overlay card-overlay-${props.index}`}>
          <Row key={`project-card-overlay-title-row-${props.index}`} className={`card-overlay-title-row card-overlay-row`}>
            <h5 key={`project-card-overlay-title-${props.index}`} className={`card-overlay-title`}> {props.project.project_name} </h5>
          </Row>
          <Row key={`project-card-overlay-description-row-${props.index}`} className={`card-overlay-description-row card-overlay-row`}>
            <p className={`card-overlay-description`}> {props.project.project_description} </p>
          </Row>
          <Row key={`project-card-overlay-links-row-${props.index}`} className={`card-overlay-links-row card-overlay-row`}>
            <Col key={`card-overlay-details-link-col-${props.index}`} className={`card-overlay-link-col`}>
              <p className={`card-overlay-link-details link`} onClick={ ()=> {location.href=`/project-details/${props.project.id}`}}> Details </p>
            </Col>
            <Col key={`card-overlay-web-link-col-${props.index}`} className={`card-overlay-link-col`}>
              <p className={`card-overlay-link-wl link`} onClick={ ()=> {window.open(props.project.web_link)}}> Demo </p>
            </Col>
            <Col key={`card-overlay-github-link-col-${props.index}`} className={`card-overlay-link-col`}>
              <p className={`card-overlay-link-gh link`} onClick={ ()=> {window.open(props.project.github_link)}}> Source </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Col>
  ])
}

export default ProjectCard;
