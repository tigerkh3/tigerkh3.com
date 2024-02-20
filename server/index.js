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
const { getProjects, getReadMe, getAboutMe, postJournalEntry, getJournalEntries, getJournalEntryData } = require("./database/db-methods/index.js")


// Routes

// projects display home/main data route
app.get(`/${process.env.REACT_APP_PROJECTS_EP}`, (req, res) => {

  getProjects(true , (err, result) => {
    if (err) {
      console.log("server error msg", err)
      res.sendStatus(404);
    } else {
      res.send(result.rows);
    }
  })
})

// about me home/main data route
app.get(`/${process.env.REACT_APP_ABOUTME_EP}`, (req, res) => {
  getAboutMe(true, (err, result) => {
    if (err) {
      console.log("server error msg", err)
      res.sendStatus(404);
    } else {
      res.send(result.rows[0]);
    }
  })
})

// project details readme route
app.get(`/${process.env.REACT_APP_README_EP}/:id`, (req, res) => {
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

app.get(`/${process.env.REACT_APP_JOURNAL_ENTRIES_EP}`, (req, res) => {
  getJournalEntries(true, (err, result) => {
    if (err) {
      console.log("server error msg", err)
      res.sendStatus(404);
    } else {
      res.send(result.rows);
    }
  })

})

app.get(`/${process.env.REACT_APP_JOURNAL_ENTRY_DATA_EP}/:id`, (req, res) => {
  const id = req.params.id;
  getJournalEntryData(id, (err, result) => {
    if (err) {
      console.log("server error msg", err)
      res.sendStatus(404);
    } else {
      res.send(result.rows[0]);
    }
  })
})


// journal entry route
app.post(`/${process.env.REACT_APP_JOURNAL_POST_EP}`, (req, res) => {
  postJournalEntry(req.body, (err, result) => {
    if (err) {
      console.log('server err message', err)
    } else {
      console.log('success');
      res.sendStatus(201);
    }
  })
})

// client sided routing serve files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/src/dist/index.html"))
})


var port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})