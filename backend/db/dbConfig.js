const pgPromise = require("pg-promise")();
require("dotenv").config();

const db = pgPromise({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
});
//Troubleshooting - can run independently / in terminal to test database directly
// db.any("SELECT * FROM places;").then((data)=>console.log(data))
// same folder as .env in this case /backend
// node ./db/dbConfig.js 



module.exports = db;