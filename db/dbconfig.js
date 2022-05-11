const pgp = require('pg-promise')(); //npm install pg-promise
require("dotenv").config();
const db_Url = process.env.DB_URL; // set this variable in .env
const cn = {
    connectionString: 'https://my-baseball-teams.herokuapp.com',
    allowExitOnIdle: true,
    max: 30
}
const db = pgp(cn);

module.exports = db; 