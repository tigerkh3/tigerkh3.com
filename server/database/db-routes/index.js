const db = require("../index.js")

let getProjects = (data, callback) => {
  db.query(`SELECT * FROM projects`)
}

let getReadMe = (data, callback) => {
  db.query(`SELECT * FROM projects WHERE id=${}`)
}

module.exports.getProjects = getProjects;

module.exports.getReadMe = getReadMe;