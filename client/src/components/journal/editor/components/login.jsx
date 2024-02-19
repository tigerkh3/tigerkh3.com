import React, { useState, useEffect } from "react";
import axios from "axios";
// import CSS styling and reactstrap components
import "../../../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "reactstrap";
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

function Login (props) {

  const [password, setPassword] = useState("");

  function handleInput (e) {
    e.preventDefault();
    setPassword(e.target.value)
  }

  function enterPW () {
    if (password === process.env.REACT_APP_EDITOR_PW) {
      window.alert("Log in successful");
      props.login(true);
    } else {
      window.alert("Log in failure");
    }
  }

  return (
    <Container key="journal-editor-locked-parent" className="journal-editor-main-parent">
    <p key="journal-editor-locked-p" className="journal-editor-locked-p journal-editor-locked-child"> Enter Password for Editor </p>
    <input
      type="password"
      key="journal-editor-locked-input"
      className="journal-editor-locked-pw-entry journal-editor-locked-child"
      value={password}
      onChange={handleInput}
    >
    </input>
    <Button key="journal-editor-locked-pw-button" className="journal-editor-locked-pw-button journal-editor-locked-child" onClick={ () => {enterPW(password)}}> Submit </Button>
  </Container>
  )
}

export default Login;