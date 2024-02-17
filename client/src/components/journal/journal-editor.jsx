import React, { useState, useEffect } from "react";
import axios from "axios";
// import CSS styling and reactstrap components
import "../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "reactstrap";
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'


function JournalEditor () {

  const [entry, setEntry] = useState("**Hello world!!!**");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLogin] = useState(false);

  function postEntry (e) {
    e.preventDefault();

    var options = {
      url: 'http://localhost:6001/journal-entry',
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
  }

  function handleInput (e) {
    e.preventDefault();
    if (e.target.className === "journal-editor-locked-pw-entry") {
      setPassword(e.target.value)
    } else {
      setTitle(e.target.value);
    }

  }

  if (loggedIn) {
    return (
      <Container key="journal-editor-unlocked-parent" className="journal-editor-main-parent">
          <input
          value={title}
          onChange={handleInput}
          >
          </input>
        <div className="container">
          <MDEditor
            value={entry}
            onChange={setEntry}
          />
        </div>
        <Button onClick={postEntry}> Post Entry </Button>
      </Container>
    )
  } else {
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
        <Button key="journal-editor-locked-pw-button" className="journal-editor-locked-pw-button journal-editor-locked-child"> Submit </Button>
      </Container>
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