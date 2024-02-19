import React, { useState, useEffect } from "react";
import axios from "axios";
// import CSS styling and reactstrap components
import "../../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "reactstrap";
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import Login from "./components/login.jsx";
import Editor from "./components/editor.jsx";


function JournalEditor () {


  const [loggedIn, setLogin] = useState(false);

  if (loggedIn) {
    return (
      <Editor />

    )
  } else {
    return (
      <Login login={setLogin}/>
    )
  }
}

export default JournalEditor;

/*

## Test Entry #1

I want to know if this data is able to be send to my backend server and store the information into my database.

I want to test with 's '' and all the different symbols and such #$%#()!@*%!) .

She's she she's he's him's tim's.

And images like below:

![image](https://github.com/tigerkh3/road2fantasychamp/assets/85322535/4322e292-6f45-4c09-a882-10189442fca6)

*/