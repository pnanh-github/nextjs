import db from "database/dbHelper";

const tokenEdit = (req, res, next) => {
  switch (req.method) {
    case "DELETE":
      var sql = "DELETE FROM token WHERE id=?";
      db.run(sql, [req.query.id], (rs, err) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        } else {
          return res.status(200).json({ message: "successful" });
        }
      });
      break;
    default:
      return res.status(400).end(`Method ${req.method} Not Allowed`);
  }
};
export default tokenEdit;
