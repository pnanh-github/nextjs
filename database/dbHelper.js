var sqlite3 = require("sqlite3").verbose();
const DBSOURCE = "database.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(`CREATE TABLE token ( id INTEGER PRIMARY KEY AUTOINCREMENT, token TEXT, type varchar(10),status INTEGER )`, (err) => {
      if (err) {
        // Table already created
      } else {
        console.log("Init DB done");
      }
    });
  }
});

module.exports = db;
