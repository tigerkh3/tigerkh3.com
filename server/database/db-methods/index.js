const db = require("../index.js")

let getProjects = (data, callback) => {
  db.query(`SELECT * FROM projects`, (err, res) => {
    if (err) {
      console.log("db error message, get projects", err)
      callback(err, null);
    } else {
      callback(null, res);
    }
  })
}

let getReadMe = (id, callback) => {
  db.query(`SELECT read_me FROM projects WHERE id=${id}`, (err, res) => {
    if (err) {
      console.log("db error message, readme", err)
      callback(err, null);
    } else {
      callback(null, res);
    }
  })
}

let getAboutMe = (data, callback) => {
  db.query(`SELECT * FROM aboutme`, (err, res) => {
    if (err) {
      console.log("db error message, get aboutme", err)
      callback(err, null);
    } else {
      callback(null, res);
    }
  })
}

let postJournalEntry = (data, callback) => {
  // console.log(data.title)
  // console.log(data.entry)
  db.query(`INSERT INTO journal (entry_title, journal_entry) VALUES ($$${data.title}$$, $$${data.entry}$$)`, (err, res) => {
    if (err) {
      console.log("db error message, post journal entry", err)
      callback(err, null);
    } else {
      callback(null, res);
    }
  })
}

module.exports.getProjects = getProjects;

module.exports.getReadMe = getReadMe;

module.exports.getAboutMe = getAboutMe;

module.exports.postJournalEntry = postJournalEntry;