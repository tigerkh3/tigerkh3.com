// server dependencies
require("dotenv").config();
const path = require('path');
const express = require('express');

const app = express();
app.use(express.json());
// serve static index.html
app.use(express.static(path.join(__dirname, "../client/src/dist")))


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/src/dist/index.html"))
})


var port = process.env.PORT
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})