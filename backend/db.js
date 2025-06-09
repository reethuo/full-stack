const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",  // or "mysql" if using Docker
  user: "root",
  password: "password",
  database: "testdb"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

module.exports = connection;
