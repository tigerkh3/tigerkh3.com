// file path and environment variable depencendies
const path = require("path");
require("dotenv").config({path: path.join(__dirname, "../.env")});

// server dependencies
const express = require("express");
const app = express();
app.use(express.json());

// serve static index.html
app.use(express.static(path.join(__dirname, "../client/src/dist")))

// allow cross origin and localhost
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// api methods
const { getProjects, getReadMe, getAboutMe, postJournalEntry } = require("./database/db-methods/index.js")

//server routes
app.get("/projectData", (req, res) => {

  getProjects(true , (err, result) => {
    if (err) {
      console.log("server error msg", err)
      res.sendStatus(404);
    } else {
      res.send(result.rows);
    }
  })
})

app.get("/about-me-home", (req, res) => {
  getAboutMe(true, (err, result) => {
    if (err) {
      console.log("server error msg", err)
      res.sendStatus(404);
    } else {
      res.send(result.rows[0]);

    }
  })
})

app.get("/readmeData/:id", (req, res) => {
  const id = req.params.id;

  getReadMe(id , (err, result) => {
    if (err) {
      console.log("server error msg", err)
      res.sendStatus(404);
    } else {
      res.send(result.rows[0].read_me);

    }
  })
})

app.post("/journal-entry", (req, res) => {

  // posting our journal entry to our database
  postJournalEntry(req.body, (err, result) => {
    if (err) {
      console.log('server err message', err)
    } else {
      console.log('success');
      res.sendStatus(201);
    }
  })

})


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/src/dist/index.html"))
})







var port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})