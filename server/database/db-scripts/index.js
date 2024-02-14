const db = require("../index.js");
var introHome = "I''m Tiger, thanks for checking out my personal space on the vast web. Here you''ll find information on me, my projects, and what I''ve been up to. \nEnjoy your stay!"
var introMain = "Hi there!\nI''m a passionate and highly motivated software engineer who loves building new applications and working with technologies to streamline and enrich the lives of those around me by providing solutions that can be resolved through code as well as my ability to discern and dissect information. \nI enjoy solving problems that I see or hear around me by breaking things down into smaller digestible parts and coming up with multiple different approaches to potentially resolve them which led me to software engineering.\nI''m always up for a chat so feel free to DM me here on LinkedIn or email me at tigerhong186@gmail.com!"

db.query('CREATE TABLE projects (id SERIAL, project_name TEXT, web_link TEXT, github_link TEXT, project_description TEXT, read_me TEXT, image_path TEXT, PRIMARY KEY(id))', (err, res) => {
  if (err) {
    console.log('failed to create table', err)
  } else {
    console.log('table created successfully')
    db.query(`INSERT INTO projects (project_name, web_link, github_link, project_description, read_me, image_path) VALUES ('Road2FantasyChamp', 'http://road2fantasychamp.com', 'https://github.com/tigerkh3/road2fantasychamp', 'ESPN Fantasy Basketball Live Analytics Tool', 'https://raw.githubusercontent.com/tigerkh3/road2fantasychamp/main/README.md', './project-display-assets/road2fantasychamp.png')`, (err, res) => {
      if (err) {
        console.log('failed to insert data', err)
      } else {
        console.log('project 1 inserted')
        db.query(`INSERT INTO projects (project_name, web_link, github_link, project_description, read_me, image_path) VALUES ('My Personal Site', '/', 'https://github.com/tigerkh3/tigerkh3.io', 'My Personal Portfolio Website built from scratch!', 'https://raw.githubusercontent.com/tigerkh3/tigerkh3.com/main/README.md', './project-display-assets/personal-site.png')`, (err, res) => {
          if (err) {
            console.log('failed to insert data', err)
          } else {
            console.log('project 2 inserted')

            db.query('CREATE TABLE aboutme (id SERIAL, intro_home TEXT, intro_main TEXT, PRIMARY KEY(id))', (err, res) => {
              if (err) {
                console.log('about me creation err', err)
              } else {
                db.query(`INSERT INTO aboutme (intro_home, intro_main) VALUES ('${introHome}', '${introMain}')`, (err, res) => {
                  if (err) {
                    console.log('about me insert err', err)
                  } else {
                    console.log('aboutme insert successful')
                  }
                  db.end();
                })
              }
            })
          }
        })
      }
    })
  }
})

