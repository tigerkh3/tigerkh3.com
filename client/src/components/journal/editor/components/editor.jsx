import React, { useState, useEffect } from "react";
import axios from "axios";
// import CSS styling and reactstrap components
import "../../../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "reactstrap";
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'


function Editor (props) {

  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("**Hello world!!!**");

  function postEntry (e) {
    e.preventDefault();
    var options = {
      url: `${process.env.REACT_APP_SERVER}/${process.env.REACT_APP_JOURNAL_POST_EP}`,
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        title: title,
        entry: entry
      },
    }
    axios.default.request(options)
    .then( (result) => {
      if (result.status === 201) {
        window.alert("Entry Success");
      } else {
        window.alert("Entry Failed");
      }
    })
  }

  function handleInput (e) {
    e.preventDefault();
    setTitle(e.target.value);
  }



  return (
    <Container key="journal-editor-unlocked-parent" className="journal-editor-main-parent">
      <input
        key="journal-editor-title-input"
        className="journal-editor-title"
        value={title}
        onChange={handleInput}
        >
      </input>
      <MDEditor
          value={entry}
          onChange={setEntry}
      />
      <Button onClick={postEntry}> Post Entry </Button>
    </Container>
  )
}

export default Editor;