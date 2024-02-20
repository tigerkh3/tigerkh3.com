import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import CSS styling and reactstrap components
import "../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
// sample projects database object

// children={sampleRM[0].projReadMe}

function ProjectDetails () {

  const [markdown, setMarkDown] = useState("")

  const { id } = useParams()

  useEffect( () => {
    axios.get(`${process.env.REACT_APP_SERVER}/${process.env.REACT_APP_README_EP}/${id}`)
    .then ( (result) => {
      console.log('should be our details', result.data)
      fetch(`${result.data}`)
      .then((result) => {
        result.text()
        .then((text) => {
          setMarkDown(text)
        })
      })
    })
  }, [id])

  const generateSlug = (string) => {
    let str = string.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();
    str = str
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    return str;
  }

  return (
    <Container key="project-details-main-parent" className="project-details-main-parent">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
           h1: ({ node, ...props }) => (
             <h1 id={generateSlug(props.children)} {...props}></h1>
           ),
         }}
         key="project-details-main" className="project-details-main" children={markdown}></ReactMarkdown>
    </Container>
  )
}

export default ProjectDetails;