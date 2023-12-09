const express = require("express");
const router = express.Router();
const user = require("../controller/Cuser");

router.post("/signup", user.signUp);

module.exports = router;
