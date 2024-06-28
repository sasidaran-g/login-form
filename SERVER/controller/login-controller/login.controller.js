const Queries = require("../../Quires/query");
// const db = require("../../Database/db");

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "onlineshop",
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected successfully!");
});

exports.logincheck = (req, res) => {
  const { email, password } = req.body;
  console.log("req body:", req.body);
  console.log("email:", email);
  console.log("password:", password);
  db.query(Queries.login, [email, password], (err, result) => {
    console.log("query-->>", Queries.login);
    if (err) {
      console.log("err", err);
      send500Error("err", res);
    } else {
      console.log("result:-", result);
      send200AndData(res, result);
    }
  });
};

function send200AndData(res, result) {
  res.status(200).json({ status: "Success", data: result });
  return;
}

function send500Error(res, message) {
  res.status(500).send(message);
  return;
}
