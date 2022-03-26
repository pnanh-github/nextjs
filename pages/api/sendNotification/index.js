var db = require("../../../database/dbHelper");
const axios = require("axios");

const sendNotification = (req, res, next) => {
  var sql = "select token from token where status=1";
  db.all(sql, (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    } else {
      res.statusCode = 200;
      return res.json({
        message: "success",
        data: rows,
      });
    }
  });
};

export default sendNotification;
