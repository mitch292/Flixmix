const mysql = require("mysql");
// const config = require("../../config/config.js");
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: '3306'
};


const pool = mysql.createPool(dbConfig);

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) console.log(error);
  console.log('The solution is: ', results[0].solution);
});


exports.pool = pool;


