var db = require("../../../database/dbHelper");
const axios = require("axios");

const sendNotification = (req, res, next) => {
  var sql = "select token from token";
  db.all(sql, (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    } else {
      res.statusCode = 200;
      let result = rows.map((a) => a.token);
      const headers = {
        "Content-Type": "application/json",
        Authorization: "key=AAAApJtIZOc:APA91bHmH5HjVTjU8X7xgCaVwdFWXyDqh_MF9xIrxjyPslqBrEanrNGrFQCN82aIHwLfrNCfR4fZArttfgoh3W5CMF0areL7dNhNgUxSU97j2rOg1yHcdk4PnmSdO-Zzr6rpYQIGFpq2",
        "Cache-Control": "no-cache",
      };
      const postData = {
        registration_ids: result,
        priority: "high",
        notification: {
          title: req.body.title,
        },
      };
      axios
        .post("https://fcm.googleapis.com/fcm/send", postData, {
          headers: headers,
        })
        .then((res) => {
          console.log(`statusCode: ${res.status}`);
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
      return res.json({
        message: "sent",
      });
    }
  });
};

export default sendNotification;
