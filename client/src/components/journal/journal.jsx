import React, { useState, useEffect } from "react";
import axios from "axios";
// import CSS styling and reactstrap components
import "../../dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "reactstrap";
import MDEditor from '@uiw/react-md-editor';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'


function Journal () {

  const [journalEntries, setEntries] = useState([])

  useEffect( () => {
    axios.get(`${process.env.REACT_APP_SERVER}/${process.env.REACT_APP_JOURNAL_ENTRIES_EP}`)
    .then ( (result) => {
      console.log(result.data);
      setEntries(result.data);
    })
  }, [])

  return (
    <Container key="journal-entries-parent" className="journal-entries-parent">
      <Row key="journal-entries-heading-row" className="journal-entries-heading-row">
        <Col key="journal-entries-heading-title-col" className="journal-entries-heading-col">
          <h2 key="journal-entries-heading-title" className="journal-entries-heading">
            Entry Title
          </h2>
        </Col>
        <Col key="journal-entries-heading-date-col" className="journal-entries-heading-col">
          <h2 key="journal-entries-heading-date" className="journal-entries-heading journal-entries-heading-date">
            Entry Date
          </h2>
        </Col>
      </Row>
      {journalEntries.map( (currEntry, index) => {
        return (
          <Row key={`journal-entries-row-${index}`} className="journal-entries-row" onClick={ (e) => {location.href=`journal-entry/${currEntry.id}`}}>
            <Col key={`journal-entries-title-col-${index}`} className="journal-entries">
              {currEntry.entry_title}
            </Col>
            <Col key={`journal-entries-date-col-${index}`} className="journal-entries journal-entries-date">
              {currEntry.to_char}
            </Col>
          </Row>
        )
      })}
    </Container>
  )
}

export default Journal;

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