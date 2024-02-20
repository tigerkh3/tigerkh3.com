// import react
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
// import css and styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../../dist/styles.css";
// import sample
import linkedin from "./about-me-assets/linkedin.png"
import resumeicon from "./about-me-assets/resume.png"
// import our pdf
import Resume from "./about-me-assets/Tiger_Hong_Resume.pdf"
// App Child Components


// Overaching App Component
function AboutMe () {

  const [introMain, setIntro] = useState("")

  useEffect( () => {
    axios.get(`${process.env.REACT_APP_SERVER}/${process.env.REACT_APP_ABOUTME_EP}`)
    .then((result) => {
      setIntro(result.data.intro_main);
    })
  }, [])

  return (
    <Container key="about-me-parent" className="about-me-parent">
      <Container key="about-me-intro" className="about-me-intro-parent">
        <h1 key="about-me-header" className="about-me-header header"> About Me </h1>
        <div key="about-me-intro" className="about-me-intro">
          {introMain.split("\n").map( (currentParagraph, index) => {
            return (
              <p key={`about-me-intro-p-${index}`} className="about-me-intro-p"> {currentParagraph} </p>
            )
          })}
          <div key="about-me-socials-parent" className="about-me-socials-parent">
            <h2 key="about-me-socials-intro" className="about-me-socials-intro"> Check out my Socials Below! </h2>
            <div key="about-me-socials-links" className="about-me-socials-links">
              <img key="LI-img" className="about-me-socials-img li-img" src={linkedin} onClick={ () => {window.open("https://linkedin.com/in/tigerkh3")}}></img>
              <img key="GH-img" className="about-me-socials-img gh-img" alt="GitHub" src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png" onClick={ () => {window.open("https://github.com/tigerkh3")}}/>
              <br></br>
            </div>
          </div>
        </div>
      </Container>
      <Container key="about-me-qualifications" className="about-me-qualifications-parent">
        <h2 key="about-me-qualifications-header" className="header"> My Qualifications</h2>
        <div className="about-me-qualifications">
          <img key="about-me-resume" className="about-me-resume-img" src={resumeicon} onClick={ () => { window.open(Resume)}}></img>
        </div>
      </Container>
      <Container key="about-me-stack" className="about-me-stack-parent">
        <h2 className="header"> My Tech Stack </h2>
        <div key="about-me-stack-parent" className="about-me-stack">
          <img key="JS-img" className="about-me-stack-img" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img key="React-img" className="about-me-stack-img" alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img key="Node-img" className="about-me-stack-img" alt="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <img key="Express-img" className="about-me-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
          <img key="CSS-img" className="about-me-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
          <img key="Reactstrap-img" className="about-me-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
          <img key="AWS-img" className="about-me-stack-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"/>
          <img key="Mongo-img" className="about-me-stack-img" alt="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <img key="Postgres-img" className="about-me-stack-img" alt="PostgreSQL" src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"/>
          <img key="SQL-img" className="about-me-stack-img" alt="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          <img key="GH-img" className="about-me-stack-img gh-img" alt="GitHub" src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png" />
          <img key="Term-img" className="about-me-stack-img" alt="Terminal" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3205154/terminal-icon-md.png" />
        </div>
      </Container>
    </Container>
  )
}

export default AboutMe;