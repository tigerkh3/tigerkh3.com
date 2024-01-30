import React, { useState, useEffect } from "react";
// import CSS styling and reactstrap components
import "../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";
import ReactMarkdown from "react-markdown";
// sample projects database object
import sampleRM from "./sample/project-details-sample.js"

// children={sampleRM[0].projReadMe}

function ProjectDetails () {

  const [markdown, setMarkDown] = useState("")

  useEffect( () => {

    // -- add functionality --
    // start by finding out which project id we're working with
    // after we find our id we make a call to the database to find
    // the associated project
    // then we access our github link through the project
    // then run below
    fetch(`${sampleRM[0].projReadMe}`)
    .then((result) => {
      result.text()
      .then((text) => {
        setMarkDown(text)
      })
    })
  })

  return (
    <Container key="project-details-main-parent" className="project-details-main-parent">
      <ReactMarkdown key="project-details-main" className="project-details-main" children={markdown}></ReactMarkdown>
    </Container>
  )
}

export default ProjectDetails;