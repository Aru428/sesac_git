const express = require("express");
const router = express.Router();

const main = require("../controller/Cmain");
router.get("/", main.test);

module.exports = router;
