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
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// api methods
const { getProjects, getReadMe } = require("./database/db-methods/index.js")

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

app.get("/readmeData", (req, res) => {
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


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/src/dist/index.html"))
})







var port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})