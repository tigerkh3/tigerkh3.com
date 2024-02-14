const db = require("../index.js");

db.query('CREATE TABLE projects (id SERIAL, project_name TEXT, web_link TEXT, github_link TEXT, project_description TEXT, read_me TEXT,  PRIMARY KEY(id))', (err, res) => {
  if (err) {
    console.log('failed to create table', err)
  } else {
    console.log('table created successfully')
    db.query(`INSERT INTO projects (project_name, web_link, github_link, project_description, read_me) VALUES ('Road2FantasyChamp', 'http://road2fantasychamp.com', 'https://github.com/tigerkh3/road2fantasychamp', 'ESPN Fantasy Basketball Live Analytics Tool', 'https://raw.githubusercontent.com/tigerkh3/road2fantasychamp/main/README.md')`, (err, res) => {
      if (err) {
        console.log('failed to insert data', err)
      } else {
        console.log('project 1 inserted')
        db.query(`INSERT INTO projects (project_name, web_link, github_link, project_description, read_me) VALUES ('My Personal Page', '/', 'https://github.com/tigerkh3/tigerkh3.io', 'My Personal Portfolio Website built from scratch!', 'https://raw.githubusercontent.com/tigerkh3/tigerkh.com/main/README.md')`, (err, res) => {
          if (err) {
            console.log('failed to insert data', err)
          } else {
            console.log('project 2 inserted')
            db.end();
          }
        })
      }
    })
  }
})

