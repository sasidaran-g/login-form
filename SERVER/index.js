const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(bodyparser.json());
app.use(cors());

const port = process.env.PORT || 8080;

const routerLogin = require("./Router/login.router");

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

app.use("/", routerLogin);

app.listen(port, () => {
  console.log("listening port==>>", port);
});
