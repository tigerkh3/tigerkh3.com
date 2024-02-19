import React, { useState, useEffect } from "react";
import axios from "axios";
// import CSS styling and reactstrap components
import "../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "reactstrap";
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'


function Journal () {

  useEffect( () => {

  }, [])

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
    // <Container key="project-details-main-parent" className="project-details-main-parent">
    //   <ReactMarkdown
    //     remarkPlugins={[remarkGfm]}
    //     components={{
    //        h1: ({ node, ...props }) => (
    //          <h1 id={generateSlug(props.children)} {...props}></h1>
    //        ),
    //      }}
    //      key="project-details-main" className="project-details-main" children={markdown}></ReactMarkdown>
    // </Container>
    // editor
    <div> hi </div>
  )
}

export default Journal;