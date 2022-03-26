var db = require("../../../database/dbHelper");

const token = (req, res, next) => {
  function tokens() {
    var sql = "select * from token";
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
  }

  function addToken() {
    var device_token = req.body.token;
    var type = req.body.type;
    var params = [device_token, type];
    var sql = "INSERT INTO token(token, type, status) VALUES(?,?,1)";
    db.run(sql, params, (result, err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      } else {
        return res.status(200).json({ message: "successful" });
      }
    });
  }
  switch (req.method) {
    case "GET":
      return tokens();
    case "POST":
      return addToken();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
export default token;
