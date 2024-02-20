import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import CSS styling and reactstrap components
import "../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
// sample projects database object

// children={sampleRM[0].projReadMe}

function JournalEntry () {

  const [markdown, setMarkDown] = useState("")
  const [entryData, setEntryData] = useState({})

  const { id } = useParams()

  useEffect( () => {

    axios.get(`${process.env.REACT_APP_SERVER}/${process.env.REACT_APP_JOURNAL_ENTRY_DATA_EP}/${id}`)
    .then ( (result) => {
      console.log('should be our details', result.data);
      setMarkDown(result.data.journal_entry);
      setEntryData(result.data);
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
    <Container key="journal-entry-main-parent" className="journal-entry-main-parent">
      <Row key={`journal-entry-row`} className="journal-entry-row">
        <h2 key={`journal-entry-date-col`} className="journal-entry journal-entry-date">
          {entryData.to_char}
        </h2>
      </Row>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
           h1: ({ node, ...props }) => (
             <h1 id={generateSlug(props.children)} {...props}></h1>
           ),
         }}
         key="journal-entry-main" className="journal-entry-main" children={markdown}></ReactMarkdown>
    </Container>
  )
}

export default JournalEntry;