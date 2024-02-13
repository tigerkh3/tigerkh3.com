// database configuration
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../../.env')});

const Pool = require('pg').Pool

let dbString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`;

let pool = new Pool({ connectionString: dbString });

console.log(dbString);

module.exports = pool;