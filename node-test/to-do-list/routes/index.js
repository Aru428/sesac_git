const express = require("express");
const router = express.Router();

const test = require("../controller/Cmain");
router.get("/", test.test);
router.get("/get", test.getTest);

module.exports = router;
