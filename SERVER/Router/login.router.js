const express = require("express");
const router = express.Router();
const loginController = require("../controller/login-controller/login.controller");

router.post("/logincheck", loginController.logincheck);

module.exports = router;
